import { Pipe, PipeTransform } from '@angular/core';
import { Tarea } from '../interfaces/cargar-tareas';

@Pipe({
  name: 'filtroTareas'
})
export class FiltroTareasPipe implements PipeTransform {

  transform(value: Tarea[], texto: string = '', columna: string = 'title'): Tarea[] {

    if (texto === '') {
      return value;
    }

    if (!value) {
      return value;
    }

    texto = texto.toLocaleLowerCase();

    console.log('FILTRO TAREAS:',value);

    return value.filter(item => item[columna].toLocaleLowerCase().includes(texto));
  }

}
