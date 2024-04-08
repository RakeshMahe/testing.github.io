import { Map, Record } from 'immutable';

export interface OnlineFeePaymentState extends Map<string, any> {

    studentFeeDetails: any;
    studentFeeDetailsLoading: boolean;

    getLateFeeAmountDetails: any;
    getLateFeeAmountDetailsLoading: boolean;

    GenerateCashFreeOrder: any;
    GenerateCashFreeOrderLoading: boolean;

    updateApplicationPaymentStatus: any;
    updateApplicationPaymentStatusLoading: boolean;

    StudentReceiptDetails: any;
    StudentReceiptDetailsLoading: boolean;

    DownloadStudentReceipt: any;
    DownloadStudentReceiptLoading: boolean;

    studentBasicDetails: any;
    studentBasicDetailsLoading: boolean;
}

export const OnlineFeePaymentRecord = Record({

    studentFeeDetails: [],
    studentFeeDetailsLoading: false,

    getLateFeeAmountDetails: [],
    getLateFeeAmountDetailsLoading: false,

    GenerateCashFreeOrder: {},
    GenerateCashFreeOrderLoading: false,

    updateApplicationPaymentStatus: {},
    updateApplicationPaymentStatusLoading: false,

    StudentReceiptDetails: {},
    StudentReceiptDetailsLoading: true,

    DownloadStudentReceipt: {},
    DownloadStudentReceiptLoading: true,

    studentBasicDetails: {},
    studentBasicDetailsLoading: true,

});
