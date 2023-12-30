import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostadvertisementPageRoutingModule } from './postadvertisement-routing.module';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { PostadvertisementPage } from './postadvertisement.page';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material.module';
import { MatStepperModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    FlexLayoutModule,
    GooglePlaceModule,
    PostadvertisementPageRoutingModule
  ],
  declarations: [PostadvertisementPage]
})
export class PostadvertisementPageModule {}
