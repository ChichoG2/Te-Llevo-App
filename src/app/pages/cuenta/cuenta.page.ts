import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/helpers/Usuario';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

  constructor(private navCtrl: NavController) { }
  user!: Usuario;
  notificacion: boolean = false;
  esConductor!: boolean;

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("loggedUser") || "[]");
    this.esConductor = this.user.esConductor;
  }

  public actionSheetButtons = [
    {
      text: 'Cerrar Sesión',
      role: 'destructive',
      data: {
        action: 'delete',
      },
      handler: () => {
        setTimeout(() => {
          this.cerrarSesion();
        }, 1200);
      }
    },
    {
      text: 'Cancelar',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  cerrarSesion(){
    localStorage.removeItem("loggedUser")
    this.navCtrl.navigateForward(["/login"])    
  }

}
