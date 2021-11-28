import { Component, Input, OnInit } from '@angular/core';
import { Expediente } from '../../interfaces/cargar-expedientes';
import { ExpedientesService } from '../../services/expedientes.service';
import { ModalController, PopoverController } from '@ionic/angular';
import { PopoverMenuComponent } from 'src/app/components/popover-menu/popover-menu.component';
import { FormExpedienteComponent } from '../../components/form-expediente/form-expediente.component';

@Component({
  selector: 'app-expedientes',
  templateUrl: './expedientes.page.html',
  styleUrls: ['./expedientes.page.scss'],
})
export class ExpedientesPage implements OnInit {

  @Input() id: string;

  public judgments  : Expediente[] = [];
  public textoBuscar: string = '';

  constructor(private expedientesService: ExpedientesService,
              private modalCtrl: ModalController,
              private popoverCtrl: PopoverController) { }

  ngOnInit() {
    this.cargarExpedientes();
  }

  cargarExpedientes() {

    this.expedientesService.getExpedientes().subscribe(({total, judgments}) => {

      this.judgments = judgments;
    });
  }

  onSearchChange(event: any) {
    this.textoBuscar = event.detail.value;
  }


  // Modal, formulario para crear nuevo expediente
  async formExpediente() {

    const modal = await this.modalCtrl.create({
      component: FormExpedienteComponent
    });

    return await modal.present();
  }

  // Lanza popover: opc[ver,editar,eliminar...]
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

  }

