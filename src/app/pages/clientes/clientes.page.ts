import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { Cliente } from '../../interfaces/cargar-clientes';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  @ViewChild(IonList) ionList: IonList;

  clientes   : Cliente[] = [];
  textoBuscar: string = '';

  constructor(private clientsService: ClientesService) { }

  ngOnInit() {
    this.cargarClientes();
  }

  onSearchChange(event) {
    console.log(event);

    this.textoBuscar = event.detail.value;

  }

  cargarClientes() {

    this.clientsService.getClients().subscribe(({total, clients}) => {
      console.log(clients);
      this.clientes = clients;
    });
  }

  llamarContacto(cliente: any){
    this.ionList.closeSlidingItems();
  }

  enviarEmail(cliente: any){
    this.ionList.closeSlidingItems();
  }


}
