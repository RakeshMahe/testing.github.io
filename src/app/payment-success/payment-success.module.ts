import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentSuccessComponent } from './components/payment-success.component';
import { paymentStatusService } from './payment-success.service';
import { OnlineFeePaymentService } from 'src/app/online-fee-payment/online-fee-payment.service';
import { OnlineFeePaymentSandbox } from 'src/app/online-fee-payment/online-fee-payment.sandbox';
import { OnlineFeePaymentEffect } from 'src/app/online-fee-payment/effects/online-fee-payment.effect';
import { SharedModule } from '../shared/shared.module';
export const routes = [
  {
      path: '',
      component: PaymentSuccessComponent,
      data: {
          title: 'paymentsuccess',
          urls: [{ title: 'Home'}, {title: 'paymentsuccess'}]
      }
  },
  {
    path: 'success',
    component: PaymentSuccessComponent,
    data: {
        title: 'paymentsuccess',
        urls: [{ title: 'Home'}, {title: 'paymentsuccess'}]
    }
  },
  {
    path: 'failed',
    component: PaymentSuccessComponent,
    data: {
        title: 'paymentsuccess',
        urls: [{ title: 'Home'}, {title: 'paymentsuccess'}]
    }
  }
];

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(routes),
      // ReactiveFormsModule,
      SharedModule,
      // FormsModule,
        EffectsModule.forFeature([OnlineFeePaymentEffect]),
  ],
  declarations: [
    PaymentSuccessComponent,
  ],
  providers: [OnlineFeePaymentService, OnlineFeePaymentSandbox],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class PaymentSuccessModule {}
