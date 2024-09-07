import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajeVivoPage } from './viaje-vivo.page';

const routes: Routes = [
  {
    path: '',
    component: ViajeVivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajeVivoPageRoutingModule {}
