import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { Expediente } from '../../interfaces/cargar-expedientes';
import { PopoverMenuComponent } from '../popover-menu/popover-menu.component';

@Component({
  selector: 'app-post-expediente',
  templateUrl: './post-expediente.component.html',
  styleUrls: ['./post-expediente.component.scss'],
})
export class PostExpedienteComponent implements OnInit {

  @Input() judgment: Expediente = {};

  constructor(private popoverCtrl: PopoverController,
              private router: Router) { }

  ngOnInit() {}

  async presentPopover(ev: any, id: string) {

    const popover = await this.popoverCtrl.create({
      component: PopoverMenuComponent,
      event: ev,
      translucent: true,
      backdropDismiss: false,
      componentProps: {
        id
      }
    });

    await popover.present();

  }

  mostrarTareas(id: string) {
    console.log('Id de expediente/tareas:',id);
    this.router.navigateByUrl('/tareas');
  }

  mostrarDocumentos(id: string) {
    console.log('Id de expediente/documentos:',id);

  }

}
