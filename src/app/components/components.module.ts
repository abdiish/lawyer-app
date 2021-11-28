import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { IonicModule } from '@ionic/angular';
import { HeaderCloseComponent } from './header-close/header-close.component';
import { MapaComponent } from './mapa/mapa.component';
import { DetalleExpedienteComponent } from './detalle-expediente/detalle-expediente.component';
import { PipesModule } from '../pipes/pipes.module';
import { HeaderExpedienteComponent } from './header-expediente/header-expediente.component';
import { PopoverMenuComponent } from './popover-menu/popover-menu.component';
import { FormExpedienteComponent } from './form-expediente/form-expediente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsExpedientesComponent } from './posts-expedientes/posts-expedientes.component';
import { PostExpedienteComponent } from './post-expediente/post-expediente.component';

@NgModule({
  declarations: [
    DetalleExpedienteComponent,
    FormExpedienteComponent,
    HeaderMenuComponent,
    HeaderCloseComponent,
    HeaderExpedienteComponent,
    MapaComponent,
    PopoverMenuComponent,
    PostsExpedientesComponent,
    PostExpedienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ReactiveFormsModule
  ],
  exports: [
    DetalleExpedienteComponent,
    FormExpedienteComponent,
    HeaderMenuComponent,
    HeaderCloseComponent,
    HeaderExpedienteComponent,
    MapaComponent,
    PopoverMenuComponent,
    PostsExpedientesComponent,
    PostExpedienteComponent
  ]
})
export class ComponentsModule { }
