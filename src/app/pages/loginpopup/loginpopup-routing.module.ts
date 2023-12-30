import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginpopupPage } from './loginpopup.page';

const routes: Routes = [
  {
    path: '',
    component: LoginpopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginpopupPageRoutingModule {}
