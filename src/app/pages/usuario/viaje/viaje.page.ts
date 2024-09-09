import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit {

  constructor(private navCtr: NavController,
              private modalController: ModalController,
              private toastController: ToastController
  ) { }

  ngOnInit() {
    null;
  }

  async index(position: 'top' | 'middle' | 'bottom') {

    const toast = await this.toastController.create({
      message: 'Viaje confirmado, no llegues tarde!!',
      duration: 3000,
      position: position,
    });

    await toast.present();

    this.modalController.dismiss();
    this.navCtr.navigateForward(["viaje/vivo"]);
    }

}
