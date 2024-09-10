import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarViajePage } from './listar-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: ListarViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarViajePageRoutingModule {}
