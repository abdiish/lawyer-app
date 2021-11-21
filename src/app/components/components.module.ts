import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { IonicModule } from '@ionic/angular';
import { HeaderCloseComponent } from './header-close/header-close.component';
import { MapaComponent } from './mapa/mapa.component';
import { DetalleExpedienteComponent } from './detalle-expediente/detalle-expediente.component';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    HeaderMenuComponent,
    HeaderCloseComponent,
    MapaComponent,
    DetalleExpedienteComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [
    HeaderMenuComponent,
    HeaderCloseComponent,
    MapaComponent,
    DetalleExpedienteComponent
  ]
})
export class ComponentsModule { }
