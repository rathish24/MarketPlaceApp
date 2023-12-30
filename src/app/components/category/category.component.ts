import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  @Input('category') category: any;

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {}

  async buyItem(category) {
    const toast = await this.toastCtrl.create({
      message: `Added to the cart: ${category.name}`
    });
    toast.present();
  }

}
