import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { paymentStatusService } from "../payment-success.service";
import { OnlineFeePaymentService } from "src/app/online-fee-payment/online-fee-payment.service";
import { OnlineFeePaymentSandbox } from "src/app/online-fee-payment/online-fee-payment.sandbox";
import { Subscription } from "rxjs";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: "app-payment-success",
  templateUrl: "./payment-success.component.html",
  styleUrls: ["./payment-success.component.scss"],
})
export class PaymentSuccessComponent implements OnInit {
  constructor(
    private router: Router,
    public activeRoute: ActivatedRoute,
    private PaymentStatusService: OnlineFeePaymentService,
    public OnlineFeePaymentSandbox: OnlineFeePaymentSandbox,
    public sanitizer: DomSanitizer,
  ) { }
  cfOrderToken: any = "";
  cf_id: any = "";
  updateApplicationPaymentSubscription: Array<Subscription> = [];

  paymentStatusDetails: any;
  StatusUrl: any = "";
  urlSafe: SafeResourceUrl;
  url: string = "";
  ngOnInit() {

    if (this.activeRoute.snapshot.queryParamMap.get("cf_id")) {
      this.cfOrderToken =
        this.activeRoute.snapshot.queryParamMap.get("cf_token");
      this.cf_id = this.activeRoute.snapshot.queryParamMap.get("cf_id");

      if (this.cf_id) {
        let updateParam: any = {};
        updateParam.cfId = this.cf_id;
        updateParam.updateType = 1;
        this.OnlineFeePaymentSandbox.updateApplicationPaymentStatus(
          updateParam
        );

        this.updateApplicationPaymentSubscription.push(
          this.OnlineFeePaymentSandbox.updateApplicationPaymentStatus$.subscribe(
            (data) => {
              console.log("datadata", data);
              this.url = data.data;
              this.paymentStatusDetails = data;
              console.log("paymentStatusDetails", this.paymentStatusDetails);
              console.log('this.url at bypasssecurity', this.url, this.paymentStatusDetails);
              this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
              console.log('this.urlSafe', this.urlSafe);
              console.log("this.url", this.url);
              if (data && data.status === 1) {
                this.paymentStatusDetails = data;
              } else if (data && data.status != 1) {
                this.paymentStatusDetails = data;
              }
            }
          )
        );
      }
    } else {
      console.log("param", this.router.url, this.router.url.split("/"));
      var url = this.router.url.split("/");
      this.StatusUrl = url && url.length > 0 ? url[url.length - 1] : "";
      console.log("StatusUrl", this.StatusUrl);
    }
  }

  goToPage() {
    let status: any = "";
    console.log("paymentStatusDetails", this.paymentStatusDetails);
    status =
      this.paymentStatusDetails && this.paymentStatusDetails.status == 1
        ? "success"
        : "failed";
    this.router.navigate(["paymentsucccess/" + status]);
  }
  printRecepit() {
    this.OnlineFeePaymentSandbox.updateApplicationPaymentStatus$.subscribe(
      (data) => {
        // console.log("datadata", data);
        window.open(data.data, '_blank');
      }
    )

  }
}
