import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-confirmar-pago',
  templateUrl: './confirmar-pago.page.html',
  styleUrls: ['./confirmar-pago.page.scss'],
})
export class ConfirmarPagoPage implements OnInit {

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
