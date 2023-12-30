import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NextadvertisementPage } from './nextadvertisement.page';

const routes: Routes = [
  {
    path: '',
    component: NextadvertisementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NextadvertisementPageRoutingModule {}
