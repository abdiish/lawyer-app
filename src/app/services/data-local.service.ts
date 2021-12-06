import { Injectable } from '@angular/core';
import { ActionSheetController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  constructor(private toastCtrl: ToastController,
              private actionSheetCtrl: ActionSheetController) { }

  async presentToast(message: string) {

    const toast = await this.toastCtrl.create({
      message,
      duration: 1500
    });

    toast.present();
  }

  async presentToastWithOptions(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      position: 'bottom',
      buttons: [
       {
          text: 'Aceptar',
          role: 'acept',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Adjuntar archivos',
      backdropDismiss: false,
      buttons: [{
        text: 'Cámara',
        role: 'destructive',
        icon: 'camera-outline',
        handler: () => {
          console.log('Delete clicked');
        }
      },
      {
        text: 'Galería',
        icon: 'images-outline',
        handler: () => {
          console.log('Share clicked');
        }
      },
      {
        text: 'Archivo',
        icon: 'documents-outline',
        handler: () => {
          console.log('Play clicked');
        }
      },
      {
        text: 'Cancelar',
        icon: 'close-circle-outline',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });

    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }




}
