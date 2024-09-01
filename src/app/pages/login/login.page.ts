import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/helpers/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  nombre!: string;
  password!: string;
  logged!:boolean;

  constructor() { }

  ngOnInit() {
    null;
  }

  

}
