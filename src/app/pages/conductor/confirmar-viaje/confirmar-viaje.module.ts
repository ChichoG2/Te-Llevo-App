import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarViajePageRoutingModule } from './confirmar-viaje-routing.module';

import { ConfirmarViajePage } from './confirmar-viaje.page';
import { SharedModule } from "../../../components/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarViajePageRoutingModule,
    SharedModule
],
  declarations: [ConfirmarViajePage]
})
export class ConfirmarViajePageModule {}
