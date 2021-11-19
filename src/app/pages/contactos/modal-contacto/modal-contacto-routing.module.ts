import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalContactoPage } from './modal-contacto.page';

const routes: Routes = [
  {
    path: '',
    component: ModalContactoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalContactoPageRoutingModule {}
