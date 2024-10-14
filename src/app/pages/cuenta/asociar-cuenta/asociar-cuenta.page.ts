import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/helpers/services/auth.service';
import { CrudFirebaseService } from 'src/app/helpers/services/crud-firebase.service';

@Component({
  selector: 'app-asociar-cuenta',
  templateUrl: './asociar-cuenta.page.html',
  styleUrls: ['./asociar-cuenta.page.scss'],
})
export class AsociarCuentaPage implements OnInit {
  cuentaAsociada: any = { banco: "", nombre: "", numCuenta: 0, rut: "", tipoCuenta: "", usuario: "" }
  usuario!: any

  constructor(private crudServ: CrudFirebaseService,
    private auth: AuthService,
    private toastCtrl: ToastController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    null;
  }

  formatearRut(event: any) {
    let valor = event.detail.value.replace(/\D/g, ''); // Elimina todo lo que no sea dígito
    valor = valor.replace(/^(\d{1,2})(\d{3})(\d{3})(\d{0,1})$/, '$1.$2.$3-$4'); // Aplica el formato
    this.cuentaAsociada.rut = valor.trim(); // Actualiza el valor del RUT
  }

  asociarCuenta() {
    this.usuario = this.auth.getUser();
    this.cuentaAsociada.usuario = this.usuario.id;

    this.crudServ.listarItems("TarjetaAsociada").subscribe(data => {
      const tarjetaExist = data.find(tarjeta => tarjeta.usuario === this.cuentaAsociada.usuario);

      if (!tarjetaExist) {
        this.crudServ.crearItem("TarjetaAsociada", this.cuentaAsociada)
          .then(() => {
            this.mostarMensaje("Cuenta asociada correctamente!", "success");
            this.navCtrl.navigateForward(["/cuenta"]);
          })
          .catch(() => {
            this.mostarMensaje("Ha ocurrido un error!", "danger");
          });
      } else {
        this.crudServ.modificar("TarjetaAsociada", tarjetaExist.id, this.cuentaAsociada)
          .then(() => {
            this.mostarMensaje("Tarjeta modificada correctamente!", "success");
            this.navCtrl.navigateForward(["/cuenta"])
          })
          .catch(() => {
            this.mostarMensaje("Ha ocurrido un error, vuelva a intentarlo!", "danger");
          });
      }
    });
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
}
