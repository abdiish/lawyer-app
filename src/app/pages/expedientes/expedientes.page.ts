import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Expediente } from '../../interfaces/cargar-expedientes';
import { ExpedientesService } from '../../services/expedientes.service';
import { FormCaseFileComponent } from '../../components/form-case-file/form-case-file.component';

@Component({
  selector: 'app-expedientes',
  templateUrl: './expedientes.page.html',
  styleUrls: ['./expedientes.page.scss'],
})
export class ExpedientesPage implements OnInit {

  @Input() id: string;
  public habilitado = true;
  public textoBuscar: string = '';
  public load       : boolean;
  public judgments  : Expediente[] = [];

  constructor(private expedientesService: ExpedientesService,
              private modalCtrl: ModalController) { }

  ngOnInit() {

    this.siguientes();
    this.expedientesService.nuevoPost.subscribe(judgment => {
      console.log('Judgment:' ,judgment);
      this.judgments.unshift(judgment);
    });
  }

  // Refresh
  recargar(event) {

    this.siguientes(event, true);
    this.habilitado = true;
    this.judgments = [];

  }

  // Cargar expedientes, uso de promesa
  siguientes(event?, pull: boolean = false) {
    this.expedientesService.getFilesCases(pull).subscribe(resp => {
      console.log(resp);
      this.load = true;
      this.judgments.push(...resp.judgments);

      if (event) {
        event.target.complete();

        if (resp.judgments.length === 0) {
          this.habilitado = false
        }
      }
    });
  }

  // Busqueda de expediente
  onSearchChange(event: any) {
    this.textoBuscar = event.detail.value;
  }

  // Modal, formulario para crear nuevo expediente
  async formExpediente() {

    const modal = await this.modalCtrl.create({
      component: FormCaseFileComponent
    });

    return await modal.present();
  }

  }

