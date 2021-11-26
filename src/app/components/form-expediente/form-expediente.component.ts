import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { DataLocalService } from '../../services/data-local.service';
import { ContactosService } from '../../services/contactos.service';
import { ClientesService } from '../../services/clientes.service';
import { ExpedientesService } from '../../services/expedientes.service';
import { Contacto } from '../../pages/models/contacto';
import { Cliente } from '../../pages/models/cliente';
import { Expediente } from '../../pages/models/expediente';

@Component({
  selector: 'app-form-expediente',
  templateUrl: './form-expediente.component.html',
  styleUrls: ['./form-expediente.component.scss'],
})
export class FormExpedienteComponent implements OnInit {

  @ViewChild('formJudgment') formJudgment!: NgForm;
  loading: HTMLIonLoadingElement;

  public judgmentForm  : FormGroup;
  public tipos         : string[]   = [];
  public materias      : string[]   = [];
  public instituciones : Contacto[] = [];
  public contrapartes  : Contacto[] = [];
  public colaboradores : Contacto[] = [];
  public contacts      : Contacto[] = [];
  public clients       : Cliente[]  = [];
  public expedienteSeleccionado: Expediente;

  constructor(private formBuilder: FormBuilder,
              private dataLocalService: DataLocalService,
              private contactosService: ContactosService,
              private clientesService: ClientesService,
              private expedientesService: ExpedientesService) { }

  ngOnInit() {

    this.tipos    = this.expedientesService.tipos;
    this.materias = this.expedientesService.materias;
    this.cargarContactos();
    this.cargarClientes();

    this.judgmentForm = this.formBuilder.group({

      nombreExpediente   : ['Juicio Ejecutivo Mercantil'],
      numExpediente      : ['345/2021'],
      cuantia            : ['5000'],
      sintesisAsunto     : ['Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.'],
      nombreAbogado      : [''],
      nombreContraparte  : [''],
      institucionJudicial: [''],
      tipo               : [''],
      materia            : [''],
      nombreCliente      : [''],

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

  crearExpediente() {

    this.expedientesService.createExpediente(this.judgmentForm.value).subscribe((resp: any) => {
      console.log(resp);

      this.judgmentForm.reset();

      this.dataLocalService.presentToast('Se ha creado un nuevo expediente');

    }, (err) => {
      this.dataLocalService.presentToast('Al parecer ocurrio un error técnico');
      return false;
    });

  }

}