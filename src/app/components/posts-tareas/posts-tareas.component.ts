import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../../pages/models/tarea';

@Component({
  selector: 'app-posts-tareas',
  templateUrl: './posts-tareas.component.html',
  styleUrls: ['./posts-tareas.component.scss'],
})
export class PostsTareasComponent implements OnInit {

  @Input() tareas: Tarea[] = [];

  public textoBuscar : string = '';
  public statusTarea : string = 'noStatus';

  constructor() { }

  ngOnInit() {}

  onSearchChange(event: any) {
    this.textoBuscar = event.detail.value;
  }

}
