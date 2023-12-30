import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowfilterdataPage } from './showfilterdata.page';

const routes: Routes = [
  {
    path: '',
    component: ShowfilterdataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowfilterdataPageRoutingModule {}
