import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-confirmar-pasajero',
  templateUrl: './confirmar-pasajero.page.html',
  styleUrls: ['./confirmar-pasajero.page.scss'],
})
export class ConfirmarPasajeroPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    null;
  }

  continuar(){
    setTimeout(() => {
      this.navCtrl.navigateForward(["/iniciar-viaje"])
    }, 1500);
  }

}
