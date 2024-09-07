import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-planear-viaje',
  templateUrl: './planear-viaje.page.html',
  styleUrls: ['./planear-viaje.page.scss'],
})
export class PlanearViajePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    null;
  }

  confirmar(){
    this.navCtrl.navigateForward(["/confirmar-viaje"]);
  }

}
