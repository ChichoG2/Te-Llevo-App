import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/helpers/Usuario';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  logged!: boolean;
  user!: Usuario;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    if(localStorage.getItem('loggedUser')){
      this.logged = true;
    } else{
      this.logged = false;
    }
    this.user = JSON.parse(localStorage.getItem("loggedUser") || "[]");
  }

  goHome(){
    if(!this.user.esConductor){
      this.navCtrl.navigateForward(["/index"]);
    } else{
      this.navCtrl.navigateForward(["/index-conductor"]);
    }
  }

}
