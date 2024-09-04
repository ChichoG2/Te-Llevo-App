import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportarErrorPageRoutingModule } from './reportar-error-routing.module';

import { ReportarErrorPage } from './reportar-error.page';
import { SharedModule } from "../../../../components/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportarErrorPageRoutingModule,
    SharedModule
],
  declarations: [ReportarErrorPage]
})
export class ReportarErrorPageModule {}
