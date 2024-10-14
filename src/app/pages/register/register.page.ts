import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { CrudFirebaseService } from 'src/app/helpers/services/crud-firebase.service';
import { Usuario } from 'src/app/helpers/Usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  nombre!: string;
  contrasena!: string;
  esConductor: boolean = false;

  constructor(private navCtr: NavController,
    private crudServ: CrudFirebaseService,
    private toasCtrl: ToastController
  ) { }

  nuevoUsuario: any = { nombre: this.nombre, contrasena: this.contrasena, esConductor: this.esConductor }
  lista: any[] = []

  ngOnInit() {
    null;
  }

  registrarBD() {
    this.crudServ.crearItem("Usuarios", this.nuevoUsuario).
      then(() => {
        this.mostrarMensaje("Usuario registrado!, Bienvenido", "success")
      }).
      catch(() => {
        this.mostrarMensaje("Ha ocurrido un error!", "danger")
      })
  }

  async mostrarMensaje(mensaje: string, color: string) {
    const toast = await this.toasCtrl.create({
      message: mensaje,
      duration: 2000,
      position: 'top',
      color: color,
      cssClass: "toast-controller"
    });
    toast.present();
  }

  registrar() {
    let arreglo: Usuario[] = [];
    let cantUsuarios: Usuario[] = JSON.parse(localStorage.getItem("Usuarios") || "[]");

    let user = new Usuario();
    user.idUsuario = cantUsuarios.length + 1;
    user.nombre = this.nombre;
    user.contrasena = this.contrasena;
    user.esConductor = this.esConductor;

    if (localStorage.getItem("Usuarios")) {
      arreglo = JSON.parse(localStorage.getItem("Usuarios") ?? "");
    } else {
      arreglo = [];
      console.log("no hay datos")
    }
    arreglo.push(user);
    localStorage.setItem("Usuarios", JSON.stringify(arreglo));
    setTimeout(() => {
      this.navCtr.navigateForward(["/login"]);
    }, 2000)
  }
}
