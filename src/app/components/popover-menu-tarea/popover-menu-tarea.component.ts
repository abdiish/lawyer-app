import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-menu-tarea',
  templateUrl: './popover-menu-tarea.component.html',
  styleUrls: ['./popover-menu-tarea.component.scss'],
})
export class PopoverMenuTareaComponent implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {}

  eliminar() {

  }

  actualizar() {

  }

  cambiar() {

  }

  close() {
    this.popoverCtrl.dismiss();
  }

}
