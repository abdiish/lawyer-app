import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Expediente } from '../../interfaces/cargar-expedientes';
import { ExpedientesService } from '../../services/expedientes.service';
import { FormCaseFileComponent } from '../../components/form-case-file/form-case-file.component';

@Component({
  selector: 'app-expedientes',
  templateUrl: './expedientes.page.html',
  styleUrls: ['./expedientes.page.scss'],
})
export class ExpedientesPage implements OnInit {

  @Input() numTareas: string; // Recibe número de tareas, componente padre

  public habilitado = true;
  public textoBuscar: string = '';
  public load       : boolean;
  public judgments  : Expediente[] = [];

  constructor(private expedientesService: ExpedientesService,
              private modalCtrl: ModalController,
              private loadingCtrl: LoadingController) { }

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
      this.loadingCtrl.dismiss();
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

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
    });
    await loading.present();

    // const { role, data } = await loading.onDidDismiss();
    // console.log('Loading dismissed!');
  }

  }

