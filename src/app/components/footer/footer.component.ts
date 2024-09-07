import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/helpers/Usuario';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {
  user!: Usuario;
  esConductor!: boolean;

  constructor(private navCtr: NavController) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("loggedUser") || "[]");
    this.esConductor = this.user.esConductor;
    console.log(this.esConductor);
  }

  cuenta(){
    this.navCtr.navigateForward(["/cuenta"]);
  }

  viaje(){
    if(!this.esConductor){
      this.navCtr.navigateForward(["/viaje"]);
    } else{
      this.navCtr.navigateForward(["/planear-viaje"]);
    }
  }


}