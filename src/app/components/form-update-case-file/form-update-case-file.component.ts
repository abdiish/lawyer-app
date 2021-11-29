import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Cliente } from '../../pages/models/cliente';
import { Contacto } from '../../pages/models/contacto';
import { Expediente } from '../../pages/models/expediente';
import { DataLocalService } from '../../services/data-local.service';
import { ContactosService } from '../../services/contactos.service';
import { ClientesService } from '../../services/clientes.service';
import { ExpedientesService } from '../../services/expedientes.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-form-update-case-file',
  templateUrl: './form-update-case-file.component.html',
  styleUrls: ['./form-update-case-file.component.scss'],
})
export class FormUpdateCaseFileComponent implements OnInit {

  @Input() id: string;
  @ViewChild('formJudgment') formJudgment!: NgForm;

  public judgmentForm  : FormGroup;
  public tipos         : string[]     = [];
  public materias      : string[]     = [];
  public judgments     : Expediente[] = [];
  public instituciones : Contacto[]   = [];
  public contrapartes  : Contacto[]   = [];
  public colaboradores : Contacto[]   = [];
  public contacts      : Contacto[]   = [];
  public clients       : Cliente[]    = [];
  public expediente    : Expediente;

  constructor(private formBuilder: FormBuilder,
              private dataLocalService: DataLocalService,
              private contactosService: ContactosService,
              private clientesService: ClientesService,
              private expedientesService: ExpedientesService,
              private modalCtrl: ModalController) { }

  ngOnInit() {

    this.tipos    = this.expedientesService.tipos;
    this.materias = this.expedientesService.materias;
    this.cargarExpediente(this.id);
    this.cargarContactos();
    this.cargarClientes();

    this.judgmentForm = this.formBuilder.group({

      nombreExpediente   : [''],
      numExpediente      : [''],
      cuantia            : [''],
      sintesisAsunto     : [''],
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

      this.expediente = judgment;
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

    if (this.expediente) {
      const data = {
        ...this.judgmentForm.value,
        _id: this.expediente._id
      }
      // Actualizar información del expediente
      this.expedientesService.updateExpediente(data).subscribe(resp => {
        this.judgmentForm.reset();
        this.dismissModal();
        this.dataLocalService.presentToastWithOptions('Se actualizó la información');
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
