import { Pipe, PipeTransform } from '@angular/core';
import { Expediente } from '../interfaces/cargar-expedientes';

@Pipe({
  name: 'filtroExpediente'
})
export class FiltroExpedientePipe implements PipeTransform {

  transform(value: Expediente[], texto: string = '', columna: string = 'nombreExpediente'): Expediente[] {

    if (texto === '') {
      return value;
    }

    if (!value) {
      return value;
    }

    texto = texto.toLocaleLowerCase();

    return value.filter(item => item[columna].toLocaleLowerCase().includes(texto));
  }

}
