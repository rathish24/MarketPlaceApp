import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecondpageadvertisementPage } from './secondpageadvertisement.page';

const routes: Routes = [
  {
    path: '',
    component: SecondpageadvertisementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondpageadvertisementPageRoutingModule {}
