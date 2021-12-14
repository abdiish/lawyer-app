import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Expediente } from '../../interfaces/cargar-expedientes';
import { ExpedientesService } from '../../services/expedientes.service';
import { FormCaseFileComponent } from '../../components/form-case-file/form-case-file.component';
import { NativePageTransitions, NativeTransitionOptions } from '@awesome-cordova-plugins/native-page-transitions/ngx';

@Component({
  selector: 'app-expedientes',
  templateUrl: './expedientes.page.html',
  styleUrls: ['./expedientes.page.scss'],
})
export class ExpedientesPage implements OnInit {

  @Input() numTareas: string; // Recibe número de tareas, componente padre

  public habilitado = true;
  public textoBuscar: string = '';
  public judgments  : Expediente[] = [];

  constructor(private expedientesService: ExpedientesService,
              private modalCtrl: ModalController,
              private loadingCtrl: LoadingController,
              private nativePageTransitions: NativePageTransitions) { }

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
  async siguientes(event?, pull: boolean = false) {

    const loading = await this.loadingCtrl.create({
      message: 'Cargando...'
    });

    await loading.present();

    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 500,
      slowdownfactor: 3,
      slidePixels: 20,
      androiddelay: 150,
      iosdelay: 100,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 90
    }

    this.expedientesService.getFilesCases(pull).subscribe(resp => {
      console.log(resp);
      loading.dismiss();
      this.nativePageTransitions.slide(options);
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
  }

  }

