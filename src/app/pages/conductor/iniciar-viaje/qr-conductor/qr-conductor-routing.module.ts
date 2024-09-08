import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrConductorPage } from './qr-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: QrConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrConductorPageRoutingModule {}
