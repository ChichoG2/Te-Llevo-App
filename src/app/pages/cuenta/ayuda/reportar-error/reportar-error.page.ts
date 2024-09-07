import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reportar-error',
  templateUrl: './reportar-error.page.html',
  styleUrls: ['./reportar-error.page.scss'],
})
export class ReportarErrorPage implements OnInit {
  
  constructor(private navCtrl: NavController) { }
  alertButtons = [
    {
      text:"Confirmar",
      handler: () => {
        this.redirectAccount();
      }
    }
  ];

  redirectAccount(){
    this.navCtrl.navigateForward(["/cuenta"])
  }

  ngOnInit() {
  }


}
