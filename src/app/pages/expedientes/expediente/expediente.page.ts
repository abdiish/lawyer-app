import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactosService } from '../../../services/contactos.service';
import { ClientesService } from '../../../services/clientes.service';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ExpedientesService } from '../../../services/expedientes.service';
import { Contacto } from '../../models/contacto';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-expediente',
  templateUrl: './expediente.page.html',
  styleUrls: ['./expediente.page.scss'],
})

export class ExpedientePage implements OnInit {

  @ViewChild('formJudgment') formJudgment!: NgForm;

  public judgmentForm : FormGroup;
  public tipos        : string[]   = [];
  public materias     : string[]   = [];
  public contacts     : Contacto[] = [];
  public clients      : Cliente[]  = [];

  constructor(private formBuilder: FormBuilder,
              private contactosService: ContactosService,
              private clientesService: ClientesService,
              private ExpedientesService: ExpedientesService) { }

  ngOnInit() {

    this.tipos    = this.ExpedientesService.tipos;
    this.materias = this.ExpedientesService.materias;
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
      console.log(contacts);
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
