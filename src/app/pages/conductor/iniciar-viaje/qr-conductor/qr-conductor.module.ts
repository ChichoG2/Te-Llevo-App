import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrConductorPageRoutingModule } from './qr-conductor-routing.module';

import { QrConductorPage } from './qr-conductor.page';
import { SharedModule } from "../../../../components/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrConductorPageRoutingModule,
    SharedModule
],
  declarations: [QrConductorPage]
})
export class QrConductorPageModule {}
