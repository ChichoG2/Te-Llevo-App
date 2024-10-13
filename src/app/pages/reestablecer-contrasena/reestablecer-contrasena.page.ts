import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { CrudFirebaseService } from 'src/app/helpers/services/crud-firebase.service';
import { Usuario } from 'src/app/helpers/Usuario';

@Component({
  selector: 'app-reestablecer-contrasena',
  templateUrl: './reestablecer-contrasena.page.html',
  styleUrls: ['./reestablecer-contrasena.page.scss'],
})
export class ReestablecerContrasenaPage implements OnInit {
  user!: Usuario[];
  userBD: any = { id: "", nombre: "", contrasena: "", esConductor: null };
  contrasena!: string;
  nombre!: string;

  constructor(private navCtrl: NavController, private crudServ: CrudFirebaseService,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    null;
  }

  reestablecerBD() {
    this.crudServ.listarItems("Usuarios").subscribe(data => {
      const userExist = data.find(usuario =>
        usuario.nombre === this.nombre
      );
      if (userExist) {
        this.userBD = { id: userExist.id, nombre: userExist.nombre, contrasena: this.contrasena, esConductor: userExist.esConductor }
        this.crudServ.modificar("Usuarios", userExist.id, this.userBD).then(() => {
          this.mostarMensaje("Contrasena cambiada correctamente!", "success")
          setTimeout(() => {
            this.navCtrl.navigateForward(["/login"])
          }, 1000);
        }).catch((error) => {
          this.mostarMensaje(`Algo salio mal! ${error}`, "danger")
        })
      } else {
        this.mostarMensaje("El usuario no existe!", "danger")
      }
    })
  }

  async mostarMensaje(mensaje: string, color: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom',
      color: color,
      cssClass: "toast-controller"
    });
    toast.present();
  }

  reestablecer() {
    this.user = JSON.parse(localStorage.getItem("Usuarios") || '[]');

    const foundUserIndex = this.user.findIndex(user => user.nombre === this.nombre);

    if (foundUserIndex !== -1) {
      this.user[foundUserIndex].contrasena = this.contrasena;
      localStorage.setItem("Usuarios", JSON.stringify(this.user));
      setTimeout(() => {
        this.navCtrl.navigateForward(["/login"])
      }, 1000);
    }
  }


}
