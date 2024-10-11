import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/helpers/services/auth.service';
import { CrudFirebaseService } from 'src/app/helpers/services/crud-firebase.service';
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

  constructor(private navCtrl: NavController,
    private crudServ: CrudFirebaseService,
    private toastCtrl: ToastController,
    private auth: AuthService
  ) { }

  usuarioDB: any = { nombre: "", contrasena: "", esConductor: null }

  ngOnInit() {
    null;
  }

  logearDB() {
    this.crudServ.listarItems("Usuarios").subscribe((data: any[]) => {
      const userExist = data.find(usuario =>
        usuario.nombre === this.usuarioDB.nombre && usuario.contrasena === this.usuarioDB.contrasena
      );
      if (userExist) {
        this.auth.setUser(userExist);
        if (userExist.esConductor) {
          this.mostarMensaje("Bienvenido Conductor!", "success")
          setTimeout(() => {
            this.navCtrl.navigateForward(["/index-conductor"])
          }, 2000);
        } else {
          this.mostarMensaje("Bienvenido Pasajero!", "success")
          this.navCtrl.navigateForward(["/index"])
        }
      } else {
        this.mostarMensaje("Credenciales incorrectas!", "danger")
      }

    })
  }

  async mostarMensaje(mensaje: string, color: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom',
      color: color
    });
    toast.present();
  }

  logear() {
    this.arreglo = JSON.parse(localStorage.getItem('Usuarios') || '[]');
    const foundUser = this.arreglo.find(user =>
      user.nombre === this.nombre && user.contrasena === this.contrasena
    );

    if (foundUser) {
      localStorage.setItem('loggedUser', JSON.stringify(foundUser));
      if (foundUser.esConductor) {
        this.navCtrl.navigateForward(['/index-conductor']);
      } else {
        this.navCtrl.navigateForward(["/index"])
      }
    } else {
      console.log('Usuario o contraseña incorrectos');
    }
  }
}
