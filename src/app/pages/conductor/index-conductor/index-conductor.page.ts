import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/helpers/services/auth.service';
import { CrudFirebaseService } from 'src/app/helpers/services/crud-firebase.service';
import { Usuario } from 'src/app/helpers/Usuario';

@Component({
  selector: 'app-index-conductor',
  templateUrl: './index-conductor.page.html',
  styleUrls: ['./index-conductor.page.scss'],
})
export class IndexConductorPage implements OnInit {
  listadoItems!: any[]
  user!: any;

  constructor(private auth: AuthService,
    private crudServ: CrudFirebaseService
  ) { }

  ngOnInit() {
    this.user = this.auth.getUser()
    this.listar()
  }

  listar() {
    const userId = this.auth.getUser().id;
    this.crudServ.listarItems("Viajes").subscribe((data: any[]) => {
      const filtrarViajes = data.filter(viaje => 
        viaje.conductor && viaje.conductor.id === userId
      );
      // Mapeo los viajes para formatear la hora
      this.listadoItems = filtrarViajes.map(viaje => {
        // Convertir el timestamp a Date
        const timestamp = viaje.hora;
        const date = timestamp.toDate();  
        
        // Formatear la hora
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHour = (hours % 12 || 12) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + ampm;
        
        return {
          ...viaje,  // Mantener el resto de los campos del viaje
          formattedHour  // Agregar la hora formateada
        };
      });
    });
  }
}
