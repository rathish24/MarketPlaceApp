import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationListAllPageRoutingModule } from './notificationlistall-routing.module';

import { NotificationListAllPage } from './notificationlistall.page';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    IonicModule,
    NotificationListAllPageRoutingModule
  ],
  declarations: [NotificationListAllPage]
})
export class NotificationListAllPageModule {}
