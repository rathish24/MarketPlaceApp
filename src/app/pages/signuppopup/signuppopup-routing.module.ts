import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignuppopupPage } from './signuppopup.page';

const routes: Routes = [
  {
    path: '',
    component: SignuppopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignuppopupPageRoutingModule {}
