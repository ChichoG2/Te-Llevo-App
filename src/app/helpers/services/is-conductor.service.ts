import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsConductorService {

  constructor() { }

  isConductor(): boolean{
    const user = JSON.parse(localStorage.getItem("loggedUser")||"[]");
    return user.esConductor;
  }
}
