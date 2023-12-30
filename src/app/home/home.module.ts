import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomePage } from './home.page';
import { MaterialModule } from '../material.module'
import { MatDialogModule } from '@angular/material';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { GoogleMaps } from '@ionic-native/google-maps';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatDialogModule,
    IonicModule,
    GooglePlaceModule,
    MaterialModule,
    ReactiveFormsModule,

    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
