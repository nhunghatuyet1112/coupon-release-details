import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponPolicyComponent } from './coupon-policy/coupon-policy.component';

const routes: Routes = [
  { path: 'marketing', component: CouponPolicyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }