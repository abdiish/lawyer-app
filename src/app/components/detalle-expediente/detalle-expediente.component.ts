import { Component, Input, OnInit } from '@angular/core';
import { Expediente } from '../../interfaces/cargar-expedientes';
import { ExpedientesService } from '../../services/expedientes.service';
import { DataLocalService } from '../../services/data-local.service';
import { PopoverController } from '@ionic/angular';
import { PopoverMenuComponent } from '../popover-menu/popover-menu.component';

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

  slideOpts = {
    slidesPerView: 0.9,
    freeMode: true
  }

  slideChips = {
    slidesPerView: 0.77,
    freeMode: true
  }

  constructor(private expedientesService: ExpedientesService,
              private DataLocalService: DataLocalService,
              private popoverCtrl: PopoverController) { }

  ngOnInit() {

    this.expedientesService.getExpediente(this.id).subscribe(resp => {

      this.load = true;
      this.judgment = resp;

    }, (err)  => {
      this.DataLocalService.presentToast('Al parecer ocurrio un error técnico');
      return false;
    });
  }

  async presentPopover(ev: any) {

    const popover = await this.popoverCtrl.create({
      component: PopoverMenuComponent,
      event: ev,
      translucent: true,
      backdropDismiss: false
    });

    await popover.present();

    const { data } = await popover.onWillDismiss();
    console.log(data);

  }

}
