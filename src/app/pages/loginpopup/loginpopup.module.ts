import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginpopupPageRoutingModule } from './loginpopup-routing.module';

import { LoginpopupPage } from './loginpopup.page';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule,
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    LoginpopupPageRoutingModule
  ],
  declarations: [LoginpopupPage]
})
export class LoginpopupPageModule {}
