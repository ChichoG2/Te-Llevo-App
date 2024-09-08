import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-qr-conductor',
  templateUrl: './qr-conductor.page.html',
  styleUrls: ['./qr-conductor.page.scss'],
})
export class QrConductorPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    setTimeout(() => {
      this.navCtrl.navigateForward(["iniciar-viaje/confirmar-pasajero"])
    }, 3000)
  }

}
