import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ExpedientesService } from '../../services/expedientes.service';
import { DataLocalService } from '../../services/data-local.service';
import { DetalleExpedienteComponent } from '../detalle-expediente/detalle-expediente.component';
import { FormUpdateCaseFileComponent } from '../form-update-case-file/form-update-case-file.component';
import { Expediente } from '../../interfaces/cargar-expedientes';

@Component({
  selector: 'app-popover-menu',
  templateUrl: './popover-menu.component.html',
  styleUrls: ['./popover-menu.component.scss'],
})
export class PopoverMenuComponent implements OnInit {

  @Input() id: string; // Enviar info a componente hijo
  public judgments  : Expediente[] = [];

  constructor(private popoverCtrl: PopoverController,
              private modalCtrl: ModalController,
              private alertCtrl: AlertController,
              private expedientesService: ExpedientesService,
              private dataLocalServie: DataLocalService,
              private route: Router) { }

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
      //component: FormExpedienteComponent, // Cambiar a nuevo formulario
      component: FormUpdateCaseFileComponent,
      componentProps: {
        id
      }
    });
    this.closePopover();
    return await modal.present();
  }

  // Eliminar expediente
  async eliminar(id: string) {

    const alert = await this.alertCtrl.create({
      header: 'Eliminar expediente',
      message: '¿Está seguro que desea eliminar este expediente de forma permanente?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            return;
          }
        }, {
          text: 'Aceptar',
          role: 'acept',
          handler: () => {
            console.log('Confirm Aceptar');
            this.expedientesService.deleteExpediente(id)
              .subscribe(resp =>{
                console.log('Respuesta al eliminar expediente:',resp);
                this.dataLocalServie.presentToastWithOptions('Se eliminó el expediente');
              });
          }
        }
      ]
    });

    this.closePopover();
    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  // Cerrar popover
  closePopover() {
    this.popoverCtrl.dismiss();
  }

}
