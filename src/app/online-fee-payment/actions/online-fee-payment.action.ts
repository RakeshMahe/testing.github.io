import { Action } from '@ngrx/store';
import { type } from './../../shared/utility';

export const ActionTypes = {
    STUDENT_FEE_DETAILS: type('[onlineFee] online fee payment details'),
    STUDENT_FEE_DETAILS_SUCCESS: type('[students] online fee payment details Success'),
    STUDENT_FEE_DETAILS_FAIL: type('[students] online fee payment details Fail'),

    GET_LATE_FEE_AMOUNT: type('[onlineFee] GET_LATE_FEE_AMOUNT'),
    GET_LATE_FEE_AMOUNT_SUCCESS: type('[students] GET_LATE_FEE_AMOUNT Success'),
    GET_LATE_FEE_AMOUNT_FAIL: type('[students] GET_LATE_FEE_AMOUNT Fail'),

    GENERATE_CASHFREE_ORDER: type('[admission] Generate CashFree Order'),
    GENERATE_CASHFREE_ORDER_SUCCESS: type('[admission] Generate CashFree Order Success'),
    GENERATE_CASHFREE_ORDER_FAIL: type('[admission] Generate CashFree Order Fail'),

    UPDATE_PAYMENT_STATUS: type('[PREADMISSIONLIST] UPDATE_PAYMENT_STATUS'),
    UPDATE_PAYMENT_STATUS_SUCCESS: type('[PREADMISSIONLIST] UPDATE_PAYMENT_STATUS_SUCCESS Success'),
    UPDATE_PAYMENT_STATUS_FAIL: type('[PREADMISSIONLIST] UPDATE_PAYMENT_STATUS_FAIL Fail'),

    STUDENT_RECEIPT_DETAILS: type('[PREADMISSIONLIST] STUDENT_RECEIPT_DETAILS'),
    STUDENT_RECEIPT_DETAILS_SUCCESS: type('[PREADMISSIONLIST] STUDENT_RECEIPT_DETAILS_SUCCESS'),
    STUDENT_RECEIPT_DETAILS_FAIL: type('[PREADMISSIONLIST] STUDENT_RECEIPT_DETAILS_FAIL'),

    DOWNLOAD_STUDENT_RECEIPT_DETAILS: type('[PREADMISSIONLIST] DOWNLOAD_STUDENT_RECEIPT_DETAILS'),
    DOWNLOAD_STUDENT_RECEIPT_DETAILS_SUCCESS: type('[PREADMISSIONLIST] DOWNLOAD_STUDENT_RECEIPT_DETAILS_SUCCESS'),
    DOWNLOAD_STUDENT_RECEIPT_DETAILS_FAIL: type('[PREADMISSIONLIST] DOWNLOAD_STUDENT_RECEIPT_DETAILS_FAIL'),

    STUDENT_BASIC_DETAILS: type('[PREADMISSIONLIST] STUDENT_BASIC_DETAILS'),
    STUDENT_BASIC_DETAILS_SUCCESS: type('[PREADMISSIONLIST] STUDENT_BASIC_DETAILS_SUCCESS'),
    STUDENT_BASIC_DETAILS_FAIL: type('[PREADMISSIONLIST] STUDENT_BASIC_DETAILS_FAIL'),
};


// add student
export class OnlineFeePaymentAction implements Action {
    type = ActionTypes.STUDENT_FEE_DETAILS;
    constructor(public payload: any) {
    }
}
export class OnlineFeePaymentSuccess implements Action {
    type = ActionTypes.STUDENT_FEE_DETAILS_SUCCESS;
    constructor(public payload: any) {
    }
}
export class OnlineFeePaymentFail implements Action {
    type = ActionTypes.STUDENT_FEE_DETAILS_FAIL;
    constructor(public payload: any) {
    }
}

// Late Fee Calculation
export class GetLateFeeAmountAction implements Action {
    type = ActionTypes.GET_LATE_FEE_AMOUNT;
    constructor(public payload: any) {
    }
}
export class GetLateFeeAmountSuccess implements Action {
    type = ActionTypes.GET_LATE_FEE_AMOUNT_SUCCESS;
    constructor(public payload: any) {
    }
}
export class GetLateFeeAmountFail implements Action {
    type = ActionTypes.GET_LATE_FEE_AMOUNT_FAIL;
    constructor(public payload: any) {
    }
}


export class GenerateCashFreeOrder implements Action {
    type = ActionTypes.GENERATE_CASHFREE_ORDER;
    constructor(public payload: any) {
    }

}

export class GenerateCashFreeOrderSuccess implements Action {
    type = ActionTypes.GENERATE_CASHFREE_ORDER_SUCCESS;

    constructor(public payload: any) {
    }
}

export class GenerateCashFreeOrderFail implements Action {
    type = ActionTypes.GENERATE_CASHFREE_ORDER_FAIL;

    constructor(public payload: any) {
    }
}


export class updateApplicationPaymentStatus implements Action {
    type = ActionTypes.UPDATE_PAYMENT_STATUS;
    constructor(public payload: any) { }
}

export class updateApplicationPaymentStatusSuccess implements Action {
    type = ActionTypes.UPDATE_PAYMENT_STATUS_SUCCESS;
    constructor(public payload: any) {
    }
}
export class updateApplicationPaymentStatusFail implements Action {
    type = ActionTypes.UPDATE_PAYMENT_STATUS_FAIL;
    constructor(public payload: any) { }
}


// add student
export class StudentReceiptAction implements Action {
    type = ActionTypes.STUDENT_RECEIPT_DETAILS;
    constructor(public payload: any) {
    }
}
export class StudentReceiptSuccess implements Action {
    type = ActionTypes.STUDENT_RECEIPT_DETAILS_SUCCESS;
    constructor(public payload: any) {
    }
}
export class StudentReceiptFail implements Action {
    type = ActionTypes.STUDENT_RECEIPT_DETAILS_FAIL;
    constructor(public payload: any) {
    }
}

export class DownloadStudentReceiptAction implements Action {
    type = ActionTypes.DOWNLOAD_STUDENT_RECEIPT_DETAILS;
    constructor(public payload: any) {
    }
}
export class DownloadStudentReceiptSuccess implements Action {
    type = ActionTypes.DOWNLOAD_STUDENT_RECEIPT_DETAILS_SUCCESS;
    constructor(public payload: any) {
    }
}
export class DownloadStudentReceiptFail implements Action {
    type = ActionTypes.DOWNLOAD_STUDENT_RECEIPT_DETAILS_FAIL;
    constructor(public payload: any) {
    }
}

export class studentBasicDetails implements Action {
    type = ActionTypes.STUDENT_BASIC_DETAILS;
    constructor(public payload: any) {
    }
}
export class studentBasicDetailsSuccess implements Action {
    type = ActionTypes.STUDENT_BASIC_DETAILS_SUCCESS;
    constructor(public payload: any) {
    }
}
export class studentBasicDetailsFail implements Action {
    type = ActionTypes.STUDENT_BASIC_DETAILS_FAIL;
    constructor(public payload: any) {
    }
}

export type Actions =
    | OnlineFeePaymentAction
    | OnlineFeePaymentSuccess
    | OnlineFeePaymentFail
    | GetLateFeeAmountAction
    | GetLateFeeAmountSuccess
    | GetLateFeeAmountFail
    | updateApplicationPaymentStatus
    | updateApplicationPaymentStatusSuccess
    | updateApplicationPaymentStatusFail;
