import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CargarContacto } from '../interfaces/cargar-contactos';
import { map } from 'rxjs/operators';
import { Contacto } from '../pages/models/contacto';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor(private http: HttpClient) { }

  getContacts(){

    const url = `${ URL }/contactos`;

    return this.http.get<CargarContacto>(url).pipe(map(resp => {

      const contacts = resp.contacts.map(
        contact => new Contacto(
          contact.nombre,
          contact.telefono,
          contact.movil,
          contact.email,
          contact.img,
          contact.tipo,
          contact._id
        ));

        return {
          total: resp.total,
          contacts
        }

    }));

  }




}
