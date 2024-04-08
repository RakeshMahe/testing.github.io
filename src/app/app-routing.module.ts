import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';

export const routes: Routes = [

  {
    path: '',
    loadChildren: './student-form/student-form.module#StudentFormModule'
  },

  {
    path: 'student-form/:id',
    loadChildren: './student-form/student-form.module#StudentFormModule'
  },
  {
    path: 'online-fee-payment/:id/:schid',
    loadChildren: './online-fee-payment/online-fee-payment.module#OnlineFeePaymentModule'
  },
  {
    path: 'online-fee-payment/:id/:schid/payment',
    loadChildren: './online-fee-payment/online-fee-payment.module#OnlineFeePaymentModule'
  },
  {
    path: 'paymentsucccess',
    loadChildren: './payment-success/payment-success.module#PaymentSuccessModule'
  },
  {
    path: 'coupon',
    loadChildren: './coupon/coupon-main.module#CouponMainModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
