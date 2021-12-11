import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { TareasService } from '../../services/tareas.service';
import { DataLocalService } from '../../services/data-local.service';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/cargar-usuarios';
import Swiper, { FreeMode } from 'swiper';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.scss'],
})
export class FormTaskComponent implements OnInit {

  public tempImages: string[]  = [];
  public usuarios  : Usuario[] = [];

  post = {
    tituloTarea      : '',
    descripcionTarea : '',
    statusTarea      : '',
    prioridadTarea   : '',
    usuario          : ''
  }

  constructor(private tareasService: TareasService,
              private usuarioService: UsuarioService,
              private modalContrl: ModalController,
              private dataLocalService: DataLocalService) { }

  ngOnInit() {
    this.cargarUsuarios();
  }

  // Crear tarea
  async crearTarea(){
    const creado = await this.tareasService.createTask(this.post);
  }

  opciones() {
    this.dataLocalService.presentActionSheet();
  }

  // Cargar usuarios
  cargarUsuarios() {

    this.usuarioService.getUsuarios().subscribe(({usuarios}) => {
      console.log(usuarios);
      this.usuarios = usuarios;
    });

  }

  async dismissModal() {

    await this.modalContrl.dismiss({'dismissed': true});

  }

}
