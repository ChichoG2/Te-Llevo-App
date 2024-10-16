import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/helpers/services/auth.service';
import { CrudFirebaseService } from 'src/app/helpers/services/crud-firebase.service';

@Component({
  selector: 'app-listar-viaje-conductor',
  templateUrl: './listar-viaje-conductor.page.html',
  styleUrls: ['./listar-viaje-conductor.page.scss'],
})
export class ListarViajeConductorPage implements OnInit {
  listadoItems!: any[];

  constructor(
    private crudServ: CrudFirebaseService,
    private auth: AuthService,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.listar()
  }

  listar(){
    const userId = this.auth.getUser().id;
    this.crudServ.listarItems("Viajes").subscribe((data:any[]) => {
      const filtrarViajes = data.filter(viaje => 
        viaje.conductor && viaje.conductor === userId
      );
      this.listadoItems = filtrarViajes;
    })
  }

  eliminar(id:any){
    this.crudServ.eliminar("Viajes",id).then(()=>{
      setTimeout(() => {
        this.mostrarMensaje("Se elimino correctamente!", "success")
      }, 1000);
    }).catch(() => {
      setTimeout(() => {
        this.mostrarMensaje("Ha ocurrido un error!","danger")
      }, 1000);
    })
  }

  async mostrarMensaje(mensaje: string, color: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000,
      position: 'top',
      color: color,
      cssClass: "toast-controller"
    });
    toast.present();
  }
}
