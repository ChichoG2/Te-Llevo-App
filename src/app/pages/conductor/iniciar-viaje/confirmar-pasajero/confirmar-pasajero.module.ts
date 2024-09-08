import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarPasajeroPageRoutingModule } from './confirmar-pasajero-routing.module';

import { ConfirmarPasajeroPage } from './confirmar-pasajero.page';
import { SharedModule } from "../../../../components/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarPasajeroPageRoutingModule,
    SharedModule
],
  declarations: [ConfirmarPasajeroPage]
})
export class ConfirmarPasajeroPageModule {}
