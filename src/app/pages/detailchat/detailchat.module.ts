import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailchatPageRoutingModule } from './detailchat-routing.module';

import { DetailchatPage } from './detailchat.page';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    IonicModule,
    DetailchatPageRoutingModule
  ],
  declarations: [DetailchatPage]
})
export class DetailchatPageModule {}
