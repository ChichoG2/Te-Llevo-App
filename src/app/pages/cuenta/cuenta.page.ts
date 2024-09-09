import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Usuario } from 'src/app/helpers/Usuario';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

  constructor(private navCtrl: NavController, private alertController: AlertController) { }
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

  onToggleChange() {
    if (this.esConductor) {
      this.presentAlert(); 
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Ingresa tu patente',
      inputs: [
        {
          name: 'patente',
          type: 'text',
          placeholder: 'Patente del automóvil'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelado');
          }
        },
        {
          text: 'Aceptar',
          handler: (data) => {
            this.savePatente(data.patente);
          }
        }
      ]
    });
    await alert.present();
  }
  
  savePatente(patente: string) {
    console.log('Patente ingresada:', patente);
  }

  cerrarSesion(){
    localStorage.removeItem("loggedUser")
    this.navCtrl.navigateForward(["/login"])    
  }

}
