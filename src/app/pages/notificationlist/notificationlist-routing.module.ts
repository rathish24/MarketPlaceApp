import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationlistPage } from './notificationlist.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationlistPageRoutingModule {}
