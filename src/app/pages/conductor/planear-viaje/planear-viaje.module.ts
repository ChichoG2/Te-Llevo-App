import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanearViajePageRoutingModule } from './planear-viaje-routing.module';

import { PlanearViajePage } from './planear-viaje.page';
import { SharedModule } from "../../../components/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanearViajePageRoutingModule,
    SharedModule
],
  declarations: [PlanearViajePage]
})
export class PlanearViajePageModule {}
