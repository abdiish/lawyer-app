import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { IonicModule } from '@ionic/angular';
import { HeaderCloseComponent } from './header-close/header-close.component';
import { MapaComponent } from './mapa/mapa.component';
import { DetalleExpedienteComponent } from './detalle-expediente/detalle-expediente.component';
import { PipesModule } from '../pipes/pipes.module';
import { HeaderExpedienteComponent } from './header-expediente/header-expediente.component';



@NgModule({
  declarations: [
    HeaderMenuComponent,
    HeaderCloseComponent,
    HeaderExpedienteComponent,
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
    HeaderExpedienteComponent,
    MapaComponent,
    DetalleExpedienteComponent
  ]
})
export class ComponentsModule { }
