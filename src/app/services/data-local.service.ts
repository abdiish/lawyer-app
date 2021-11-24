import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  constructor(private toastCtrl: ToastController) { }

  async presentToast(message: string) {

    const toast = await this.toastCtrl.create({
      message,
      duration: 1500
    });

    toast.present();
  }

}
