import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactosService } from '../../services/contactos.service';
import { IonList } from '@ionic/angular';
import { Contacto } from '../../interfaces/cargar-contactos';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {

  //Hacer referencia a componente html ion-list
  @ViewChild(IonList) ionList: IonList;

  contactos: Contacto[] = [];
  textoBuscar: string = '';

  constructor(private contactosService: ContactosService) { }

  ngOnInit() {
    this.cargarContactos();
  }

  onSearchChange(event) {

    this.textoBuscar = event.detail.value;

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

}
