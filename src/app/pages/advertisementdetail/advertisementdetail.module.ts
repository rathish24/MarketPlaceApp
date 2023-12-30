import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertisementdetailPageRoutingModule } from './advertisementdetail-routing.module';

import { AdvertisementdetailPage } from './advertisementdetail.page';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { GoogleMaps } from '@ionic-native/google-maps';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Base64 } from '@ionic-native/base64/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule,
    GooglePlaceModule,
    MatIconModule,
    AdvertisementdetailPageRoutingModule
  ],
  providers : [NativeGeocoder, GoogleMaps, Geolocation, CallNumber, Base64],
  declarations: [AdvertisementdetailPage]
})
export class AdvertisementdetailPageModule {}
