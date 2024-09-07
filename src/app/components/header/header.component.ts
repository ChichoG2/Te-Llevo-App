import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  logged!: boolean;

  constructor(private ctrNav: NavController) { }

  ngOnInit() {
    if(localStorage.getItem('loggedUser')){
      this.logged = true;
    } else{
      this.logged = false;
    }
  }

  goHome(){
    this.ctrNav.navigateForward(["/index"])
  }

}
