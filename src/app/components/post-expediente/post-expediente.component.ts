import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { Expediente } from '../../interfaces/cargar-expedientes';
import { PopoverMenuComponent } from '../popover-menu/popover-menu.component';
import { NativePageTransitions, NativeTransitionOptions } from '@awesome-cordova-plugins/native-page-transitions/ngx';

@Component({
  selector: 'app-post-expediente',
  templateUrl: './post-expediente.component.html',
  styleUrls: ['./post-expediente.component.scss'],
})
export class PostExpedienteComponent implements OnInit {

  @Input() judgment: Expediente = {};

  constructor(private nativePageTransitions: NativePageTransitions,
              private popoverCtrl: PopoverController,
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

  async mostrarTareas(id: string) {

    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 500, // duracion de transicion
      slowdownfactor: 3,
      slidePixels: 20,// Superposición de vistas
      androiddelay: 150,// Tiempo de espera para comenzar la transicion
      iosdelay: 100,
      fixedPixelsTop: 0, // Animar pixeles en parte suérior
      fixedPixelsBottom: 90
    }

    this.nativePageTransitions.slide(options);

    await this.router.navigate(['/tareas', id]);
  }

  mostrarDocumentos(id: string) {
    console.log('Id de expediente/documentos:',id);

  }

}
