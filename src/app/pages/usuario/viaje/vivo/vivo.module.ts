import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VivoPageRoutingModule } from './vivo-routing.module';

import { VivoPage } from './vivo.page';
import { SharedModule } from "../../../../components/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VivoPageRoutingModule,
    SharedModule
],
  declarations: [VivoPage]
})
export class VivoPageModule {}
