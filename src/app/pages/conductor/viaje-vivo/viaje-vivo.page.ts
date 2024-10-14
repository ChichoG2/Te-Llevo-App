import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/helpers/Usuario';
import * as L from 'leaflet';
import { CrudFirebaseService } from 'src/app/helpers/services/crud-firebase.service';
import { AuthService } from 'src/app/helpers/services/auth.service';

@Component({
  selector: 'app-viaje-vivo',
  templateUrl: './viaje-vivo.page.html',
  styleUrls: ['./viaje-vivo.page.scss'],
})
export class ViajeVivoPage implements OnInit {
  user!: any;
  map!: L.Map;
  startLatLng!: { lat: number, lng: number };
  endLatLng!: { lat: number, lng: number };
  distancia: number = 0;

  constructor(
    private navCtrl: NavController,
    private crudServ: CrudFirebaseService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    // Obtener el usuario logueado
    this.user = this.auth.getUser();

    // Filtrar y cargar el viaje del conductor
    this.crudServ.listarItems("Viajes").subscribe((data: any[]) => {
      const viajeConductor = data.find(viaje => viaje.conductor.id === this.user.id);

      if (viajeConductor) {
        console.log('Viaje encontrado:', viajeConductor); // Debug para verificar los datos del viaje

        // Verificar que destinoInicio y destinoFinal tengan lat y lng
        if (
          viajeConductor.destinoInicio &&
          viajeConductor.destinoInicio.latitude !== undefined &&
          viajeConductor.destinoInicio.longitude !== undefined &&
          viajeConductor.destinoFinal &&
          viajeConductor.destinoFinal.latitude !== undefined &&
          viajeConductor.destinoFinal.longitude !== undefined
        ) {
          // Asignar las coordenadas correctamente
          this.startLatLng = {
            lat: viajeConductor.destinoInicio.latitude,
            lng: viajeConductor.destinoInicio.longitude
          };
          this.endLatLng = {
            lat: viajeConductor.destinoFinal.latitude,
            lng: viajeConductor.destinoFinal.longitude
          };
          const distanciaCalculada = this.calcularDistancia(this.startLatLng, this.endLatLng);
          this.distancia = distanciaCalculada;
          this.loadMap();
        } else {
          console.error('Coordenadas de destinoInicio o destinoFinal no válidas');
        }
      } else {
        console.log('No se encontró un viaje para el conductor logueado');
      }
    });
  }

  loadMap() {
    if (!this.startLatLng || !this.endLatLng) {
      console.error('Coordenadas no válidas, no se puede cargar el mapa.');
      return;
    }

    // Inicializar el mapa centrado en el punto de inicio
    this.map = L.map('map').setView([this.startLatLng.lat, this.startLatLng.lng], 13);

    // Cargar un mapa base de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors',
    }).addTo(this.map);

    // Añadir marcador en el inicio del viaje
    L.marker([this.startLatLng.lat, this.startLatLng.lng])
      .addTo(this.map)
      .bindPopup('Inicio del Viaje')
      .openPopup();

    // Añadir marcador en el destino final
    L.marker([this.endLatLng.lat, this.endLatLng.lng])
      .addTo(this.map)
      .bindPopup('Destino Final');

    // Trazar una línea entre los puntos de inicio y destino
    const route: L.LatLngTuple[] = [
      [this.startLatLng.lat, this.startLatLng.lng],
      [this.endLatLng.lat, this.endLatLng.lng]
    ];

    L.polyline(route, { color: 'blue' }).addTo(this.map);
  }

  index() {
    if (!this.user.esConductor) {
      this.navCtrl.navigateForward(["/index"]);
    } else {
      this.navCtrl.navigateForward(["/index-conductor"]);
    }
  }

  calcularDistancia(start: { lat: number; lng: number }, end: { lat: number; lng: number }): number {
    const R = 6371e3; // Radio de la Tierra en metros
    const lat1 = start.lat * (Math.PI / 180); // Convertir a radianes
    const lat2 = end.lat * (Math.PI / 180); // Convertir a radianes
    const deltaLat = (end.lat - start.lat) * (Math.PI / 180);
    const deltaLng = (end.lng - start.lng) * (Math.PI / 180);

    const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) *
      Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distancia en metros
  }

}
