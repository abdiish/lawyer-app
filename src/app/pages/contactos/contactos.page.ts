import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactosService } from '../../services/contactos.service';
import { IonList } from '@ionic/angular';
import { Contacto } from '../../interfaces/cargar-contactos';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {

  //Hacer referencia a componente html ion-list
  @ViewChild(IonList) ionList: IonList;

  contactos    : Contacto[] = [];
  textoBuscar  : string = '';
  tipo         : string = 'Abogado Contraparte';

  constructor(private contactosService: ContactosService,
              public modalContrl: ModalController) { }

  ngOnInit() {
    this.cargarContactos();
  }

  onSearchChange(event) {

    this.textoBuscar = event.detail.value;

  }

  segmentChanged(event) {

    this.tipo = event.detail.value;

  }

  cargarContactos() {

    this.contactosService.getContacts().subscribe(({total, contacts}) => {
      this.contactos = contacts;
    });

  }

  llamarContacto(contacto: any) {
    console.log(contacto.nombre);
    this.ionList.closeSlidingItems();
  }

  enviarEmail(contacto: any) {
    console.log(contacto.nombre);
    this.ionList.closeSlidingItems();

  }

  // async itemClick(contacto: any) {
  //   console.log(contacto);
  //     const modal = await this.modalContrl.create({
  //       component: ModalContactoPage,
  //       cssClass: 'my-custom-class'
  //     });
  //     return await modal.present();
  //   }



}
