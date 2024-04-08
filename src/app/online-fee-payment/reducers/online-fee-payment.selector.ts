import { createSelector } from 'reselect';
import { AppState } from '../../reducers/app.state';

import * as onlineFeePaymentReducer from './../reducers/online-fee-payment.reducer';

// *************************** PUBLIC API's ****************************
/**
 * Signup store functions
 */
export const OnlineFeePaymentState = (state: AppState) => state.onlineFeePayment;

export const studentFeeDetails = createSelector(OnlineFeePaymentState, onlineFeePaymentReducer.studentFeeDetails);
export const studentFeeDetailsLoading = createSelector(OnlineFeePaymentState, onlineFeePaymentReducer.studentFeeDetailsLoading);

export const getLateFeeAmountDetails = createSelector(OnlineFeePaymentState, onlineFeePaymentReducer.getLateFeeAmountDetails);
export const getLateFeeAmountDetailsLoading = createSelector(OnlineFeePaymentState, onlineFeePaymentReducer.getLateFeeAmountDetailsLoading);

export const GenerateCashFreeOrder = createSelector(OnlineFeePaymentState, onlineFeePaymentReducer.GenerateCashFreeOrder);
export const GenerateCashFreeOrderLoading = createSelector(OnlineFeePaymentState, onlineFeePaymentReducer.GenerateCashFreeOrderLoading);

export const updateApplicationPaymentStatus = createSelector(OnlineFeePaymentState, onlineFeePaymentReducer.updateApplicationPaymentStatus);
export const updateApplicationPaymentStatusLoading = createSelector(OnlineFeePaymentState, onlineFeePaymentReducer.updateApplicationPaymentStatusLoading);

export const StudentReceiptDetails = createSelector(OnlineFeePaymentState, onlineFeePaymentReducer.StudentReceiptDetails);
export const StudentReceiptDetailsLoading = createSelector(OnlineFeePaymentState, onlineFeePaymentReducer.StudentReceiptDetailsLoading);

export const DownloadStudentReceipt = createSelector(OnlineFeePaymentState, onlineFeePaymentReducer.DownloadStudentReceipt);
export const DownloadStudentReceiptLoading = createSelector(OnlineFeePaymentState, onlineFeePaymentReducer.DownloadStudentReceiptLoading);

export const studentBasicDetails = createSelector(OnlineFeePaymentState, onlineFeePaymentReducer.studentBasicDetails);
export const studentBasicDetailsLoading = createSelector(OnlineFeePaymentState, onlineFeePaymentReducer.studentBasicDetailsLoading);
