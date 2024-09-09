import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajePage } from './viaje.page';

const routes: Routes = [
  {
    path: '',
    component: ViajePage
  },  {
    path: 'vivo',
    loadChildren: () => import('./vivo/vivo.module').then( m => m.VivoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajePageRoutingModule {}
