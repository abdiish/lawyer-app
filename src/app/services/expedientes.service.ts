import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CargarExpediente } from '../interfaces/cargar-expedientes';
import { map } from 'rxjs/operators';
import { Expediente } from '../pages/models/expediente';


const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ExpedientesService {

  constructor(private http: HttpClient) { }

  // Obtener expedientes
  getExpedientes() {

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

}
