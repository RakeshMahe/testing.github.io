import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from './../providers/api/api';

@Injectable()

export class OnlineFeePaymentService extends Api {

    private URL: string = this.getBaseUrl();

    public studentFeeDetails(params): Observable<any> {
        return this.http.get<any>(this.URL + '/MergedApi/institute-fee-rate/student-fee-details-app-new', { params: params });
    }

    public getLateFeeAmountDetails(params): Observable<any> {
        return this.http.post<any>(this.URL + '/MergedApi/calculate-late-fee-details-new', params);
    }

    generateCashFreeOrder(params): Observable<any> {
        return this.http.post<any>(this.URL + '/MergedApi/generate-cashfree-order-fee-payment', params);
    }

    updateApplicationPaymentStatus(params): Observable<any> {
        return this.http.post<any>(this.URL + '/MergedApi/update-fee-payment-status', { params: params });
    }

    StudentReceiptDetails(params): Observable<any> {
        return this.http.post<any>(this.URL + '/MergedApi/student-invoice-data', params);
    }

    DownloadStudentReceipt(params): Observable<any> {
        return this.http.post<any>(this.URL + '/MergedApi/invoice-details', params);
    }

    studentBasicDetails(params): Observable<any> {
        return this.http.post<any>(this.URL + '/MergedApi/online-fee-student-details', params);
    }

}
