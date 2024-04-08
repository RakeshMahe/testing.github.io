
import { AppState as State } from './app.state';
import { get, uniqBy, filter } from 'lodash';
import { ActionReducer, MetaReducer, ActionReducerMap } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as studentformReducer from './../student-form/reducers/student-form.reducer'
import * as onlineFeePaymentReducer from './../online-fee-payment/reducers/online-fee-payment.reducer'

export const reducers: ActionReducerMap<State> = {
  studentform: studentformReducer.reducer,
  onlineFeePayment: onlineFeePaymentReducer.reducer,
};

export function logger(reducer: ActionReducer<State>): ActionReducer<any, any> {
  return function (state: State, action: any): State {
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];