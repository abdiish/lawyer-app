import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../../pages/models/tarea';
import { PopoverController } from '@ionic/angular';
import { PopoverMenuTareaComponent } from '../popover-menu-tarea/popover-menu-tarea.component';

@Component({
  selector: 'app-post-tarea',
  templateUrl: './post-tarea.component.html',
  styleUrls: ['./post-tarea.component.scss'],
})
export class PostTareaComponent implements OnInit {

  @Input() tarea: Tarea = {};

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {}

  async presentPopover(ev: any) {
    console.log(ev);

    const popover = await this.popoverCtrl.create({
      component: PopoverMenuTareaComponent,
      event: ev,
      translucent: true,
      backdropDismiss: false
    });

    await popover.present();

  }

}
