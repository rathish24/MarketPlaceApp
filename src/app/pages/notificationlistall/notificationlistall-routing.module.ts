import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationListAllPage } from './notificationlistall.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationListAllPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationListAllPageRoutingModule {}
