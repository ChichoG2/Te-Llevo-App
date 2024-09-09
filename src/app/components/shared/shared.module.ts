import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { ModalQRComponent } from '../modal-qr/modal-qr.component';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, ModalQRComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[FooterComponent, HeaderComponent, ModalQRComponent]
})
export class SharedModule { }
