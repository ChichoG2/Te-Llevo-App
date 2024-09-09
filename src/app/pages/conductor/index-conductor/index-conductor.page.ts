import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/helpers/Usuario';

@Component({
  selector: 'app-index-conductor',
  templateUrl: './index-conductor.page.html',
  styleUrls: ['./index-conductor.page.scss'],
})
export class IndexConductorPage implements OnInit {
  user!: Usuario;

  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("loggedUser") || "[]")
  }

}
