import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/helpers/services/auth.service';
import { CrudFirebaseService } from 'src/app/helpers/services/crud-firebase.service';
import { Usuario } from 'src/app/helpers/Usuario';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

  constructor(private navCtrl: NavController,
    private alertController: AlertController,
    private auth: AuthService,
    private crudServ: CrudFirebaseService
  ) { }
  user!: any;
  notificacion: boolean = false;
  esConductor!: boolean;
  numeroCuenta!: any;
  autoConductor!: any;

  ngOnInit() {
    this.user = this.auth.getUser()
    this.esConductor = this.user.esConductor;
    this.crudServ.listarItems("TarjetaAsociada").subscribe(data => {
      const cuenta = data.find(usuario => usuario.usuario === this.user.id);
      this.numeroCuenta = cuenta ? cuenta : null;
    })
    this.crudServ.listarItems("Autos").subscribe(data => {
      const auto = data.find(auto => auto.usuario === this.user.id);
      this.autoConductor = auto ? auto : null;
    });
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

  cerrarSesion() {
    localStorage.removeItem("loggedUser")
    this.navCtrl.navigateForward(["/login"])
  }

}
