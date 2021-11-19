import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalContactoPageRoutingModule } from './modal-contacto-routing.module';

import { ModalContactoPage } from './modal-contacto.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ModalContactoPageRoutingModule
  ],
  declarations: [ModalContactoPage]
})
export class ModalContactoPageModule {}
