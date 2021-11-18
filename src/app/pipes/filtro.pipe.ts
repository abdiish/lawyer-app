import { Pipe, PipeTransform } from '@angular/core';
import { Contacto } from '../interfaces/cargar-contactos';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: Contacto[], texto: string = '', columna: string = 'nombre'): Contacto[] {

    if (texto === '') {
      return value;
    }

    if (!value) {
      return value;
    }

    texto = texto.toLocaleLowerCase();

    console.log(value);

    return value.filter(item => item[columna].toLocaleLowerCase().includes(texto));
  }

}
