import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OnlineFeePaymentSandbox } from 'src/app/online-fee-payment/online-fee-payment.sandbox';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-payment-confirmation',
  templateUrl: './payment-confirmation.component.html',
  styleUrls: ['./payment-confirmation.component.scss']
})
export class PaymentConfirmationComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal,
    public commonSandbox: OnlineFeePaymentSandbox
  ) { }
  responseDetials: any;
  totalPaidAmount: any;
  fee_details: any;
  vendor_details: any;
  SchoolID: any;
  StudentId: any;
  GenerateCashFreeOrderSubscription: Array<Subscription> = [];
  orderdetails: any;


  ngOnInit() {
    // console.log('responseDetials', this.responseDetials)
    // console.log('fee_details', this.fee_details)
    // console.log('vendor_details', this.vendor_details)
  }
  dismiss() {
    this.activeModal.close();
  }

  is_loading: any = 0;
  generateCashFreeOrder() {
    this.is_loading = 1;
    this.commonSandbox.GenerateCashFreeOrder({
      "SchoolID": this.SchoolID,
      "StudentId": this.StudentId,
      "fee_details": this.fee_details,
      "order_amount": this.totalPaidAmount,
      "vendor_details": this.vendor_details,
      "late_fee_amount": this.responseDetials.lateFeeAmount ? +this.responseDetials.lateFeeAmount : 0,
      "voicesnap_charges": this.responseDetials.voicesnap_charges ? +this.responseDetials.voicesnap_charges : 0,
    });

    this.GenerateCashFreeOrderSubscription.push(
      this.commonSandbox.GenerateCashFreeOrder$.subscribe(data => {
        if (data && data.status === 1) {
          this.orderdetails = JSON.parse(data.data);
          this.is_loading = 0;
          this.activeModal.close();
          window.location.href = this.orderdetails.payment_link;
        }
      })
    );

  }

}
