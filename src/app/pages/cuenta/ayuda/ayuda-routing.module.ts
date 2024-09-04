import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AyudaPage } from './ayuda.page';

const routes: Routes = [
  {
    path: '',
    component: AyudaPage
  },  {
    path: 'reportar-error',
    loadChildren: () => import('./reportar-error/reportar-error.module').then( m => m.ReportarErrorPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AyudaPageRoutingModule {}
