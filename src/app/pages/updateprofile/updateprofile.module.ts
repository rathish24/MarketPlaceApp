import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateprofilePageRoutingModule } from './updateprofile-routing.module';

import { UpdateprofilePage } from './updateprofile.page';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule,
    MaterialModule,
    UpdateprofilePageRoutingModule
  ],
  declarations: [UpdateprofilePage]
})
export class UpdateprofilePageModule {}
