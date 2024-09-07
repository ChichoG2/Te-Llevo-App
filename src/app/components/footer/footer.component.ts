import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {

  constructor(private navCtr: NavController) { }

  ngOnInit() {
    null;
  }

  cuenta(){
    this.navCtr.navigateForward(["/cuenta"]);
  }

  viaje(){
    this.navCtr.navigateForward(["/viaje"]);
  }


}
