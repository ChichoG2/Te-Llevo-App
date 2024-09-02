import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/helpers/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  nombre!: string;
  contrasena!: string;
  arreglo: Usuario[] = [];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    null;
  }

  logear() {
    this.arreglo = JSON.parse(localStorage.getItem('Usuarios') || '[]');
    const foundUser = this.arreglo.find(user => 
      user.nombre === this.nombre && user.contrasena === this.contrasena
    );

    if (foundUser) {
      localStorage.setItem('loggedUser', JSON.stringify(foundUser));
      this.navCtrl.navigateForward(['/index']);
    } else {
      console.log('Usuario o contraseña incorrectos');
    }
  }
}
