import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/helpers/services/auth.service';
import { Usuario } from 'src/app/helpers/Usuario';

@Component({
  selector: 'app-index-conductor',
  templateUrl: './index-conductor.page.html',
  styleUrls: ['./index-conductor.page.scss'],
})
export class IndexConductorPage implements OnInit {
  user!: any;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.user = this.auth.getUser()
  }

}
