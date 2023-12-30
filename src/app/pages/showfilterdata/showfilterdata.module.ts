import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowfilterdataPageRoutingModule } from './showfilterdata-routing.module';

import { ShowfilterdataPage } from './showfilterdata.page';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule,
    MatCheckboxModule,
    ShowfilterdataPageRoutingModule
  ],
  declarations: [ShowfilterdataPage]
})
export class ShowfilterdataPageModule {}
