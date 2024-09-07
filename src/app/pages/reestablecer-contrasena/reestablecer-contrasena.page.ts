import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/helpers/Usuario';

@Component({
  selector: 'app-reestablecer-contrasena',
  templateUrl: './reestablecer-contrasena.page.html',
  styleUrls: ['./reestablecer-contrasena.page.scss'],
})
export class ReestablecerContrasenaPage implements OnInit {
  user!: Usuario[];
  contrasena!: string;
  nombre!:string;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    null;
  }

  reestablecer(){
    this.user = JSON.parse(localStorage.getItem("Usuarios") || '[]');
  
    const foundUserIndex = this.user.findIndex(user => user.nombre === this.nombre);
  
    if(foundUserIndex !== -1) {
      this.user[foundUserIndex].contrasena = this.contrasena;
      localStorage.setItem("Usuarios", JSON.stringify(this.user));
      setTimeout(() => {
        this.navCtrl.navigateForward(["/login"])
      }, 1000);
    }
  }
  

}
