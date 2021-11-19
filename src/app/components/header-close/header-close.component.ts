import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-header-close',
  templateUrl: './header-close.component.html',
  styleUrls: ['./header-close.component.scss'],
})
export class HeaderCloseComponent implements OnInit {

  @Input() titulo: String = '';

  constructor(public modalContrl: ModalController) { }

  ngOnInit() {}

  async dismissModal() {

    await this.modalContrl.dismiss({'dismissed': true});

  }
}
