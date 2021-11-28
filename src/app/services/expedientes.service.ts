import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { CargarExpediente } from '../interfaces/cargar-expedientes';
import { ExpedienteForm } from '../interfaces/expediente-form';
import { Expediente } from '../pages/models/expediente';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ExpedientesService {

  expedientePost = 0;
  nuevoExpediente = new EventEmitter<Expediente>();

  private _tipos   : string[] = ['Administrativo', 'Civil', 'Laboral', 'Mercantil', 'Penal'];
  private _materias: string[] = ['Amparo', 'Civil', 'Ejecutivo Mercantil', 'Familiar', 'Inmobiliario', 'Laboral', 'Mercantil', 'Penal'];

  constructor(private http: HttpClient) { }

  get tipos():string[] { return [...this._tipos]; }

  get materias():string[] { return [...this._materias]; }

  // Obtener expedientes
  getExpedientes(pull: boolean = false) {

    if (pull) {
      this.expedientePost = 0;
    }

    this.expedientePost ++;

    const url = `${ URL }/expedientes`;

    return this.http.get<CargarExpediente>(url).pipe(map(resp => {

      const judgments = resp.judgments.map(
        judgment => new Expediente(
          judgment.nombreExpediente,
          judgment.numExpediente,
          judgment.cuantia,
          judgment.sintesisAsunto,
          judgment.nombreAbogado,
          judgment.nombreContraparte,
          judgment.institucionJudicial,
          judgment.tipo,
          judgment.materia,
          judgment.nombreCliente,
          judgment._id
        ));

        return {
          total: resp.total,
          judgments
        }
    }));
  }

  // Obtener expediente por su ID
  getExpediente(id: string) {

    const url = `${ URL }/expedientes/${ id }`;

    return this.http.get(url).pipe(map((resp: { ok: boolean, numJudgment: Expediente }) => resp.numJudgment));

  }

  // Crear expediente
  createExpediente(formData: ExpedienteForm) {

    const url = `${ URL }/expedientes`;

    return this.http.post(url, formData);

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
