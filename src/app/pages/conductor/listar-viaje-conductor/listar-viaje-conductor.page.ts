import { Component, OnInit } from '@angular/core';
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
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.listar()
  }

  listar(){
    const userId = this.auth.getUser().id;
    this.crudServ.listarItems("Viajes").subscribe((data:any[]) => {
      const filtrarViajes = data.filter(viaje => 
        viaje.conductor && viaje.conductor.id === userId
      );
      this.listadoItems = filtrarViajes;
    })
  }
}
