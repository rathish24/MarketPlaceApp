import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvertisementdetailPage } from './advertisementdetail.page';

const routes: Routes = [
  {
    path: '',
    component: AdvertisementdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertisementdetailPageRoutingModule {}
