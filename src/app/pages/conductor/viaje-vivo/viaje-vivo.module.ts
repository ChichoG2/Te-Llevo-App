import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajeVivoPageRoutingModule } from './viaje-vivo-routing.module';

import { ViajeVivoPage } from './viaje-vivo.page';
import { SharedModule } from "../../../components/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajeVivoPageRoutingModule,
    SharedModule
],
  declarations: [ViajeVivoPage]
})
export class ViajeVivoPageModule {}
