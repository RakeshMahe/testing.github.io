import {
  OnlineFeePaymentState,
  OnlineFeePaymentRecord
} from './../reducers/online-fee-payment.state';
import * as actions from '../../online-fee-payment/actions/online-fee-payment.action';
import { get, uniqBy, filter } from 'lodash';

export const initialState: OnlineFeePaymentState = (new OnlineFeePaymentRecord() as unknown) as OnlineFeePaymentState;

export function reducer(
  state = initialState,
  { type, payload }: any
): OnlineFeePaymentState {
  if (!type) {
    return state;
  }

  switch (type) {
    /**
     * add student
     */

    case actions.ActionTypes.STUDENT_FEE_DETAILS:
      return Object.assign({}, state, {
        studentFeeDetails: {},
        studentFeeDetailsLoading: true,
      });

    case actions.ActionTypes.STUDENT_FEE_DETAILS_SUCCESS:
      console.log('payloadbefore', payload)

      if (payload.OtherFees || payload.TermFees || payload.PreviousYearFee || payload.TransportFee || payload.HostelFee) {

        // Previous Year Fee
        let isPYFPending: any = 0;
        if (payload.PreviousYearFee && payload.PreviousYearFee.length > 0) {
          let checkPreviousYearFeePending = payload.PreviousYearFee.filter(obj => { return (obj.completed == false); });
          if (checkPreviousYearFeePending) {
            isPYFPending = 1;
          }
        }

        // Other Fees
        payload.OtherFees.map(item => (item.MonthDetails.map(i => i.completed = false)))
        payload.OtherFees.map(item => item.completed = false); payload.OtherFees.map(item => item.isDisabled = false);
        payload.OtherFees.map(item => (isPYFPending == 1) ? item.isDisabled = true : item.isDisabled = false);
        payload.OtherFees.map(item => (item.MonthDetails.map(i => i.AmountToBePaid == 0 ? i.completed = true : i.completed = false)))
        payload.OtherFees.map(item => (item.MonthDetails.map(i => (i.AmountToBePaid != 0 && isPYFPending == 1) ? i.isDisabled = true : (i.AmountToBePaid != 0 && isPYFPending == 0) ? i.isDisabled = false : i.isDisabled = true)))

        // Term Fees
        payload.TermFees.map(item => (item.FeesDetails.map(i => i.AmountToBePaid != 0 ? i.completed = false : i.completed = true)))
        // payload.TermFees.map(item => (item.FeesDetails.map(i => i.AmountToBePaid != 0 ? i.isChecked = false : i.isChecked = true)))
        payload.TermFees.map(item => (item.FeesDetails.map(i => (i.AmountToBePaid != 0 && isPYFPending == 1) ? i.isDisabled = true : (i.AmountToBePaid != 0 && isPYFPending == 0) ? i.isDisabled = false : i.isDisabled = true)))
        payload.TermFees.map(item => item.IsPaidFully == "No" ? item.completed = false : item.completed = true);
        // payload.TermFees.map(item => item.IsPaiFully == "No" ?  item.isChecked = false :   item.isChecked = true);
        payload.TermFees.map(item => (item.IsPaidFully == "No" && isPYFPending == 1) ? item.isDisabled = true : (item.IsPaidFully == "No" && isPYFPending == 0) ? item.isDisabled = false : item.isDisabled = true);

        // Term Fees Details
        for (let j = 0; j <= payload.TermFees.length - 1; j++) {

          const getPendingDetails = payload.TermFees[j].FeesDetails.filter(obj => { return (obj.completed == false && obj.isChecked == false && obj.isDisabled == false); });

          if (getPendingDetails && getPendingDetails.length > 0) {

            getPendingDetails.forEach(element => {

              var k = j + 1;

              for (let i = k; i < payload.TermFees.length; i++) {

                let getDetails: any = payload.TermFees[i] ? payload.TermFees[i] : '';

                if (getDetails && getDetails.FeesDetails) {

                  const termPaidDetails = getDetails.FeesDetails.find(obj => { return (obj.FeeId === element.FeeId); });

                  if (termPaidDetails) {

                    termPaidDetails.isDisabled = true;

                  }

                }

              }

            });

          }
        }

        // Other Fee Details
        // payload.OtherFees.forEach(other => {
        for (let k = 0; k <= payload.OtherFees.length - 1; k++) {

          var other = payload.OtherFees[k];

          if (other.MonthDetails && other.MonthDetails.length > 0) {

            const checkAllPaid = other.MonthDetails.filter((obj) => {
              return obj.AmountToBePaid != 0;
            });

            if (checkAllPaid && checkAllPaid.length > 0) {
              other.completed = false;
              // other.isDisabled = false;
            } else {
              other.completed = true;
              // other.isDisabled = true;
            }

            var isAllow = 0;
            for (let ot = 0; ot <= other.MonthDetails.length - 1; ot++) {

              if (isAllow == 1) {

                other.MonthDetails[ot].isDisabled = true;

              }

              if (other.MonthDetails[ot].AmountToBePaid != "0" && isAllow == 0) {

                other.MonthDetails[ot].isDisabled = isPYFPending == 1 ? true : false;
                isAllow = 1;
              }

            }

          }

        }
        // });

        // Hostel Fees
        payload.HostelFee.map(item => item.isDisabled = false);
        payload.HostelFee.map(item => (isPYFPending == 1) ? item.isDisabled = true : item.isDisabled = false);
        for (let k = 0; k <= payload.HostelFee.length - 1; k++) {

          var other = payload.HostelFee[k];

          if (other.monthWiseFee && other.monthWiseFee.length > 0) {
            var isAllow = 0;
            for (let ot = 0; ot <= other.monthWiseFee.length - 1; ot++) {

              if (isAllow == 1) {

                other.monthWiseFee[ot].isDisabled = true;

              }

              if (other.monthWiseFee[ot].pendingAmount != "0" && isAllow == 0) {

                other.monthWiseFee[ot].isDisabled = isPYFPending == 1 ? true : false;
                isAllow = 1;
              }

            }

          }

        }

        // Transport Fees
        payload.TransportFee.map(item => item.isDisabled = false);
        payload.TransportFee.map(item => (isPYFPending == 1) ? item.isDisabled = true : item.isDisabled = false);
        for (let k = 0; k <= payload.TransportFee.length - 1; k++) {

          var other = payload.TransportFee[k];

          if (other.busMonthDetails && other.busMonthDetails.length > 0) {
            var isAllow = 0;
            for (let ot = 0; ot <= other.busMonthDetails.length - 1; ot++) {

              if (isAllow == 1) {
                other.busMonthDetails[ot].isDisabled = true;
              }

              if (other.busMonthDetails[ot].pending_amount != "0" && isAllow == 0) {

                other.busMonthDetails[ot].isDisabled = isPYFPending == 1 ? true : false;
                isAllow = 1;
              }

            }

          }

        }

      }
      console.log('payload: ', payload);
      return Object.assign({}, state, {
        studentFeeDetails: payload,
        studentFeeDetailsLoading: false,
      });

    case actions.ActionTypes.STUDENT_FEE_DETAILS_FAIL:
      return Object.assign({}, state, {
        studentFeeDetails: [],
        studentFeeDetailsLoading: false
      });

    case actions.ActionTypes.GENERATE_CASHFREE_ORDER:
      return Object.assign({}, state, {
        GenerateCashFreeOrder: {},
        GenerateCashFreeOrderLoading: true
      });
    case actions.ActionTypes.GENERATE_CASHFREE_ORDER_SUCCESS:
      return Object.assign({}, state, {
        GenerateCashFreeOrder: payload,
        GenerateCashFreeOrderLoading: false
      });
    case actions.ActionTypes.GENERATE_CASHFREE_ORDER_FAIL:
      return Object.assign({}, state, {
        GenerateCashFreeOrder: {},
        GenerateCashFreeOrderLoading: false
      });
    /**
     * 
    /**
     * Get Late Fee Amount
     */
    case actions.ActionTypes.GET_LATE_FEE_AMOUNT:
      return Object.assign({}, state, {
        getLateFeeAmountDetails: [],
        getLateFeeAmountDetailsLoading: true,
      });

    case actions.ActionTypes.GET_LATE_FEE_AMOUNT_SUCCESS:
      return Object.assign({}, state, {
        getLateFeeAmountDetails: payload,
        getLateFeeAmountDetailsLoading: false,
      });

    case actions.ActionTypes.GET_LATE_FEE_AMOUNT_FAIL:
      return Object.assign({}, state, {
        getLateFeeAmountDetails: [],
        getLateFeeAmountDetailsLoading: false
      });

    case actions.ActionTypes.UPDATE_PAYMENT_STATUS:
      return Object.assign({}, state, {
        updateApplicationPaymentStatus: [],
        updateApplicationPaymentStatusLoading: true,
      });

    case actions.ActionTypes.UPDATE_PAYMENT_STATUS_SUCCESS:
      console.log('payloadpayload', payload)
      return Object.assign({}, state, {
        updateApplicationPaymentStatus: payload,
        updateApplicationPaymentStatusLoading: false,
      });

    case actions.ActionTypes.UPDATE_PAYMENT_STATUS_FAIL:
      return Object.assign({}, state, {
        updateApplicationPaymentStatus: [],
        updateApplicationPaymentStatusLoading: false
      });

    case actions.ActionTypes.STUDENT_RECEIPT_DETAILS:
      return Object.assign({}, state, {
        StudentReceiptDetails: {},
        StudentReceiptDetailsLoading: true,
      });

    case actions.ActionTypes.STUDENT_RECEIPT_DETAILS_SUCCESS:
      return Object.assign({}, state, {
        StudentReceiptDetails: payload,
        StudentReceiptDetailsLoading: false,
      });

    case actions.ActionTypes.STUDENT_RECEIPT_DETAILS_FAIL:
      return Object.assign({}, state, {
        StudentReceiptDetails: {},
        StudentReceiptDetailsLoading: false
      });


    case actions.ActionTypes.DOWNLOAD_STUDENT_RECEIPT_DETAILS:
      return Object.assign({}, state, {
        DownloadStudentReceipt: {},
        DownloadStudentReceiptLoading: true,
      });

    case actions.ActionTypes.DOWNLOAD_STUDENT_RECEIPT_DETAILS_SUCCESS:
      return Object.assign({}, state, {
        DownloadStudentReceipt: payload,
        DownloadStudentReceiptLoading: false,
      });

    case actions.ActionTypes.DOWNLOAD_STUDENT_RECEIPT_DETAILS_FAIL:
      return Object.assign({}, state, {
        DownloadStudentReceipt: {},
        DownloadStudentReceiptLoading: false
      });

    case actions.ActionTypes.STUDENT_BASIC_DETAILS:
      return Object.assign({}, state, {
        studentBasicDetails: {},
        studentBasicDetailsLoading: true,
      });

    case actions.ActionTypes.STUDENT_BASIC_DETAILS_SUCCESS:
      return Object.assign({}, state, {
        studentBasicDetails: payload,
        studentBasicDetailsLoading: false,
      });

    case actions.ActionTypes.STUDENT_BASIC_DETAILS_FAIL:
      return Object.assign({}, state, {
        studentBasicDetails: {},
        studentBasicDetailsLoading: false
      });

    default: {
      return state;
    }
  }
}

