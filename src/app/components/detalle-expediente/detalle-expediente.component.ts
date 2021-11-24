import { Component, Input, OnInit } from '@angular/core';
import { Expediente } from '../../interfaces/cargar-expedientes';
import { ExpedientesService } from '../../services/expedientes.service';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-detalle-expediente',
  templateUrl: './detalle-expediente.component.html',
  styleUrls: ['./detalle-expediente.component.scss'],
})
export class DetalleExpedienteComponent implements OnInit {

  @Input() id: string;
  loading: HTMLIonLoadingElement;

  judgment: Expediente =  {};
  load    : boolean;

  slideOpts = { slidesPerView: 0.9, freeMode: true }

  slideChips = { slidesPerView: 0.77, freeMode: true }

  constructor(private expedientesService: ExpedientesService,
              private DataLocalService: DataLocalService) { }

  ngOnInit() {

    this.expedientesService.getExpediente(this.id).subscribe(resp => {

      this.load = true;
      this.judgment = resp;

    }, (err)  => {
      this.DataLocalService.presentToast('Al parecer ocurrio un error técnico');
      return false;
    });
  }

}
