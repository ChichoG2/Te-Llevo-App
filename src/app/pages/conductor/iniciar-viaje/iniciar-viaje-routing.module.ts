import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciarViajePage } from './iniciar-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: IniciarViajePage
  },
  {
    path: 'qr-conductor',
    loadChildren: () => import('./qr-conductor/qr-conductor.module').then( m => m.QrConductorPageModule)
  },  {
    path: 'confirmar-pasajero',
    loadChildren: () => import('./confirmar-pasajero/confirmar-pasajero.module').then( m => m.ConfirmarPasajeroPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciarViajePageRoutingModule {}
