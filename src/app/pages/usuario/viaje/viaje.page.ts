import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit {
  opcionSeleccionada: string = 'Abrir Opciones'; // Valor inicial del botón

  seleccionarOpcion(opcion: string) {
    this.opcionSeleccionada = opcion;
  }

  constructor() { }

  ngOnInit() {
  }

}
