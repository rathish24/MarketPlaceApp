import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignuppopupPageRoutingModule } from './signuppopup-routing.module';

import { SignuppopupPage } from './signuppopup.page';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [SignuppopupPage],
  entryComponents: [SignuppopupPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule,
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    SignuppopupPageRoutingModule
  ],

})
export class SignuppopupPageModule {}
