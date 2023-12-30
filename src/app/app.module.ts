import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule, MatIconModule, MatButtonModule, MatInputModule, MatDialogModule, MatStepperModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupPage } from './pages/popup/popup.page';
import { FilterpopupComponent } from './filterpopup/filterpopup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMaps } from '@ionic-native/google-maps';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import {EmailComposer} from '@ionic-native/email-composer/ngx';
import { Network } from '@ionic-native/network/ngx';
import { PopupaddressComponent } from './components/popupaddress/popupaddress.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { File } from '@ionic-native/file/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
// import { FacebookService } from 'ngx-facebook';
import { FacebookModule } from 'ngx-facebook'
import { Facebook } from '@ionic-native/facebook/ngx';
import { FiltercategoryPage } from './pages/filtercategory/filtercategory.page';
import {AdplansimagePage} from './pages/adplansimage/adplansimage.page'
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';

@NgModule({
  declarations: [AppComponent,
     PopupPage,FiltercategoryPage,AdplansimagePage],
  entryComponents: [PopupPage,FiltercategoryPage,AdplansimagePage],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule, 
    MatStepperModule,
    GooglePlaceModule,
    BrowserAnimationsModule,
    IonicStorageModule.forRoot(),
    FacebookModule.forRoot()
  ],
    
  providers: [
    StatusBar,
    GoogleMaps,
    NativeGeocoder,
    Geolocation,
    CallNumber,
    EmailComposer,
    Network,
    Deeplinks,
    FileChooser,
    FilePath,
    FCM,
    LocalNotifications,
    Base64,
    File,
    SplashScreen,
    SocialSharing,
    NativeStorage,
    GooglePlus,
    Facebook,
    AndroidPermissions,
    LocationAccuracy,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
