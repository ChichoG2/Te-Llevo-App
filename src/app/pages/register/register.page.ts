import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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

  constructor(private navCtr: NavController) { }

  ngOnInit() {
    null;
  }

  registrar(){
    let arreglo: Usuario[] = [];
    let cantUsuarios: Usuario[] = JSON.parse(localStorage.getItem("Usuarios") || "[]");

    let user = new Usuario();
    user.idUsuario = cantUsuarios.length + 1;
    user.nombre = this.nombre;
    user.contrasena = this.contrasena;
    user.esConductor = this.esConductor;

    if(localStorage.getItem("Usuarios")){
      arreglo = JSON.parse(localStorage.getItem("Usuarios") ?? "");
    } else {
      arreglo = [];
      console.log("no hay datos")
    }
    arreglo.push(user);
    localStorage.setItem("Usuarios", JSON.stringify(arreglo));
    setTimeout(() => {
      this.navCtr.navigateForward(["/login"]);
    },2000)
  }
}
