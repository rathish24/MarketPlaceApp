import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentlogsPageRoutingModule } from './paymentlogs-routing.module';

import { PaymentlogsPage } from './paymentlogs.page';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    IonicModule,
    PaymentlogsPageRoutingModule
  ],
  declarations: [PaymentlogsPage]
})
export class PaymentlogsPageModule {}
