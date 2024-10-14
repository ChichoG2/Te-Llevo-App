import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/helpers/services/auth.service';
import { Usuario } from 'src/app/helpers/Usuario';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {
  user!: Usuario;
  esConductor!: boolean;

  constructor(private navCtr: NavController, private auth: AuthService) { }

  ngOnInit() {
    this.user = this.auth.getUser()
    this.esConductor = this.user.esConductor;
  }

  cuenta(){
    this.navCtr.navigateForward(["/cuenta"]);
  }

  listaViajes(){
    if(!this.esConductor){
      this.navCtr.navigateForward(["/listar-viaje"]);
    } else{
      this.navCtr.navigateForward(["/listar-viaje-conductor"]);
    }
  }

  viaje(){
    if(!this.esConductor){
      this.navCtr.navigateForward(["/viaje"]);
    } else{
      this.navCtr.navigateForward(["/planear-viaje"]);
    }
  }


}
