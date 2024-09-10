import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarViajeConductorPage } from './listar-viaje-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: ListarViajeConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarViajeConductorPageRoutingModule {}
