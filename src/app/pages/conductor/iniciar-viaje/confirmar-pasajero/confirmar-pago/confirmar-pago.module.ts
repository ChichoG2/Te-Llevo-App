import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarPagoPageRoutingModule } from './confirmar-pago-routing.module';

import { ConfirmarPagoPage } from './confirmar-pago.page';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarPagoPageRoutingModule,
    SharedModule
  ],
  declarations: [ConfirmarPagoPage]
})
export class ConfirmarPagoPageModule {}
