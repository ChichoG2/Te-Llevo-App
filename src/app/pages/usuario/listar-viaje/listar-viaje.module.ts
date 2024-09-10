import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarViajePageRoutingModule } from './listar-viaje-routing.module';

import { ListarViajePage } from './listar-viaje.page';
import { SharedModule } from "../../../components/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarViajePageRoutingModule,
    SharedModule
],
  declarations: [ListarViajePage]
})
export class ListarViajePageModule {}
