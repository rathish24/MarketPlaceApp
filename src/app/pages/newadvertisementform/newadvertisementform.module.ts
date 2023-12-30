import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewadvertisementformPageRoutingModule } from './newadvertisementform-routing.module';

import { NewadvertisementformPage } from './newadvertisementform.page';
import { MatStepperModule } from '@angular/material';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { MatSelectFilterModule } from 'mat-select-filter';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatStepperModule,
    MaterialModule,
    FlexLayoutModule,
    GooglePlaceModule,
    ReactiveFormsModule,
    NewadvertisementformPageRoutingModule,
    MatSelectFilterModule

  ],
  declarations: [NewadvertisementformPage]
})
export class NewadvertisementformPageModule {}
