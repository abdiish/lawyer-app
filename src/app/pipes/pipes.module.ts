import { NgModule } from '@angular/core';
import { FiltroPipe } from './filtro.pipe';
import { ImagenPipe } from './imagen.pipe';
import { FiltroExpedientePipe } from './filtro-expediente.pipe';



@NgModule({
  declarations: [
    FiltroPipe,
    ImagenPipe,
    FiltroExpedientePipe
  ],
  exports: [
    FiltroPipe,
    ImagenPipe,
    FiltroExpedientePipe
  ]

})
export class PipesModule { }
