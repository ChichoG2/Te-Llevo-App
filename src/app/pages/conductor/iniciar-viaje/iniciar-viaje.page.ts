import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-iniciar-viaje',
  templateUrl: './iniciar-viaje.page.html',
  styleUrls: ['./iniciar-viaje.page.scss'],
})
export class IniciarViajePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    null;
  }

  iniciarViaje(){
    setTimeout(() => {
      this.navCtrl.navigateForward(["/viaje-vivo"]);
    }, 200);
  }
}
