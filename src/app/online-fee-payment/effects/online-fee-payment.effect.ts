import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as actions from '../../online-fee-payment/actions/online-fee-payment.action';
import { Store } from '@ngrx/store';
import { OnlineFeePaymentService } from '../../online-fee-payment/online-fee-payment.service';
import * as store from '../../reducers/app.state';

@Injectable()
export class OnlineFeePaymentEffect {
  studentdata: any;
  constructor(
    private action$: Actions,
    protected api: OnlineFeePaymentService,
    public router: Router,
    protected StudentFormState: Store<store.AppState>
  ) { }

  // Online Fee Details
  @Effect()
  studentFeeDetails$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.STUDENT_FEE_DETAILS),
    map((action: actions.OnlineFeePaymentAction) => action.payload),
    switchMap(state => {
      return this.api.studentFeeDetails(state).pipe(
        map(user => new actions.OnlineFeePaymentSuccess(user)),
        catchError(error => of(new actions.OnlineFeePaymentFail(error.error)))
      );
    })
  );

  // Get Late Fee Amount
  @Effect()
  getLateFeeAmountDetails$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.GET_LATE_FEE_AMOUNT),
    map((action: actions.GetLateFeeAmountAction) => action.payload),
    switchMap(state => {
      return this.api.getLateFeeAmountDetails(state).pipe(
        map(user => new actions.GetLateFeeAmountSuccess(user)),
        catchError(error => of(new actions.GetLateFeeAmountFail(error.error)))
      );
    })
  );

  @Effect()
  generateCashFreeOrder$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.GENERATE_CASHFREE_ORDER),
    map((action: actions.GenerateCashFreeOrder) => action.payload),
    switchMap(state => {
      // debugger
      // console.log('state', state);
      return this.api.generateCashFreeOrder(state).pipe(
        //   tap(data => {
        //     console.log('resultseffects', data.data);
        //     if(data && data.status === 1){
        //       this.router.navigate(['/fees-management/fee-bank-master/view']);
        //     }
        // }),
        // tap(res => {
        //   this.router.navigate(['/preadmissionlist']);
        // }),
        map(result => new actions.GenerateCashFreeOrderSuccess(result)),
        catchError(error => of(new actions.GenerateCashFreeOrderFail(error.error)))
      );
    })
  );

  @Effect()
  updateApplicationPaymentStatus$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.UPDATE_PAYMENT_STATUS),
    map((action: actions.updateApplicationPaymentStatus) => action.payload),
    switchMap(state => {
      return this.api.updateApplicationPaymentStatus(state).pipe(
        map(user => new actions.updateApplicationPaymentStatusSuccess(user)),
        catchError(error => of(new actions.updateApplicationPaymentStatusFail(error.error)))
      );
    })
  );

  @Effect()
  StudentReceiptAction$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.STUDENT_RECEIPT_DETAILS),
    map((action: actions.StudentReceiptAction) => action.payload),
    switchMap(state => {
      return this.api.StudentReceiptDetails(state).pipe(
        map(user => new actions.StudentReceiptSuccess(user)),
        catchError(error => of(new actions.StudentReceiptFail(error.error)))
      );
    })
  );

  @Effect()
  DownloadStudentReceiptAction$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.DOWNLOAD_STUDENT_RECEIPT_DETAILS),
    map((action: actions.DownloadStudentReceiptAction) => action.payload),
    switchMap(state => {
      return this.api.DownloadStudentReceipt(state).pipe(
        map(user => new actions.DownloadStudentReceiptSuccess(user)),
        catchError(error => of(new actions.DownloadStudentReceiptFail(error.error)))
      );
    })
  );

  @Effect()
  studentBasicDetails$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.STUDENT_BASIC_DETAILS),
    map((action: actions.studentBasicDetails) => action.payload),
    switchMap(state => {
      return this.api.studentBasicDetails(state).pipe(
        map(user => new actions.studentBasicDetailsSuccess(user)),
        catchError(error => of(new actions.studentBasicDetailsFail(error.error)))
      );
    })
  );


}
