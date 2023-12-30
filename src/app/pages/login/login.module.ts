import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { MaterialModule } from 'src/app/material.module';
import { MatDialogModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Facebook } from '@ionic-native/facebook/ngx';
import { MatDividerModule } from '@angular/material';
import { SignuppopupPage } from '../signuppopup/signuppopup.page';
import { LoginpopupPage } from '../loginpopup/loginpopup.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatDialogModule,
    IonicModule,
    MaterialModule,
    LoginPageRoutingModule
  ],
  entryComponents:[SignuppopupPage,LoginpopupPage],
  providers : [ GooglePlus, Facebook],
  declarations: [SignuppopupPage,LoginpopupPage,LoginPage]
})
export class LoginPageModule {}
