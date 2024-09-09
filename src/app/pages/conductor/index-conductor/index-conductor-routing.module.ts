import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexConductorPage } from './index-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: IndexConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexConductorPageRoutingModule {}
