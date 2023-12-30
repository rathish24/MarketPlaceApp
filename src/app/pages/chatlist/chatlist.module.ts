import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatlistPageRoutingModule } from './chatlist-routing.module';

import { ChatlistPage } from './chatlist.page';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule,
    MaterialModule,
    ChatlistPageRoutingModule
  ],
  declarations: [ChatlistPage]
})
export class ChatlistPageModule {}
