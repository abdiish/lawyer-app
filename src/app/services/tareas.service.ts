import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Tarea } from '../pages/models/tarea';
import { cargarTarea } from '../interfaces/cargar-tareas';
import { UsuarioService } from './usuario.service';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private tareaPost = 0;
  private nuevoPost = new EventEmitter<Tarea>();
  private _estados    : string[] = ['noStatus', 'pending', 'inProgress', 'completed'];
  private _prioridades: string[] = ['low', 'medium', 'high'];

  constructor(private http: HttpClient,
              private usuarioService: UsuarioService) { }

  // Obtener tareas
  getTasks(id: string) {


    // if (pull) {
    //   this.tareaPost = 0;
    // }

    // this.tareaPost ++;

    const url = `${ URL }/tareas/${ id }`;

    return this.http.get<cargarTarea>(url);

  }

  // Crear tarea
  createTask(post) {

    const url = `${ URL }/tareas`;

    return new Promise(resolve => {

      this.http.post(url, post).subscribe(resp => {
        console.log('Respuesta promesa:', resp);
        //this.nuevoPost.emit(resp[''])
        resolve(true);
      });
    });

  }

}
