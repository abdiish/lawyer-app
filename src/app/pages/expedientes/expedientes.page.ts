import { Component, OnInit } from '@angular/core';
import { Expediente } from '../../interfaces/cargar-expedientes';
import { ExpedientesService } from '../../services/expedientes.service';

@Component({
  selector: 'app-expedientes',
  templateUrl: './expedientes.page.html',
  styleUrls: ['./expedientes.page.scss'],
})
export class ExpedientesPage implements OnInit {

  judgments: Expediente[] = [];

  constructor(private expedientesService: ExpedientesService) { }

  ngOnInit() {
    this.cargarExpedientes();
  }

  cargarExpedientes() {

    this.expedientesService.getExpedientes().subscribe(({total, judgments}) => {
      console.log(judgments);

      this.judgments = judgments;
    });
  }

  onSearchChange(event) {}

}
