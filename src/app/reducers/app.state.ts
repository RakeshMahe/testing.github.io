import { Map, Record } from 'immutable';
import { OnlineFeePaymentState } from '../online-fee-payment/reducers/online-fee-payment.state';
import {StudentFormState} from './../student-form/reducers/student-form.state';


export interface AppState {
    studentform: StudentFormState;
    onlineFeePayment: OnlineFeePaymentState;
}
