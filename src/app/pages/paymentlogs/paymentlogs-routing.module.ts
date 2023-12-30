import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentlogsPage } from './paymentlogs.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentlogsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentlogsPageRoutingModule {}
