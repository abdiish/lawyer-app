import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Expediente } from '../../interfaces/cargar-expedientes';
import { ExpedientesService } from '../../services/expedientes.service';
import { DataLocalService } from '../../services/data-local.service';
import { ActionSheetController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-expediente',
  templateUrl: './detalle-expediente.component.html',
  styleUrls: ['./detalle-expediente.component.scss'],
})
export class DetalleExpedienteComponent implements OnInit {

  @Input() id: string; // Enviar información hacia un componente hijo

  loading: HTMLIonLoadingElement;

  public judgment: Expediente =  {};
  public load    : boolean;

  constructor(private expedientesService: ExpedientesService,
              private DataLocalService: DataLocalService,
              private modalCtrl: ModalController) { }

  ngOnInit() {

    this.expedientesService.getExpediente(this.id).subscribe(resp => {
      this.load = true;
      this.judgment = resp;

    }, (err)  => {
      this.DataLocalService.presentToast('Al parecer ocurrio un error técnico');
      return false;
    });
  }

}
