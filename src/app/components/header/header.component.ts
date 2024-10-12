import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/helpers/services/auth.service';
import { Usuario } from 'src/app/helpers/Usuario';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  logged!: boolean;
  user!: Usuario;

  constructor(private navCtrl: NavController, private auth: AuthService) { }

  ngOnInit() {
    this.user = this.auth.getUser();
    if(this.user.nombre){
      this.logged = true;
    } else{
      this.logged = false;
    }
  }

  goHome(){
    if(!this.user.esConductor){
      this.navCtrl.navigateForward(["/index"]);
    } else{
      this.navCtrl.navigateForward(["/index-conductor"]);
    }
  }

}
