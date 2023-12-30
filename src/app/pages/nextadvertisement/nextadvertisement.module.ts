import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NextadvertisementPageRoutingModule } from './nextadvertisement-routing.module';

import { NextadvertisementPage } from './nextadvertisement.page';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';
import { MaterialModule } from 'src/app/material.module';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MaterialModule,
    MatSelectModule,
    GooglePlaceModule,
    NextadvertisementPageRoutingModule
  ],
  declarations: [NextadvertisementPage]
})
export class NextadvertisementPageModule {}
