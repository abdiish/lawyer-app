import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './filtro.pipe';
import { ImagenPipe } from './imagen.pipe';



@NgModule({
  declarations: [
    FiltroPipe,
    ImagenPipe
  ],
  exports: [
    FiltroPipe,
    ImagenPipe
  ]

})
export class PipesModule { }
