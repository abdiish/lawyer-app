import { NgModule } from '@angular/core';
import { FiltroPipe } from './filtro.pipe';
import { ImagenPipe } from './imagen.pipe';
import { FiltroExpedientePipe } from './filtro-expediente.pipe';
import { FiltroTareasPipe } from './filtro-tareas.pipe';



@NgModule({
  declarations: [
    FiltroPipe,
    ImagenPipe,
    FiltroExpedientePipe,
    FiltroTareasPipe
  ],
  exports: [
    FiltroPipe,
    ImagenPipe,
    FiltroExpedientePipe,
    FiltroTareasPipe
  ]

})
export class PipesModule { }
