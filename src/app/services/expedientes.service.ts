import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { CargarExpediente } from '../interfaces/cargar-expedientes';
import { Expediente } from '../pages/models/expediente';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ExpedientesService {

  expedientePost = 0;
  nuevoPost = new EventEmitter<Expediente>();

  private _tipos   : string[] = ['Administrativo', 'Civil', 'Laboral', 'Mercantil', 'Penal'];
  private _materias: string[] = ['Amparo', 'Civil', 'Ejecutivo Mercantil', 'Familiar', 'Inmobiliario', 'Laboral', 'Mercantil', 'Penal'];

  constructor(private http: HttpClient) { }

  get tipos():string[] { return [...this._tipos]; }

  get materias():string[] { return [...this._materias]; }

  // Obtener expedientes
  getFilesCases(pull: boolean = false) {

    if (pull) {
      this.expedientePost = 0;
    }

    this.expedientePost ++;

    const url = `${ URL }/expedientes/?pagina=${this.expedientePost}`;

    return this.http.get<CargarExpediente>(url)
  }

  // Obtener expediente por su ID
  getExpediente(id: string) {

    const url = `${ URL }/expedientes/${ id }`;

    return this.http.get(url).pipe(map((resp: { ok: boolean, numJudgment: Expediente }) => resp.numJudgment));

  }

  // Crear expediente
  createFileCase(post) {

    const url = `${ URL }/expedientes`;

    return new Promise(resolve => {

      this.http.post(url, post).subscribe(resp => {
        console.log('Respuesta promesa:',resp);
        this.nuevoPost.emit(resp['judgment']);
        resolve(true);
      });
    });
  }

  // Actualizar información de expediente
  updateExpediente(numJudgment: Expediente) {

    const url = `${ URL }/expedientes/${ numJudgment._id }`;

    return this.http.put(url, numJudgment);
  }

  // Eliminar expediente
  deleteExpediente(_id: string) {

    const url = `${ URL }/expedientes/${ _id }`;

    return this.http.delete(url);
  }

}
