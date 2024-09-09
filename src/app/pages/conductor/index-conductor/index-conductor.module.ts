import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexConductorPageRoutingModule } from './index-conductor-routing.module';

import { IndexConductorPage } from './index-conductor.page';
import { SharedModule } from "../../../components/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexConductorPageRoutingModule,
    SharedModule
],
  declarations: [IndexConductorPage]
})
export class IndexConductorPageModule {}
