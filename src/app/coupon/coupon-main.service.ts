import { Injectable } from '@angular/core';
import { Api } from './../providers/api/api';

@Injectable()

export class paymentStatusService extends Api {

  private URL: string = this.getBaseUrl();

  // updateApplicationPaymentStatus(params) {
  //   let input:any = {};
  //   input.cfId = params;
  //   console.log('cfToken', input);
  //   return this.http.post<any>(this.URL + '/MergedApi/update-fee-payment-status' , input);
  // }
 
}
