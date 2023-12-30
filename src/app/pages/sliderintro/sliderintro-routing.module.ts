import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SliderintroPage } from './sliderintro.page';

const routes: Routes = [
  {
    path: '',
    component: SliderintroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SliderintroPageRoutingModule {}
