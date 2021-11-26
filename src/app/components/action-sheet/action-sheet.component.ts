import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.component.html',
  styleUrls: ['./action-sheet.component.scss'],
})
export class ActionSheetComponent implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Expediente',
      backdropDismiss: false,
      buttons: [{
        text: 'Editar',
        role: 'destructive',
        icon: 'trash-outline',
        handler: () => {
          console.log('Delete clicked');
        }
      },
      {
        text: 'Eliminar',
        icon: 'share-outline',
        handler: () => {
          console.log('Share clicked');
        }
      },
      {
        text: 'Archivar',
        icon: 'caret-forward-circle-outline',
        handler: () => {
          console.log('Play clicked');
        }
      },
      {
        text: 'Cancel',
        icon: 'close-outline',
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
