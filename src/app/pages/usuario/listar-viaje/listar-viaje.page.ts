import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/helpers/services/auth.service';
import { CrudFirebaseService } from 'src/app/helpers/services/crud-firebase.service';

@Component({
  selector: 'app-listar-viaje',
  templateUrl: './listar-viaje.page.html',
  styleUrls: ['./listar-viaje.page.scss'],
})
export class ListarViajePage implements OnInit {
  user!:any;
  listadoItems!:any[]

  constructor(
    private auth: AuthService,
    private crudServ: CrudFirebaseService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.user = this.auth.getUser()
    this.listarViajes()
  }

  listarViajes(){
    const usuarioId = this.user.id;

    this.crudServ.listarItems("Viajes").subscribe((data:any[]) => {
      this.listadoItems = data.filter(viaje => viaje.usuarios && viaje.usuarios.includes(usuarioId))
      .map(viaje => {
        const date = viaje.hora.toDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHour = (hours % 12 || 12) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + ampm;

        return { ...viaje, formattedHour };
      });
    });
  }

  async cancelarViaje(viaje: any) {
    const usuarioId = this.user.id;
    
    // Eliminar el usuario del array de 'usuarios' del viaje
    const updatedUsuarios = viaje.usuarios.filter((id: string) => id !== usuarioId);

    try {
      await this.crudServ.modificar("Viajes", viaje.id, { usuarios: updatedUsuarios });

      const toast = await this.toastController.create({
        message: 'Has salido del viaje.',
        duration: 3000,
        position: 'top',
        color: 'success',
        cssClass: "toast-controller"
      });
      await toast.present();

      this.listarViajes();
    } catch (error) {
      console.error("Error al cancelar el viaje:", error);
    }
  }
}
