import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { DetalleExpedienteComponent } from './detalle-expediente/detalle-expediente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormCaseFileComponent } from './form-case-file/form-case-file.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HeaderCloseComponent } from './header-close/header-close.component';
import { HeaderExpedienteComponent } from './header-expediente/header-expediente.component';
import { MapaComponent } from './mapa/mapa.component';
import { PipesModule } from '../pipes/pipes.module';
import { PopoverMenuComponent } from './popover-menu/popover-menu.component';
import { PostsExpedientesComponent } from './posts-expedientes/posts-expedientes.component';
import { PostExpedienteComponent } from './post-expediente/post-expediente.component';
import { FormUpdateCaseFileComponent } from './form-update-case-file/form-update-case-file.component';

@NgModule({
  declarations: [
    DetalleExpedienteComponent,
    FormCaseFileComponent,
    FormUpdateCaseFileComponent,
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
    FormCaseFileComponent,
    FormUpdateCaseFileComponent,
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
