import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CargarClientes } from '../interfaces/cargar-clientes';
import { map } from 'rxjs/operators';
import { Cliente } from '../pages/models/cliente';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  getClients(){

    const url = `${ URL }/clientes`;

    return this.http.get<CargarClientes>(url).pipe(map(resp => {

      const clients = resp.clients.map(
        client => new Cliente(
          client.nombre,
          client.telefono,
          client.movil,
          client.email,
          client.img,
          client.clasificacion,
          client.tipo,
          client._id
        ));

        return {
          total: resp.total,
          clients
        }
    }));

  }
}
