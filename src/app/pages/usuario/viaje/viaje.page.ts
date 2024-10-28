import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { CrudFirebaseService } from 'src/app/helpers/services/crud-firebase.service';
import { AuthService } from 'src/app/helpers/services/auth.service';
import { Usuario } from 'src/app/helpers/Usuario';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit {
  user!: any;
  listadoItems: any[] = [];
  viajeSeleccionado: any = null;
  maxUsuarios!:number;

  constructor(
    private navCtr: NavController,
    private toastController: ToastController,
    private auth: AuthService,
    private crudServ: CrudFirebaseService,
  ) {}

  ngOnInit() {
    this.user = this.auth.getUser();
    this.listar();
  }

  listar() {
    const usuarioId = this.user.id;
    this.crudServ.listarItems('Viajes').subscribe((data: any[]) => {
      const viajesFiltrados = data.filter((viaje) => !viaje.usuarios.includes(usuarioId));

      // Ordena por precio y formatea la hora
      this.listadoItems = viajesFiltrados.sort((a, b) => a.precio - b.precio).map((viaje) => {
        const date = viaje.hora.toDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHour = (hours % 12 || 12) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + ampm;
  
        return { ...viaje, formattedHour };
      });
    });
  }

  seleccionarViaje(viaje: any) {
    this.viajeSeleccionado = viaje;
    this.maxUsuarios = viaje.capacidadAuto;
  }

  async confirmarViaje() {
    if (!this.viajeSeleccionado) {
      console.warn("No se ha seleccionado ningún viaje.");
      return;
    }

    const updatedUsers = [...this.viajeSeleccionado.usuarios, this.user.id];
    const usuariosActuales = this.viajeSeleccionado.usuarios || [];
    const capacidadAuto = this.viajeSeleccionado.capacidadAuto;

    if (usuariosActuales.length >= capacidadAuto) {
      const toast = await this.toastController.create({
        message: 'Este viaje ya está lleno.',
        duration: 3000,
        position: 'top',
        color: "danger",
        cssClass: "toast-controller"
      });
      await toast.present();
      return;
    }

    try {
      await this.crudServ.modificar("Viajes", this.viajeSeleccionado.id, { usuarios: updatedUsers });
      
      const toast = await this.toastController.create({
        message: `Viaje confirmado a ${this.viajeSeleccionado.destino}. ¡No llegues tarde!`,
        duration: 3000,
        position: 'top',
        color: 'success',
        cssClass: "toast-controller"
      });
      
      await toast.present();
      this.navCtr.navigateForward(['/listar-viaje']);
    } catch (error) {
      console.error("Error al confirmar el viaje:", error);
      const toast = await this.toastController.create({
        message: 'Hubo un problema al confirmar el viaje. Inténtalo de nuevo.',
        duration: 3000,
        position: 'top',
        color: "danger",
        cssClass: "toast-controller"
      });
      await toast.present();
    }
  }
}
