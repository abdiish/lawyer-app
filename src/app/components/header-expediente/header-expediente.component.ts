import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ExpedientePage } from '../../pages/expedientes/expediente/expediente.page';

@Component({
  selector: 'app-header-expediente',
  templateUrl: './header-expediente.component.html',
  styleUrls: ['./header-expediente.component.scss'],
})
export class HeaderExpedienteComponent implements OnInit {

  @Input() titulo: String = '';

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

}
