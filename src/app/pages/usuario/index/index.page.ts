import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/helpers/Usuario';
import { CrudFirebaseService } from 'src/app/helpers/services/crud-firebase.service';
import { AuthService } from 'src/app/helpers/services/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  user!: Usuario;
  listadoItems!: any[]

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
        viaje.usuarios && viaje.usuarios.includes(userId)
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
