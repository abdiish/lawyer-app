import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { DetalleExpedienteComponent } from './detalle-expediente/detalle-expediente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormCaseFileComponent } from './form-case-file/form-case-file.component';
import { FormUpdateCaseFileComponent } from './form-update-case-file/form-update-case-file.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HeaderCloseComponent } from './header-close/header-close.component';
import { HeaderExpedienteComponent } from './header-expediente/header-expediente.component';
import { MapaComponent } from './mapa/mapa.component';
import { PipesModule } from '../pipes/pipes.module';
import { PopoverMenuComponent } from './popover-menu/popover-menu.component';
import { PopoverMenuTareaComponent } from './popover-menu-tarea/popover-menu-tarea.component';
import { PostsExpedientesComponent } from './posts-expedientes/posts-expedientes.component';
import { PostExpedienteComponent } from './post-expediente/post-expediente.component';
import { PostsTareasComponent } from './posts-tareas/posts-tareas.component';
import { PostTareaComponent } from './post-tarea/post-tarea.component';
import { FormTaskComponent } from './form-task/form-task.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    DetalleExpedienteComponent,
    FormCaseFileComponent,
    FormUpdateCaseFileComponent,
    FormTaskComponent,
    HeaderMenuComponent,
    HeaderCloseComponent,
    HeaderExpedienteComponent,
    MapaComponent,
    PopoverMenuComponent,
    PopoverMenuTareaComponent,
    PostsExpedientesComponent,
    PostExpedienteComponent,
    PostsTareasComponent,
    PostTareaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ReactiveFormsModule,
    SwiperModule
  ],
  exports: [
    DetalleExpedienteComponent,
    FormCaseFileComponent,
    FormUpdateCaseFileComponent,
    FormTaskComponent,
    HeaderMenuComponent,
    HeaderCloseComponent,
    HeaderExpedienteComponent,
    MapaComponent,
    PopoverMenuComponent,
    PopoverMenuTareaComponent,
    PostsExpedientesComponent,
    PostExpedienteComponent,
    PostsTareasComponent,
    PostTareaComponent
  ]
})
export class ComponentsModule { }
