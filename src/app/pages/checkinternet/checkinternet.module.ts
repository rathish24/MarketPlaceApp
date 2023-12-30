import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckinternetPageRoutingModule } from './checkinternet-routing.module';

import { CheckinternetPage } from './checkinternet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckinternetPageRoutingModule
  ],
  declarations: [CheckinternetPage]
})
export class CheckinternetPageModule {}
