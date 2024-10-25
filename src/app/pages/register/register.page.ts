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
  patente!: string;
  contrasena!: string;
  esConductor: boolean = false;

  constructor(private navCtr: NavController,
    private crudServ: CrudFirebaseService,
    private toasCtrl: ToastController
  ) { }

  nuevoUsuario: any = { nombre: this.nombre, contrasena: this.contrasena, esConductor: this.esConductor }
  auto: any = { patente: this.patente, usuario: '' }
  lista: any[] = []

  ngOnInit() {
    null;
  }

  registrarBD() {
    this.crudServ.crearItem("Usuarios", this.nuevoUsuario)
      .then(() => {
        this.mostrarMensaje("Usuario registrado!, Bienvenido", "success");

        // Llamar a listar() y obtener el ID del usuario
        this.listar((usuarioId: string) => {
          // Si el usuario es conductor, asignar un auto
          if (this.nuevoUsuario.esConductor && usuarioId) {
            this.auto = { patente: this.patente, usuario: usuarioId };
            this.crudServ.crearItem("Autos", this.auto)
              .then(() => {
                this.mostrarMensaje("Auto asignado correctamente!", "success");
              })
              .catch(() => {
                this.mostrarMensaje("Error al asignar auto!", "danger");
              });
          } else if (this.nuevoUsuario.esConductor) {
            this.mostrarMensaje("Error: No se pudo encontrar el usuario para asignar el auto.", "danger");
          }

        this.navCtr.navigateForward(["/login"])
        });
      })
      .catch(() => {
        this.mostrarMensaje("Ha ocurrido un error al registrar el usuario!", "danger");
      });
  }

  //función listar para que acepte un callback
  listar(callback: (usuarioId: string) => void) {
    this.crudServ.listarItems("Usuarios").subscribe((data: any[]) => {
      const usuario = data.find(user => user.nombre === this.nuevoUsuario.nombre && user.contrasena === this.nuevoUsuario.contrasena);
      if (usuario) {
        callback(usuario.id); 
      } else {
        console.log("Usuario no encontrado");
        callback('');
      }
    }, error => {
      console.error("Error al listar usuarios:", error);
      callback('');
    });
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
