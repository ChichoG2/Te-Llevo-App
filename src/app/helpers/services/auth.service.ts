import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedUser:any = { nombre: "", contrasena: "", esConductor: null };

  constructor() { }

  setUser(user:any){
    this.loggedUser = user;
  }

  getUser(){
    return this.loggedUser;
  }

  isLogged(){
    return this.loggedUser !== null;
  }
}
