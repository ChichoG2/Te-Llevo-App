import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { CrudFirebaseService } from 'src/app/helpers/services/crud-firebase.service';
import { AuthService } from 'src/app/helpers/services/auth.service';
import { GeoPoint, Timestamp } from "firebase/firestore";

@Component({
  selector: 'app-planear-viaje',
  templateUrl: './planear-viaje.page.html',
  styleUrls: ['./planear-viaje.page.scss'],
})
export class PlanearViajePage implements OnInit {
  destino: string = '';
  capacidadAuto!: number;
  precio!: number;
  hora!: string; // Hora que viene de ion-datetime en formato HH:mm
  horaSeleccionada!: Timestamp;
  coordenadasDestino!: { lat: number, lng: number };
  user!: any;

  constructor(
    private navCtrl: NavController,
    private http: HttpClient,
    private crudServ: CrudFirebaseService,
    private auth: AuthService,
    private toastCtrl: ToastController
  ) { }

  onHoraChange() {
    const fechaActual = new Date(); // Obtenemos la fecha actual
    const partesHora = this.hora.split(':'); // Dividimos la hora en horas y minutos

    // Crear una nueva fecha con la hora seleccionada (y los minutos)
    const fechaConHora = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDate(), Number(partesHora[0]), Number(partesHora[1]));

    // Asegurarnos de que la fecha es válida
    if (!isNaN(fechaConHora.getTime())) {
      this.horaSeleccionada = Timestamp.fromDate(fechaConHora);
      console.log('Hora seleccionada:', this.hora);
      console.log('Hora seleccionada firebase:', this.horaSeleccionada);
    } else {
      console.error('Fecha no válida:', fechaConHora);
    }
  }

  ngOnInit() {
    this.user = this.auth.getUser();

    // Establecer la hora actual por defecto en formato HH:mm
    const fechaActual = new Date();
    this.hora = fechaActual.toTimeString().substring(0, 5); // Formato HH:mm
    console.log('Hora actual inicial:', this.hora);

    this.onHoraChange(); // Inicializa horaSeleccionada con la hora actual
  }

  buscarCoordenadas(event: any) {
    const input = event.target.value;
    if (input) {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(input)}`;
      this.http.get<any[]>(url).subscribe(
        (data) => {
          if (data && data.length > 0) {
            this.coordenadasDestino = {
              lat: parseFloat(data[0].lat),
              lng: parseFloat(data[0].lon)
            };
            console.log('Coordenadas:', this.coordenadasDestino);
          }
        },
        (error) => {
          console.error('Error al obtener las coordenadas:', error);
        }
      );
    }
  }

  confirmar() {
    const usuarioLogueado = this.auth.getUser();

    // Verificar si el usuario logueado existe
    if (!usuarioLogueado || !usuarioLogueado.id) {
      console.error('Usuario no está logueado');
      return;
    }

    let autoUsuario: any;

    // Obtener el auto del usuario logueado
    this.crudServ.listarItems('Autos').subscribe((autos) => {
      autoUsuario = autos.find(auto => auto.usuario.id === usuarioLogueado.id);

      // Verificar si se encontró el auto
      if (!autoUsuario) {
        console.error('No se encontró el auto del conductor para el usuario:', usuarioLogueado.id);
        return;
      }

      this.crudServ.listarItems("Usuarios").subscribe((usuarios) => {
        const conductor = usuarios.find(user => user.id === usuarioLogueado.id);

        // Verificar si se encontró el conductor
        if (!conductor) {
          console.error('No se encontró el conductor con ID:', usuarioLogueado.id);
          return;
        }

        console.log('Conductor ID:', conductor.id, 'Auto ID:', autoUsuario.id);

        // Asegura de que horaSeleccionada no sea undefined
        if (!this.horaSeleccionada) {
          console.error('Hora seleccionada es undefined, estableciendo hora actual');
          this.horaSeleccionada = Timestamp.now(); // Usa la hora actual si es undefined
        }

        const viajeData = {
          Auto: autoUsuario.id,
          capacidadAuto: Number(this.capacidadAuto),
          conductor: conductor.id,
          destino: this.destino,
          destinoFinal: new GeoPoint(this.coordenadasDestino.lat, this.coordenadasDestino.lng),
          destinoInicio: new GeoPoint(-33.59846429831734, -70.5787996701565),
          hora: this.horaSeleccionada,
          precio: Number(this.precio),
          usuarios: []
        };

        this.crudServ.crearItem('Viajes', viajeData)
          .then(() => {
            setTimeout(() => {
              this.mostrarMensaje("Viaje creado exitosamente!", "success");
              this.navCtrl.navigateForward(['/index-conductor']);
            }, 1200);
          })
          .catch(() => {
            this.mostrarMensaje("Error al crear el viaje!", "danger");
          });
      }, error => {
        console.error('Error al listar usuarios:', error);
      });
    }, error => {
      console.error('Error al listar autos:', error);
    });
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