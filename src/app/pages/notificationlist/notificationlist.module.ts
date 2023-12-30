import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationlistPageRoutingModule } from './notificationlist-routing.module';

import { NotificationlistPage } from './notificationlist.page';

@NgModule({  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationlistPageRoutingModule
  ],
  declarations: [NotificationlistPage]
})
export class NotificationlistPageModule {}
