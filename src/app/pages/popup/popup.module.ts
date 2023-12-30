import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopupPageRoutingModule } from './popup-routing.module';

import { PopupPage } from './popup.page';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
// import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule,
    MaterialModule,
    GooglePlaceModule,
    MatFormFieldModule,
    MatInputModule,
    PopupPageRoutingModule
  ],
  declarations: [PopupPage],
  providers : [ AndroidPermissions ,LocationAccuracy]
})
export class PopupPageModule {}
