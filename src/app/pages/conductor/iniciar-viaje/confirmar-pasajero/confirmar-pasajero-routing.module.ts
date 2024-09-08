import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmarPasajeroPage } from './confirmar-pasajero.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmarPasajeroPage
  },  {
    path: 'confirmar-pago',
    loadChildren: () => import('./confirmar-pago/confirmar-pago.module').then( m => m.ConfirmarPagoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmarPasajeroPageRoutingModule {}
