import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostadvertisementPage } from './postadvertisement.page';

const routes: Routes = [
  {
    path: '',
    component: PostadvertisementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostadvertisementPageRoutingModule {}
