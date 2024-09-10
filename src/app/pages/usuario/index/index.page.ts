import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/helpers/Usuario';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  constructor() { }

  user!: Usuario;

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("loggedUser") || "[]");
  }

}
