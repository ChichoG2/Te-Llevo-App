import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/helpers/Usuario';

@Component({
  selector: 'app-viaje-vivo',
  templateUrl: './viaje-vivo.page.html',
  styleUrls: ['./viaje-vivo.page.scss'],
})
export class ViajeVivoPage implements OnInit {
  user!: Usuario;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("loggedUser")||"[]");
  }

  index(){
    if(!this.user.esConductor){
      this.navCtrl.navigateForward(["/index"])
    }else{
      this.navCtrl.navigateForward(["/index-conductor"])
    }
  }
}
