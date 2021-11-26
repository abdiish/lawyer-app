import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { ExpedientesService } from '../../services/expedientes.service';
import { DetalleExpedienteComponent } from '../detalle-expediente/detalle-expediente.component';

@Component({
  selector: 'app-popover-menu',
  templateUrl: './popover-menu.component.html',
  styleUrls: ['./popover-menu.component.scss'],
})
export class PopoverMenuComponent implements OnInit {

  @Input() id: string; // Enviar info a componente hijo

  constructor(private popoverCtrl: PopoverController,
              private modalCtrl: ModalController,
              private expedientesService: ExpedientesService) { }

  ngOnInit() {}

  // Muestra ventana modal con información del expediente
  async verDetalle(id: string) {
    const modal = await this.modalCtrl.create({
      component: DetalleExpedienteComponent,
      componentProps: {
        id
      }
    });
    this.closePopover();
    return await modal.present();
  }

  // Cerrar popover
  closePopover() {
    this.popoverCtrl.dismiss();
  }

}
