import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalQRComponent } from 'src/app/components/modal-qr/modal-qr.component';

@Component({
  selector: 'app-vivo',
  templateUrl: './vivo.page.html',
  styleUrls: ['./vivo.page.scss'],
})
export class VivoPage implements OnInit {

  constructor(private modalController: ModalController, private alertController: AlertController) { }

  async ngOnInit() {
    const modal = await this.modalController.create({
      component: ModalQRComponent,
      backdropDismiss: false,  
      cssClass: 'my-custom-modal'  
    });
    
    await modal.present();
    
    setTimeout(() => {
      modal.dismiss();
      this.showConfirmAlert();
    }, 2000);
  }

  async showConfirmAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmar Pago',
      message: '¿Desea confirmar el pago?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Pago cancelado');
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            console.log('Pago confirmado');
          }
        }
      ]
    });

    await alert.present();
  }
}
