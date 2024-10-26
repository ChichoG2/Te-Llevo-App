import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, ToastController } from '@ionic/angular';
import { CrudFirebaseService } from 'src/app/helpers/services/crud-firebase.service';
import { AuthService } from 'src/app/helpers/services/auth.service';
import { Usuario } from 'src/app/helpers/Usuario';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit {
  user!: Usuario;
  listadoItems: any[] = [];
  allItems: any[] = [];
  batchSize = 5; // Número de viajes cargados en cada scroll
  hasMoreItems = true;
  isPaymentModalOpen = false; // Controla la apertura del modal
  selectedItem: any; // Almacena el viaje seleccionado

  constructor(
    private navCtr: NavController,
    private modalController: ModalController,
    private toastController: ToastController,
    private auth: AuthService,
    private crudServ: CrudFirebaseService
  ) {}

  ngOnInit() {
    this.user = this.auth.getUser();
    this.listar();
  }

  listar() {
    this.crudServ.listarItems('Viajes').subscribe((data: any[]) => {
      // Ordenar los viajes por precio de menor a mayor
      const ordenarViajes = data.sort((a, b) => a.precio - b.precio);

      // Mapeo los viajes para formatear la hora
      this.allItems = ordenarViajes.map((viaje) => {
        const date = viaje.hora.toDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHour = (hours % 12 || 12) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + ampm;

        return { ...viaje, formattedHour };
      });

      // Cargar los primeros elementos
      this.addMoreItems();
    });
  }

  addMoreItems() {
    const startIndex = this.listadoItems.length;
    const nuevosItems = this.allItems.slice(startIndex, startIndex + this.batchSize);

    if (nuevosItems.length > 0) {
      this.listadoItems.push(...nuevosItems);
    } else {
      this.hasMoreItems = false; // Deshabilita el infinite-scroll si no hay más elementos
    }
  }

  onIonInfinite(event: any) {
    this.addMoreItems();

    event.target.complete(); // Finaliza el evento de infinite scroll

    // Si ya no hay más elementos, deshabilita el infinite scroll
    if (!this.hasMoreItems) {
      event.target.disabled = true;
    }
  }

  onItemSelect(item: any) {
    this.selectedItem = item; // Almacena el viaje seleccionado
    this.isPaymentModalOpen = true; // Abre el modal
  }

  async confirmPayment() {
    if (!this.selectedItem) {
      console.warn("No se ha seleccionado ningún viaje.");
      return;
    }
  
    // Agregar el ID del usuario actual al array de usuarios del viaje
    const updatedUsers = [...this.selectedItem.usuarios, this.auth.getUser().id];
  
    try {
      // Llamar al servicio para actualizar el viaje en Firebase
      await this.crudServ.modificar("Viajes", this.selectedItem.id, { usuarios: updatedUsers });
  
      const toast = await this.toastController.create({
        message: `Viaje confirmado a ${this.selectedItem.destino}. ¡No llegues tarde!`,
        duration: 3000,
        position: 'top',
      });
  
      await toast.present();
      this.modalController.dismiss();
      this.navCtr.navigateForward(['viaje/vivo']);
    } catch (error) {
      console.error("Error al confirmar el viaje:", error);
      const toast = await this.toastController.create({
        message: 'Hubo un problema al confirmar el viaje. Inténtalo de nuevo.',
        duration: 3000,
        position: 'top',
      });
      await toast.present();
    }
  }
  
}