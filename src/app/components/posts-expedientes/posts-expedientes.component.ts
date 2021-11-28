import { Component, Input, OnInit } from '@angular/core';
import { Expediente } from '../../interfaces/cargar-expedientes';

@Component({
  selector: 'app-posts-expedientes',
  templateUrl: './posts-expedientes.component.html',
  styleUrls: ['./posts-expedientes.component.scss'],
})
export class PostsExpedientesComponent implements OnInit {

  @Input() judgments: Expediente[] = [];
  public textoBuscar: string = '';

  constructor() { }

  ngOnInit() {
    console.log(this.judgments);

  }

  onSearchChange(event: any) {
    this.textoBuscar = event.detail.value;
  }

}
