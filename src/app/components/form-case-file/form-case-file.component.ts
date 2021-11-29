import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Contacto } from '../../pages/models/contacto';
import { Cliente } from '../../pages/models/cliente';
import { ClientesService } from '../../services/clientes.service';
import { ContactosService } from '../../services/contactos.service';
import { DataLocalService } from '../../services/data-local.service';
import { ExpedientesService } from '../../services/expedientes.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-form-case-file',
  templateUrl: './form-case-file.component.html',
  styleUrls: ['./form-case-file.component.scss'],
})
export class FormCaseFileComponent implements OnInit {

  @Input() id: string;

  public tipos         : string[]     = [];
  public materias      : string[]     = [];
  public clients       : Cliente[]    = [];
  public instituciones : Contacto[]   = [];
  public contrapartes  : Contacto[]   = [];
  public colaboradores : Contacto[]   = [];
  public contacts      : Contacto[]   = [];

  post = {
    nombreExpediente   : '',
    numExpediente      : '',
    cuantia            : '',
    sintesisAsunto     : '',
    nombreAbogado      : '',
    nombreContraparte  : '',
    institucionJudicial: '',
    tipo               : '',
    materia            : '',
    nombreCliente      : ''
  }

  constructor(private expedientesService: ExpedientesService,
              private dataLocalService: DataLocalService,
              private contactosService: ContactosService,
              private clientesService: ClientesService,
              private modalCtrl: ModalController) { }

  ngOnInit() {

    this.tipos    = this.expedientesService.tipos;
    this.materias = this.expedientesService.materias;
    this.cargarExpediente(this.id);
    this.cargarContactos();
    this.cargarClientes();

  }

  // Posteo, usando promesa
  async crearPost() {
    // Devuelve TRUE
    const creado = await this.expedientesService.createFileCase(this.post);

    this.post = {
      nombreExpediente   : '',
      numExpediente      : '',
      cuantia            : '',
      sintesisAsunto     : '',
      nombreAbogado      : '',
      nombreContraparte  : '',
      institucionJudicial: '',
      tipo               : '',
      materia            : '',
      nombreCliente      : this.id
    }

    this.dismissModal();
    this.dataLocalService.presentToastWithOptions('Se ha creado un nuevo expediente');
  }

  async dismissModal() {

    await this.modalCtrl.dismiss({'dismissed': true});

  }

  cargarExpediente(id: string) {

    if (id === 'nuevo') {
      return;
    }

    this.expedientesService.getExpediente(id).pipe(delay(100)).subscribe(judgment => {

      if (!judgment) {
        return;
      }

      const { nombreCliente: { _id } } = judgment;

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
      console.log(clients);
      this.clients = clients;
    });
  }

}
