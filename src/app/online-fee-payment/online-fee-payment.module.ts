import { AppModule } from './../app.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NumberAcceptModule } from 'src/app/shared/validation-directives/onlyNumber.module';
import { OnlineFeePaymentComponent } from './online-fee-payment.component';
import { OnlineFeePaymentSandbox } from './online-fee-payment.sandbox';
import { OnlineFeePaymentService } from './online-fee-payment.service';
import { OnlineFeePaymentEffect } from './effects/online-fee-payment.effect';
import { MatCheckboxModule, MatCardModule, MatButtonModule } from '@angular/material';
import { PaymentConfirmationComponent } from '../../app/shared/components/payment-confirmation/payment-confirmation.component'
import { StudentPaymentComponent } from './student-payment/student-payment.component';
import { OnlineFeeCollectionComponent } from './online-fee-collection/online-fee-collection.component';

export const routes = [
    {
        path: 'web',
        component: OnlineFeePaymentComponent,
        pathMatch: 'full',
        data: {
            title: 'fee-payment',
        }
    },
    // {
    //     path: 'app',
    //     component: OnlineFeePaymentComponent,
    //     pathMatch: 'full',
    //     data: {
    //         title: 'fee-payment',
    //     }
    // },
    {
        path: 'payment',
        component: StudentPaymentComponent,
        pathMatch: 'full',
        data: {
            title: 'fee-payment',
        }
    },
    {
        path: 'app',    // 'details',
        component: OnlineFeeCollectionComponent,
        pathMatch: 'full',
        data: {
            title: 'fee-payment',
        }
    },
    {
        path: '',
        redirectTo: 'app',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        SharedModule,
        ReactiveFormsModule,
        NumberAcceptModule,
        MatCheckboxModule,
        MatCardModule,
        MatButtonModule,
        EffectsModule.forFeature([OnlineFeePaymentEffect])],

    declarations: [
        OnlineFeePaymentComponent, PaymentConfirmationComponent, StudentPaymentComponent, OnlineFeeCollectionComponent
    ],
    providers: [
        OnlineFeePaymentService,
        OnlineFeePaymentSandbox
    ],
    entryComponents: [PaymentConfirmationComponent],

    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class OnlineFeePaymentModule {
}
