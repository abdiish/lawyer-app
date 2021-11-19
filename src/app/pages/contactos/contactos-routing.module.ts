import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactosPage } from './contactos.page';

const routes: Routes = [
  {
    path: '',
    component: ContactosPage
  },
  {
    path: 'modal-contacto',
    loadChildren: () => import('./modal-contacto/modal-contacto.module').then( m => m.ModalContactoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactosPageRoutingModule {}
