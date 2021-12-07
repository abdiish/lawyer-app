import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Usuario } from '../interfaces/login-register';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { cargarUsuarios } from '../interfaces/cargar-usuarios';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token  : string = null;
  usuario: Usuario = {};

  constructor(private http: HttpClient,
              private storage: Storage) {

                this.storage.create();

              }

  loginUser(email: string, password_1: string) {

    const data = { email, password_1 };
    console.log(data);

    return new Promise(resolve => {

      this.http.post(`${ URL }/login`, data).subscribe(resp => {
        console.log(resp);

        if (resp['ok']) {
          this.saveToken(resp['token']);
          resolve(true);
        }else {
          this.token = null;
          this.storage.clear();
          resolve(false);
        }

      });
    });
  }

  // Guardar token en local storage
  async saveToken(token: string) {
    this.token = token;
    await this.storage.set('token', token);
  }

  // Cargar usuarios
  getUsuarios() {

    const url = `${ URL }/usuarios`;

    return this.http.get<cargarUsuarios>(url);


  }

}
