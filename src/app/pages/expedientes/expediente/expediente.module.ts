import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpedientePageRoutingModule } from './expediente-routing.module';

import { ExpedientePage } from './expediente.page';
import { ComponentsModule } from '../../../components/components.module';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    ExpedientePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ExpedientePage]
})
export class ExpedientePageModule {}
