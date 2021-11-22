import { Component, OnInit } from '@angular/core';
import { Expediente } from '../../interfaces/cargar-expedientes';
import { ExpedientesService } from '../../services/expedientes.service';
import { ModalController } from '@ionic/angular';
import { DetalleExpedienteComponent } from '../../components/detalle-expediente/detalle-expediente.component';
import { ExpedientePage } from './expediente/expediente.page';

@Component({
  selector: 'app-expedientes',
  templateUrl: './expedientes.page.html',
  styleUrls: ['./expedientes.page.scss'],
})
export class ExpedientesPage implements OnInit {

  judgments: Expediente[] = [];

  constructor(private expedientesService: ExpedientesService,
              private modalCtrl: ModalController) { }

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

  async verDetalle(id: string) {
    const modal = await this.modalCtrl.create({
      component: DetalleExpedienteComponent,
      componentProps: {
        id
      }
    });

    return await modal.present();
  }

  async formExpediente() {

    const modal = await this.modalCtrl.create({
      component: ExpedientePage,
      cssClass: 'my-custom-class'
    });

    return await modal.present();
  }


}
