import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdplansimagePageRoutingModule } from './adplansimage-routing.module';

import { AdplansimagePage } from './adplansimage.page';
import { SharedcategoryModule } from 'src/app/components/sharedcategory/sharedcategory.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule,
    MaterialModule,
    AdplansimagePageRoutingModule,
    RouterModule.forChild([
      {
        path : '',
        component : AdplansimagePage
      }
     ]),
     SharedcategoryModule
  ],
  declarations: [AdplansimagePage]
})
export class AdplansimagePageModule {}
