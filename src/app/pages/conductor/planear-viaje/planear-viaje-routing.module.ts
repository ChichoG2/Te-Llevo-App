import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanearViajePage } from './planear-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: PlanearViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanearViajePageRoutingModule {}
