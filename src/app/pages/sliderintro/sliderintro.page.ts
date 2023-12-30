import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-sliderintro',
  templateUrl: './sliderintro.page.html',
  styleUrls: ['./sliderintro.page.scss'],
})
export class SliderintroPage implements OnInit {

  slides = document.querySelector('ion-slides');
  constructor(public router: Router,
    public menuController: MenuController) {
    this.menuController.enable(false);

  }

  ngOnInit() {
    // this.slides.options = {
    //   initialSlide: 1,
    //   speed: 400
    // }
  }

  login() {
    this.router.navigate(['/login']);
  }
}
