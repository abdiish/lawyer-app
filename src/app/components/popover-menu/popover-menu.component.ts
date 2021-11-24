import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-menu',
  templateUrl: './popover-menu.component.html',
  styleUrls: ['./popover-menu.component.scss'],
})
export class PopoverMenuComponent implements OnInit {

  items = Array(7);

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {}

  onClick( valor: number ) {

    this.popoverCtrl.dismiss({
      item: valor
    });

  }

}
