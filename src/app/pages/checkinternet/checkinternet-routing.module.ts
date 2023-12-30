import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckinternetPage } from './checkinternet.page';

const routes: Routes = [
  {
    path: '',
    component: CheckinternetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckinternetPageRoutingModule {}
