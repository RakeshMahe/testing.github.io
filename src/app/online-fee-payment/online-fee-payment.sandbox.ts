import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as store from './../reducers/app.state';
import * as OnlineFeePaymentActions from './../online-fee-payment/actions/online-fee-payment.action';
import { Subscription } from 'rxjs/index';
import {
    studentFeeDetails,
    studentFeeDetailsLoading,
    getLateFeeAmountDetails,
    getLateFeeAmountDetailsLoading,
    GenerateCashFreeOrder,
    GenerateCashFreeOrderLoading,
    updateApplicationPaymentStatus,
    updateApplicationPaymentStatusLoading,
    StudentReceiptDetails,
    StudentReceiptDetailsLoading,
    DownloadStudentReceipt,
    DownloadStudentReceiptLoading,
    studentBasicDetails,
    studentBasicDetailsLoading

} from './reducers/online-fee-payment.selector';

@Injectable()
export class OnlineFeePaymentSandbox {
    public studentFeeDetails$ = this.appState.select(studentFeeDetails);
    public studentFeeDetailsLoading$ = this.appState.select(studentFeeDetailsLoading);

    public getLateFeeAmountDetails$ = this.appState.select(getLateFeeAmountDetails);
    public getLateFeeAmountDetailsLoading$ = this.appState.select(getLateFeeAmountDetailsLoading);

    public GenerateCashFreeOrder$ = this.appState.select(GenerateCashFreeOrder);
    public GenerateCashFreeOrderLoading$ = this.appState.select(GenerateCashFreeOrderLoading);

    public updateApplicationPaymentStatus$ = this.appState.select(updateApplicationPaymentStatus);
    public updateApplicationPaymentStatusLoading$ = this.appState.select(updateApplicationPaymentStatusLoading);

    public StudentReceiptDetails$ = this.appState.select(StudentReceiptDetails);
    public StudentReceiptDetailsLoading$ = this.appState.select(StudentReceiptDetailsLoading);

    public DownloadStudentReceipt$ = this.appState.select(DownloadStudentReceipt);
    public DownloadStudentReceiptLoading$ = this.appState.select(DownloadStudentReceiptLoading);

    public studentBasicDetails$ = this.appState.select(studentBasicDetails);
    public studentBasicDetailsLoading$ = this.appState.select(studentBasicDetailsLoading);

    constructor(protected appState: Store<store.AppState>) {

    }

    public studentFeeDetails(params) {
        this.appState.dispatch(new OnlineFeePaymentActions.OnlineFeePaymentAction(params));
    }

    public getLateFeeAmount(params) {
        this.appState.dispatch(new OnlineFeePaymentActions.GetLateFeeAmountAction(params));
    }

    public GenerateCashFreeOrder(params) {
        this.appState.dispatch(new OnlineFeePaymentActions.GenerateCashFreeOrder(params));
    }

    public updateApplicationPaymentStatus(params) {
        this.appState.dispatch(new OnlineFeePaymentActions.updateApplicationPaymentStatus(params));
    }

    public studentReceiptDetails(params) {
        this.appState.dispatch(new OnlineFeePaymentActions.StudentReceiptAction(params));
    }

    public donwloadReceiptDetails(params) {
        this.appState.dispatch(new OnlineFeePaymentActions.DownloadStudentReceiptAction(params));
    }

    public studentBasicDetails(params) {
        this.appState.dispatch(new OnlineFeePaymentActions.studentBasicDetails(params));
    }
}
