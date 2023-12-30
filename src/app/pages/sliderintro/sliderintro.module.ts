import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SliderintroPageRoutingModule } from './sliderintro-routing.module';

import { SliderintroPage } from './sliderintro.page';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule,
    SliderintroPageRoutingModule
  ],
  declarations: [SliderintroPage]
})
export class SliderintroPageModule {}
