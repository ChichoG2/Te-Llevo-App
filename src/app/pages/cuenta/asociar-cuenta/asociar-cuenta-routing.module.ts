import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsociarCuentaPage } from './asociar-cuenta.page';

const routes: Routes = [
  {
    path: '',
    component: AsociarCuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsociarCuentaPageRoutingModule {}
