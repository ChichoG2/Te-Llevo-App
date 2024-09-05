import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsociarCuentaPageRoutingModule } from './asociar-cuenta-routing.module';

import { AsociarCuentaPage } from './asociar-cuenta.page';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsociarCuentaPageRoutingModule,
    SharedModule
  ],
  declarations: [AsociarCuentaPage]
})
export class AsociarCuentaPageModule {}
