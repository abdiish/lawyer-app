import { Component, Input, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Tarea } from '../models/tarea';
import { TareasService } from '../../services/tareas.service';
import { IonSegment, ModalController } from '@ionic/angular';
import { FormTaskComponent } from '../../components/form-task/form-task.component';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage implements OnInit {

  @ViewChild(IonSegment, {static: true}) segment: IonSegment;
  @Input() id: string;

  public habilitado = true;
  public statusTarea : string;
  public prioridad   : string;
  public numTareas   : number;
  public titleLabel  : string = 'MIS TAREAS';
  public textoBuscar : string = '';
  public load        : boolean;
  public tareas      : Tarea[] = [];
  public noStatus    : Tarea[] = [];
  public pending     : Tarea[] = [];
  public inProgress  : Tarea[] = [];
  public completed   : Tarea[] = [];

  constructor(private tareasService: TareasService,
              private modalCtrl: ModalController) { }

  ngOnInit() {
    this.siguientes();
  }

  // Refresh
  // recargar(event) {
  //   console.log('Refresh:',event);

  //   this.siguientes(event);
  //   this.habilitado = true
  //   this.tareas = [];

  // }

  // Cargar tareas
  siguientes() {
    this.tareasService.getTasks().subscribe(resp => {
      console.log('Respuesta, siguientes/tareas:',resp);
      this.load = true;
      this.tareas.push(...resp.tareas);
      this.numTareas = this.tareas.length;

      resp.tareas.forEach(element => {

        if (element.statusTarea === 'noStatus') {
          this.noStatus.push(element);
        }

        if (element.statusTarea === 'pending') {
          this.pending.push(element);
        }

        if (element.statusTarea === 'inProgress') {
          this.inProgress.push(element);
        }

        if (element.statusTarea === 'completed') {
          this.completed.push(element);
        }

      })


      // if (event) {

      //   console.log('event detail complete',event.target.complete());

      //   if (resp.tareas.length === 0) {
      //     this.habilitado = false;
      //   }
      // }

    });
  }

   // Modal, formulario para crear nuevo expediente
   async formTarea() {

    const modal = await this.modalCtrl.create({
      component: FormTaskComponent
    });

    return await modal.present();
  }


  segmentChanged(event?) {

    console.log('Segment Changed:',event);
    this.statusTarea = event.detail.value;

    console.log('Numero de tareas:',this.numTareas);

    if (this.statusTarea === '') {
      this.titleLabel = "MIS TAREAS";
      this.numTareas = this.tareas.length;
    }

    if (this.statusTarea === 'noStatus') {
      this.titleLabel = "SIN ESTADO";
      this.numTareas = this.noStatus.length;
    }

    if (this.statusTarea === 'pending') {
      this.titleLabel = "PENDIENTES";
      this.numTareas = this.pending.length;
    }

    if (this.statusTarea === 'inProgress') {
      this.titleLabel = "EN PROGRESO";
      this.numTareas = this.inProgress.length;
    }

    if (this.statusTarea === 'completed') {
      this.titleLabel = "COMPLETADAS";
      this.numTareas = this.completed.length;
    }

  }

  onSearchChange(event) {

    this.textoBuscar = event.detail.value;

  }
}
