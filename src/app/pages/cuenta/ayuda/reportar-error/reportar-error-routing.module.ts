import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportarErrorPage } from './reportar-error.page';

const routes: Routes = [
  {
    path: '',
    component: ReportarErrorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportarErrorPageRoutingModule {}
