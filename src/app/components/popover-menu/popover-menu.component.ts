import { Component, Input, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { DetalleExpedienteComponent } from '../detalle-expediente/detalle-expediente.component';
import { FormExpedienteComponent } from '../form-expediente/form-expediente.component';

@Component({
  selector: 'app-popover-menu',
  templateUrl: './popover-menu.component.html',
  styleUrls: ['./popover-menu.component.scss'],
})
export class PopoverMenuComponent implements OnInit {

  @Input() id: string; // Enviar info a componente hijo

  constructor(private popoverCtrl: PopoverController,
              private modalCtrl: ModalController) { }

  ngOnInit() {}

  // Muestra ventana modal con información del expediente
  async detalle(id: string) {
    const modal = await this.modalCtrl.create({
      component: DetalleExpedienteComponent,
      componentProps: {
        id
      }
    });
    this.closePopover();
    return await modal.present();
  }

  // Muestra ventana modal, formulario para editar expediente
  async actualizar(id: string) {
    const modal = await this.modalCtrl.create({
      component: FormExpedienteComponent,
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
