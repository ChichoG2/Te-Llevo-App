import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarViajeConductorPageRoutingModule } from './listar-viaje-conductor-routing.module';

import { ListarViajeConductorPage } from './listar-viaje-conductor.page';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarViajeConductorPageRoutingModule,
    SharedModule
  ],
  declarations: [ListarViajeConductorPage]
})
export class ListarViajeConductorPageModule {}
