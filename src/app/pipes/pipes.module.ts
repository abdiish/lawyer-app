import { NgModule } from '@angular/core';
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
