import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpedientesPage } from './expedientes.page';

const routes: Routes = [
  {
    path: '',
    component: ExpedientesPage
  },  {
    path: 'expediente',
    loadChildren: () => import('./expediente/expediente.module').then( m => m.ExpedientePageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpedientesPageRoutingModule {}
