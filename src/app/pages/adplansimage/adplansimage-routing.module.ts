import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdplansimagePage } from './adplansimage.page';

const routes: Routes = [
  {
    path: '',
    component: AdplansimagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdplansimagePageRoutingModule {}
