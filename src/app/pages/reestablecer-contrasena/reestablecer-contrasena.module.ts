import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReestablecerContrasenaPageRoutingModule } from './reestablecer-contrasena-routing.module';

import { ReestablecerContrasenaPage } from './reestablecer-contrasena.page';
import { SharedModule } from "../../components/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReestablecerContrasenaPageRoutingModule,
    SharedModule
],
  declarations: [ReestablecerContrasenaPage]
})
export class ReestablecerContrasenaPageModule {}
