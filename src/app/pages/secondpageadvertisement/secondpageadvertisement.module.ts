import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecondpageadvertisementPageRoutingModule } from './secondpageadvertisement-routing.module';

import { SecondpageadvertisementPage } from './secondpageadvertisement.page';
import { MatNativeDateModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatDatepickerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatButtonModule,
    MaterialModule,
    SecondpageadvertisementPageRoutingModule
  ],
  declarations: [SecondpageadvertisementPage]
})
export class SecondpageadvertisementPageModule {}
