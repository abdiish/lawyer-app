import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/menu-opts'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsuario() {

    return this.http.get('https://jsonplaceholder.typicode.com/users');

  }

  getMenuOpts() {

    return this.http.get<Componente[]>('/assets/data/menu-opts.json');

  }

}
