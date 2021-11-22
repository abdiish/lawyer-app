import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpedientePageRoutingModule } from './expediente-routing.module';

import { ExpedientePage } from './expediente.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ExpedientePageRoutingModule
  ],
  declarations: [ExpedientePage]
})
export class ExpedientePageModule {}
