import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewadvertisementformPage } from './newadvertisementform.page';

const routes: Routes = [
  {
    path: '',
    component: NewadvertisementformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewadvertisementformPageRoutingModule {}
