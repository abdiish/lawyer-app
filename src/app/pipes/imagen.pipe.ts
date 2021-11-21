import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment.prod';

const URL = environment.url;

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: 'usuarios'|'contactos'|'clientes'): string {

    if (!img) {

      return `${URL}/upload/usuarios/no-image`;

    }else if(img) {

      return `${URL}/upload/${tipo}/${img}`;

    }else {

      return `${URL}/upload/usuarios/no-image`;

    }

  }

}
