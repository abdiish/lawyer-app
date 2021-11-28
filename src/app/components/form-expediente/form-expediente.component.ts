import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { DataLocalService } from '../../services/data-local.service';
import { ContactosService } from '../../services/contactos.service';
import { ClientesService } from '../../services/clientes.service';
import { ExpedientesService } from '../../services/expedientes.service';
import { Contacto } from '../../pages/models/contacto';
import { Cliente } from '../../pages/models/cliente';
import { Expediente } from '../../pages/models/expediente';
import { ModalController } from '@ionic/angular';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-form-expediente',
  templateUrl: './form-expediente.component.html',
  styleUrls: ['./form-expediente.component.scss'],
})
export class FormExpedienteComponent implements OnInit {

  @Input() id: string;
  @ViewChild('formJudgment') formJudgment!: NgForm;
  loading: HTMLIonLoadingElement;

  public judgmentForm  : FormGroup;
  public tipos         : string[]     = [];
  public materias      : string[]     = [];
  public judgments     : Expediente[] = [];
  public instituciones : Contacto[]   = [];
  public contrapartes  : Contacto[]   = [];
  public colaboradores : Contacto[]   = [];
  public contacts      : Contacto[]   = [];
  public clients       : Cliente[]    = [];
  public expedienteSeleccionado: Expediente;

  constructor(private formBuilder: FormBuilder,
              private dataLocalService: DataLocalService,
              private contactosService: ContactosService,
              private clientesService: ClientesService,
              private expedientesService: ExpedientesService,
              public modalCtrl: ModalController) { }

  ngOnInit() {

    this.tipos    = this.expedientesService.tipos;
    this.materias = this.expedientesService.materias;
    this.cargarExpediente(this.id);
    this.cargarContactos();
    this.cargarClientes();

    this.judgmentForm = this.formBuilder.group({

      nombreExpediente   : ['Demanda pensión alimenticia'],
      numExpediente      : ['027/11/2021'],
      cuantia            : ['1000'],
      sintesisAsunto     : ['Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.'],
      nombreAbogado      : [''],
      nombreContraparte  : [''],
      institucionJudicial: [''],
      tipo               : [''],
      materia            : [''],
      nombreCliente      : [''],

    });
  }

  cargarExpediente(id: string) {

    if (id === 'nuevo') {
      return;
    }

    this.expedientesService.getExpediente(id).pipe(delay(100)).subscribe(judgment => {

      if (!judgment) {
        return;
      }

      const {
        nombreExpediente,
        numExpediente,
        cuantia,
        sintesisAsunto,
        nombreAbogado,
        nombreContraparte,
        institucionJudicial,
        tipo,
        materia,
        nombreCliente: { _id }
      } = judgment;

      this.expedienteSeleccionado = judgment;
      this.judgmentForm.setValue({
        nombreExpediente,
        numExpediente,
        cuantia,
        sintesisAsunto,
        nombreAbogado,
        nombreContraparte,
        institucionJudicial,
        tipo,
        materia,
        nombreCliente: _id
      });

    });
  }

  cargarContactos() {

    this.contactosService.getContacts().subscribe(({contacts}) => {

      contacts.forEach(element => {

        if (element.tipo === 'Institución Judicial') {
          this.instituciones.push(element);
        }

        if (element.tipo === 'Abogado Contraparte') {
          this.contrapartes.push(element);
        }

        // TODO: Crear servicio en Backend para colaboradores y consumirlo
        if (element.tipo === 'Abogado Contraparte') {
          this.colaboradores.push(element);
        }

      });

      this.contacts = contacts;
    });
  }

  cargarClientes() {

    this.clientesService.getClients().subscribe(({clients}) => {
      this.clients = clients;
    });
  }

  saveData() {

    if (this.expedienteSeleccionado) {
      const data = {
        ...this.judgmentForm.value,
        _id: this.expedienteSeleccionado._id
      }
      // Actualizar información del expediente
      this.expedientesService.updateExpediente(data).subscribe(resp => {
        this.judgmentForm.reset();
        this.dismissModal();
        this.dataLocalService.presentToastWithOptions('Información de expediente actualizada');
      }, (err) => {
        this.dataLocalService.presentToast('Al parecer ocurrio un error técnico');
        return err;
      });
    }else{
      // Crear nuevo expediente
      this.expedientesService.createExpediente(this.judgmentForm.value).subscribe((resp: any) => {

        this.dataLocalService.presentToastWithOptions('Se ha creado un nuevo expediente');
      }, (err) => {
        this.dataLocalService.presentToast('Al parecer ocurrio un error técnico');
        return err;
      });
    }

  }

  async dismissModal() {

    await this.modalCtrl.dismiss({'dismissed': true});

  }

}
