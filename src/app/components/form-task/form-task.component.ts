import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { TareasService } from '../../services/tareas.service';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.scss'],
})
export class FormTaskComponent implements OnInit {

  post = {
    titulo_tarea: '',
    descripcion : '',
    fecha_limite: '',
    responsable : '',
    status      : '',
  }

  constructor(private tareasService: TareasService,
              private modalContrl: ModalController,
              private dataLocalService: DataLocalService) { }

  ngOnInit() {}

  // Crear tarea
  async crearTarea(){
    const creado = await this.tareasService.createTask(this.post);
  }

  opciones() {
    this.dataLocalService.presentActionSheet();
  }

  async dismissModal() {

    await this.modalContrl.dismiss({'dismissed': true});

  }

}
