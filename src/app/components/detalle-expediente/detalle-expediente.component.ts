import { Component, Input, OnInit } from '@angular/core';
import { Expediente } from '../../interfaces/cargar-expedientes';
import { ExpedientesService } from '../../services/expedientes.service';

@Component({
  selector: 'app-detalle-expediente',
  templateUrl: './detalle-expediente.component.html',
  styleUrls: ['./detalle-expediente.component.scss'],
})
export class DetalleExpedienteComponent implements OnInit {

  @Input() id: string;

  judgment: Expediente =  {};
  load    : boolean;

  slideOpts = { slidesPerView: 0.9, freeMode: true }

  slideChips = { slidesPerView: 0.77, freeMode: true }

  constructor(private expedientesService: ExpedientesService) { }

  ngOnInit() {

    this.expedientesService.getExpediente(this.id).subscribe(resp => {
      console.log(resp);
      this.judgment = resp;
      this.load = true;
    });
  }

}
