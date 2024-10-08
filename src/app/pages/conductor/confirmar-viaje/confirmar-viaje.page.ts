import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-confirmar-viaje',
  templateUrl: './confirmar-viaje.page.html',
  styleUrls: ['./confirmar-viaje.page.scss'],
})
export class ConfirmarViajePage implements OnInit {
  alertButtons = [
    {
      text:"Confirmar",
      handler: () => {
        this.redirectAccount();
      }
    }
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    null;
  }

  redirectAccount(){
    this.navCtrl.navigateForward(["/index-conductor"])
  }

}
