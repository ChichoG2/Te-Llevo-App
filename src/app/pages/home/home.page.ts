import { Component, OnInit } from '@angular/core';
import { AnimationController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private animationCtrl: AnimationController, private navCtrl: NavController) {}

  ngOnInit(): void {
      this.playAnimation();
  }

  playAnimation(){
    const logoElement = document.querySelector('.logo-container')

    if(logoElement){
      const logoAnimation = this.animationCtrl.create()
        .addElement(logoElement)
        .duration(3500)
        .fromTo('opacity', '0', '1')
        .fromTo('transform', 'scale(0.5)', 'scale(1)');
        
      logoAnimation.play();

      setTimeout(() => {
        this.navCtrl.navigateForward((['/login']))
      }, 3500)
    };
  }

}