/**
 * export values
 */

export const studentFeeDetails = (state: OnlineFeePaymentState) =>
  state.studentFeeDetails;

export const studentFeeDetailsLoading = (state: OnlineFeePaymentState) =>
  state.studentFeeDetailsLoading;

export const getLateFeeAmountDetails = (state: OnlineFeePaymentState) =>
  state.getLateFeeAmountDetails;

export const getLateFeeAmountDetailsLoading = (state: OnlineFeePaymentState) =>
  state.getLateFeeAmountDetailsLoading;

export const GenerateCashFreeOrder = (state: OnlineFeePaymentState) => state.GenerateCashFreeOrder;
export const GenerateCashFreeOrderLoading = (state: OnlineFeePaymentState) => state.GenerateCashFreeOrderLoading;

export const updateApplicationPaymentStatus = (state: OnlineFeePaymentState) => state.updateApplicationPaymentStatus;
export const updateApplicationPaymentStatusLoading = (state: OnlineFeePaymentState) => state.updateApplicationPaymentStatusLoading;

export const StudentReceiptDetails = (state: OnlineFeePaymentState) => state.StudentReceiptDetails;
export const StudentReceiptDetailsLoading = (state: OnlineFeePaymentState) => state.StudentReceiptDetailsLoading;

export const DownloadStudentReceipt = (state: OnlineFeePaymentState) => state.DownloadStudentReceipt;
export const DownloadStudentReceiptLoading = (state: OnlineFeePaymentState) => state.DownloadStudentReceiptLoading;

export const studentBasicDetails = (state: OnlineFeePaymentState) => state.studentBasicDetails;
export const studentBasicDetailsLoading = (state: OnlineFeePaymentState) => state.studentBasicDetailsLoading;
