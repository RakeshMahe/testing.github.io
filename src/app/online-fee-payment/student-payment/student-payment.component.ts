import {
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnlineFeePaymentSandbox } from '../../online-fee-payment/online-fee-payment.sandbox'
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaymentConfirmationComponent } from '../../shared/components/payment-confirmation/payment-confirmation.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-payment',
  templateUrl: './student-payment.component.html',
  styleUrls: ['./student-payment.component.scss'],
  providers: [],
})

export class StudentPaymentComponent implements OnInit {
  panelOpenState = false;
  studentId: any;
  termFeeDetails = [];
  otherFeeDetails = [];
  carryOverFeeDetails = [];
  transportFeeDetails = [];
  hostelFeeDetails = [];
  selectedFees: any = [];
  total_fee_amount_selected = 0;
  status = 0;
  message = "";
  isLoading = 1;

  studentDetails: any = ''
  ngOnInit() {
    this.onlineFeePaymentSandbox.studentBasicDetails({
      ChildID: +this.studentId,
      SchoolID: +this.schoolId
    });

    this.subscriptions.push(this.onlineFeePaymentSandbox.studentBasicDetails$.subscribe(details => {
      if (details && details.Status == '1') {
        this.studentDetails = details.data[0];
      }
    }));

    this.isLoading = 1;
    this.subscriptions.push(this.onlineFeePaymentSandbox.studentFeeDetails$.subscribe(details => {
      if (details) {
        this.termFeeDetails = details.TermFees;
        this.otherFeeDetails = details.OtherFees;
        this.carryOverFeeDetails = details.PreviousYearFee;
        this.transportFeeDetails = details.TransportFee;
        this.hostelFeeDetails = details.HostelFee;
        this.status = details.Status;
        this.message = details.Message;
        this.isLoading = 0;
      }
    }));
  }

  updateAllComplete(i, feeIter, event, type, list, fee) {
    if (type == 5) {
      if (event == true) {
        /** TERM FEES */
        this.termFeeDetails.map(item => (item.FeesDetails.map(i => i.AmountToBePaid != 0 ? i.completed = false : i.completed = true)))
        this.termFeeDetails.map(item => (item.FeesDetails.map(i => (i.AmountToBePaid != 0) ? i.isDisabled = false : i.isDisabled = true)))
        this.termFeeDetails.map(item => item.IsPaidFully == "No" ? item.completed = false : item.completed = true);
        this.termFeeDetails.map(item => (item.IsPaidFully == "No") ? item.isDisabled = false : item.isDisabled = true);

        for (let j = 0; j <= this.termFeeDetails.length - 1; j++) {

          const getPendingDetails = this.termFeeDetails[j].FeesDetails.filter(obj => { return (obj.completed == false && obj.isChecked == false && obj.isDisabled == false); });

          if (getPendingDetails && getPendingDetails.length > 0) {

            getPendingDetails.forEach(element => {

              var k = j + 1;

              for (let i = k; i < this.termFeeDetails.length; i++) {

                let getDetails: any = this.termFeeDetails[i] ? this.termFeeDetails[i] : '';

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
        //
        /** OTHER FEES */
        this.otherFeeDetails.map(item => (item.MonthDetails.map(i => i.completed = false)))
        this.otherFeeDetails.map(item => item.completed = false); this.otherFeeDetails.map(item => item.isDisabled = false);
        this.otherFeeDetails.map(item => item.isDisabled = false);
        this.otherFeeDetails.map(item => (item.MonthDetails.map(i => i.AmountToBePaid != 0 ? i.completed = false : i.completed = true)))
        this.otherFeeDetails.map(item => (item.MonthDetails.map(i => i.AmountToBePaid != 0 ? i.isDisabled = false : i.isDisabled = true)))
        for (let k = 0; k <= this.otherFeeDetails.length - 1; k++) {

          var other = this.otherFeeDetails[k];

          if (other.MonthDetails && other.MonthDetails.length > 0) {
            var isAllow = 0;
            for (let ot = 0; ot <= other.MonthDetails.length - 1; ot++) {

              if (isAllow == 1) {
                other.MonthDetails[ot].isDisabled = true;
              }

              if (other.MonthDetails[ot].AmountToBePaid != "0" && isAllow == 0) {
                other.MonthDetails[ot].isDisabled = false;
                isAllow = 1;
              }

            }

          }

        }
        //
        // Hostel Fees
        this.hostelFeeDetails.map(item => item.isDisabled = false);
        this.hostelFeeDetails.map(item => item.isDisabled = false);
        for (let k = 0; k <= this.hostelFeeDetails.length - 1; k++) {

          var other = this.hostelFeeDetails[k];

          if (other.monthWiseFee && other.monthWiseFee.length > 0) {
            var isAllow = 0;
            for (let ot = 0; ot <= other.monthWiseFee.length - 1; ot++) {
              if (isAllow == 1) {
                other.monthWiseFee[ot].isDisabled = true;
              }
              if (other.monthWiseFee[ot].pendingAmount != "0" && isAllow == 0) {
                other.monthWiseFee[ot].isDisabled = false;
                isAllow = 1;
              }
            }
          }
        }

        // Transport Fees
        this.transportFeeDetails.map(item => item.isDisabled = false);
        this.transportFeeDetails.map(item => item.isDisabled = false);
        for (let k = 0; k <= this.transportFeeDetails.length - 1; k++) {

          var other = this.transportFeeDetails[k];

          if (other.busMonthDetails && other.busMonthDetails.length > 0) {
            var isAllow = 0;
            for (let ot = 0; ot <= other.busMonthDetails.length - 1; ot++) {

              if (isAllow == 1) {
                other.busMonthDetails[ot].isDisabled = true;
              }

              if (other.busMonthDetails[ot].pending_amount != "0" && isAllow == 0) {

                other.busMonthDetails[ot].isDisabled = false;
                isAllow = 1;
              }

            }

          }

        }

      } else {
        // Previous Year Fee
        let isPYFPending: any = 1;

        // Other Fees
        this.otherFeeDetails.map(item => (item.MonthDetails.map(i => i.completed = false)))
        this.otherFeeDetails.map(item => item.completed = false); this.otherFeeDetails.map(item => item.isDisabled = false);
        this.otherFeeDetails.map(item => (isPYFPending == 1) ? item.isDisabled = true : item.isDisabled = false);
        this.otherFeeDetails.map(item => (item.MonthDetails.map(i => i.AmountToBePaid != 0 ? i.completed = false : i.completed = true)))
        this.otherFeeDetails.map(item => (item.MonthDetails.map(i => i.AmountToBePaid != 0 ? i.completed = false : i.completed = true)))
        this.otherFeeDetails.map(item => (item.MonthDetails.map(i => (i.AmountToBePaid != 0 && isPYFPending == 1) ? i.isDisabled = true : (i.AmountToBePaid != 0 && isPYFPending == 0) ? i.isDisabled = false : i.isDisabled = true)))

        // Term Fees
        this.termFeeDetails.map(item => (item.FeesDetails.map(i => i.AmountToBePaid != 0 ? i.completed = false : i.completed = true)))
        this.termFeeDetails.map(item => (item.FeesDetails.map(i => (i.AmountToBePaid != 0 && isPYFPending == 1) ? i.isDisabled = true : (i.AmountToBePaid != 0 && isPYFPending == 0) ? i.isDisabled = false : i.isDisabled = true)))
        this.termFeeDetails.map(item => item.IsPaidFully == "No" ? item.completed = false : item.completed = true);
        this.termFeeDetails.map(item => (item.IsPaidFully == "No" && isPYFPending == 1) ? item.isDisabled = true : (item.IsPaidFully == "No" && isPYFPending == 0) ? item.isDisabled = false : item.isDisabled = true);

        // Term Fees Details
        for (let j = 0; j <= this.termFeeDetails.length - 1; j++) {

          const getPendingDetails = this.termFeeDetails[j].FeesDetails.filter(obj => { return (obj.completed == false && obj.isChecked == false && obj.isDisabled == false); });

          if (getPendingDetails && getPendingDetails.length > 0) {

            getPendingDetails.forEach(element => {

              var k = j + 1;

              for (let i = k; i < this.termFeeDetails.length; i++) {

                let getDetails: any = this.termFeeDetails[i] ? this.termFeeDetails[i] : '';

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
        for (let k = 0; k <= this.otherFeeDetails.length - 1; k++) {

          var other = this.otherFeeDetails[k];

          if (other.MonthDetails && other.MonthDetails.length > 0) {
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

        // Hostel Fees
        this.hostelFeeDetails.map(item => item.isDisabled = false);
        this.hostelFeeDetails.map(item => (isPYFPending == 1) ? item.isDisabled = true : item.isDisabled = false);
        for (let k = 0; k <= this.hostelFeeDetails.length - 1; k++) {

          var other = this.hostelFeeDetails[k];

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
        this.transportFeeDetails.map(item => item.isDisabled = false);
        this.transportFeeDetails.map(item => (isPYFPending == 1) ? item.isDisabled = true : item.isDisabled = false);
        for (let k = 0; k <= this.transportFeeDetails.length - 1; k++) {

          var other = this.transportFeeDetails[k];

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
    }
    else if (type == 1) {
      if (type == 1 && event == true) {

        /////////////////// Here I Enable the Next Term Fee  /////////////////////////////////
        if (this.termFeeDetails && this.termFeeDetails[i + 1] && this.termFeeDetails[i + 1].FeesDetails) {

          let indexElement = this.termFeeDetails[i + 1].FeesDetails.findIndex(p => p.FeeId == fee.FeeId);

          if (this.termFeeDetails[i + 1].FeesDetails
            && this.termFeeDetails[i + 1].FeesDetails[indexElement]
            && this.termFeeDetails[i + 1].FeesDetails[indexElement].AmountToBePaid != "0") {
            this.termFeeDetails[i + 1].FeesDetails[indexElement].isDisabled = false;
          }

        }

        /////////////////// Here I Disable the Previous Term Fee  /////////////////////////////
        if (this.termFeeDetails && this.termFeeDetails[i - 1] && this.termFeeDetails[i - 1].FeesDetails) {

          let indexElement = this.termFeeDetails[i - 1].FeesDetails.findIndex(p => p.FeeId == fee.FeeId);

          if (this.termFeeDetails[i - 1].FeesDetails
            && this.termFeeDetails[i - 1].FeesDetails[indexElement]
            && this.termFeeDetails[i - 1].FeesDetails[indexElement].AmountToBePaid != "0") {
            this.termFeeDetails[i - 1].FeesDetails[indexElement].isDisabled = true;
          }

        }
        /////////////////////////////////////////////////////////////////////////////////////

        if (this.termFeeDetails[i == 0 ? i : i - 1].FeesDetails[feeIter].completed != true) {
          this.termFeeDetails[i].FeesDetails[feeIter].completed = !this.termFeeDetails[i].FeesDetails[feeIter].completed;
          // console.log(this.termFeeDetails[i].FeesDetails[feeIter].completed)
          return;
        }
      }
      else {

        /////////////////// Here I Disable the Next Term Fee  //////////////////////////////
        if (this.termFeeDetails && this.termFeeDetails[i + 1] && this.termFeeDetails[i + 1].FeesDetails) {

          let indexElement = this.termFeeDetails[i + 1].FeesDetails.findIndex(p => p.FeeId == fee.FeeId);

          if (this.termFeeDetails[i + 1].FeesDetails
            && this.termFeeDetails[i + 1].FeesDetails[indexElement]
            && this.termFeeDetails[i + 1].FeesDetails[indexElement].AmountToBePaid != "0") {
            this.termFeeDetails[i + 1].FeesDetails[indexElement].isDisabled = true;
          }

        }

        /////////////////// Here I Enable the Previous Term Fee  ///////////////////////////
        if (this.termFeeDetails && this.termFeeDetails[i - 1] && this.termFeeDetails[i - 1].FeesDetails) {

          let indexElement = this.termFeeDetails[i - 1].FeesDetails.findIndex(p => p.FeeId == fee.FeeId);

          if (this.termFeeDetails[i - 1].FeesDetails
            && this.termFeeDetails[i - 1].FeesDetails[indexElement]
            && this.termFeeDetails[i - 1].FeesDetails[indexElement].AmountToBePaid != "0") {
            this.termFeeDetails[i - 1].FeesDetails[indexElement].isDisabled = false;
          }

        }
        /////////////////////////////////////////////////////////////////////////////////////

        this.termFeeDetails[i].completed = this.termFeeDetails[i].FeesDetails != null && this.termFeeDetails[i].FeesDetails.every(t => t.completed);
      }
    }
    else if (type == 2) {
      this.otherFeeDetails[i].completed = this.otherFeeDetails[i].MonthDetails != null && this.otherFeeDetails[i].MonthDetails.every(t => t.completed);

      if (type == 2 && event == true) {
        // Here I Enable Next Month
        if (list.MonthDetails
          && list.MonthDetails.length > 0
          && list.MonthDetails[feeIter + 1]
          && list.MonthDetails[feeIter + 1].AmountToBePaid != "0") {

          list.MonthDetails[feeIter + 1].isDisabled = false;

        }

        // Here I Disable Previous Month
        if (list.MonthDetails
          && list.MonthDetails.length > 0
          && list.MonthDetails[feeIter - 1]
          && list.MonthDetails[feeIter - 1].AmountToBePaid != "0") {

          list.MonthDetails[feeIter - 1].isDisabled = true;

        }
      } else {
        // Here I Disable Next Month
        if (list.MonthDetails
          && list.MonthDetails.length > 0
          && list.MonthDetails[feeIter + 1]
          && list.MonthDetails[feeIter + 1].AmountToBePaid != "0") {

          list.MonthDetails[feeIter + 1].isDisabled = true;

        }

        // Here I Enable Previous Month
        if (list.MonthDetails
          && list.MonthDetails.length > 0
          && list.MonthDetails[feeIter - 1]
          && list.MonthDetails[feeIter - 1].AmountToBePaid != "0") {

          list.MonthDetails[feeIter - 1].isDisabled = false;

        }
      }

    }
    else if (type == 3) {
      this.transportFeeDetails[i].completed = this.transportFeeDetails[i].busMonthDetails != null && this.transportFeeDetails[i].busMonthDetails.every(t => t.completed);

      if (type == 3 && event == true) {
        // Here I Enable Next Month
        if (list.busMonthDetails
          && list.busMonthDetails.length > 0
          && list.busMonthDetails[feeIter + 1]
          && list.busMonthDetails[feeIter + 1].pending_amount != "0") {

          list.busMonthDetails[feeIter + 1].isDisabled = false;

        }

        // Here I Disable Previous Month
        if (list.busMonthDetails
          && list.busMonthDetails.length > 0
          && list.busMonthDetails[feeIter - 1]
          && list.busMonthDetails[feeIter - 1].pending_amount != "0") {

          list.busMonthDetails[feeIter - 1].isDisabled = true;

        }
      } else {
        // Here I Disable Next Month
        if (list.busMonthDetails
          && list.busMonthDetails.length > 0
          && list.busMonthDetails[feeIter + 1]
          && list.busMonthDetails[feeIter + 1].pending_amount != "0") {

          list.busMonthDetails[feeIter + 1].isDisabled = true;

        }

        // Here I Enable Previous Month
        if (list.busMonthDetails
          && list.busMonthDetails.length > 0
          && list.busMonthDetails[feeIter - 1]
          && list.busMonthDetails[feeIter - 1].pending_amount != "0") {

          list.busMonthDetails[feeIter - 1].isDisabled = false;

        }
      }

    }
    else if (type == 4) {
      this.hostelFeeDetails[i].completed = this.hostelFeeDetails[i].monthWiseFee != null && this.hostelFeeDetails[i].monthWiseFee.every(t => t.completed);

      if (type == 4 && event == true) {
        // Here I Enable Next Month
        if (list.monthWiseFee
          && list.monthWiseFee.length > 0
          && list.monthWiseFee[feeIter + 1]
          && list.monthWiseFee[feeIter + 1].pendingAmount != "0") {

          list.monthWiseFee[feeIter + 1].isDisabled = false;

        }

        // Here I Disable Previous Month
        if (list.monthWiseFee
          && list.monthWiseFee.length > 0
          && list.monthWiseFee[feeIter - 1]
          && list.monthWiseFee[feeIter - 1].pendingAmount != "0") {

          list.monthWiseFee[feeIter - 1].isDisabled = true;

        }
      } else {
        // Here I Disable Next Month
        if (list.monthWiseFee
          && list.monthWiseFee.length > 0
          && list.monthWiseFee[feeIter + 1]
          && list.monthWiseFee[feeIter + 1].pendingAmount != "0") {

          list.monthWiseFee[feeIter + 1].isDisabled = true;

        }

        // Here I Enable Previous Month
        if (list.monthWiseFee
          && list.monthWiseFee.length > 0
          && list.monthWiseFee[feeIter - 1]
          && list.monthWiseFee[feeIter - 1].pendingAmount != "0") {

          list.monthWiseFee[feeIter - 1].isDisabled = false;

        }
      }

    }

  }


  someComplete(i, type): boolean {

    if (type == 1) {
      if (this.termFeeDetails[i].FeesDetails == null) {
        return false;
      }
      return this.termFeeDetails[i].FeesDetails.filter(t => t.completed).length > 0 && !this.termFeeDetails[i].completed;
    }
    else if (type == 2) {
      if (this.otherFeeDetails[i].MonthDetails == null) {
        return false;
      }
      return this.otherFeeDetails[i].MonthDetails.filter(t => t.completed).length > 0 && !this.otherFeeDetails[i].completed;
    }
    else if (type == 3) {
      if (this.transportFeeDetails[i].busMonthDetails == null) {
        return false;
      }
      return this.transportFeeDetails[i].busMonthDetails.filter(t => t.completed).length > 0 && !this.transportFeeDetails[i].completed;
    }
    else if (type == 4) {
      if (this.hostelFeeDetails[i].monthWiseFee == null) {
        return false;
      }
      return this.hostelFeeDetails[i].monthWiseFee.filter(t => t.completed).length > 0 && !this.hostelFeeDetails[i].completed;
    }
  }

  setAll(completed, i, type) {

    if (type == 1) {
      this.termFeeDetails[i].completed = completed;
      if (this.termFeeDetails[i].FeesDetails == null) {
        return;
      }

      this.termFeeDetails[i].FeesDetails.forEach(t => t.AmountToBePaid != "0" && t.isDisabled == false ? t.completed = completed : null);
    }
    else if (type == 2) {
      this.otherFeeDetails[i].completed = completed;
      if (this.otherFeeDetails[i].MonthDetails == null) {
        return;
      }

      if (completed) {
        this.otherFeeDetails[i].MonthDetails.forEach(t => t.AmountToBePaid != "0" ? t.isDisabled = false : null);
        this.otherFeeDetails[i].MonthDetails.forEach(t => t.AmountToBePaid != "0" && t.isDisabled == false ? t.completed = completed : null);
        var length = this.otherFeeDetails[i].MonthDetails.length;
        this.otherFeeDetails[i].MonthDetails.forEach(function (t, j) {
          if (j == +length - 1) { t.isDisabled = false }
          else { t.isDisabled = true };
        });
        // console.log("this.otherFeeDetails[i].MonthDetails", this.otherFeeDetails[i].MonthDetails)

      }
      else {
        this.otherFeeDetails[i].MonthDetails.forEach(t => t.AmountToBePaid != "0" ? t.isDisabled = false : null);
        this.otherFeeDetails[i].MonthDetails.forEach(t => t.AmountToBePaid != "0" && t.isDisabled == false ? t.completed = completed : null);
        this.otherFeeDetails[i].MonthDetails.forEach(t => t.AmountToBePaid != "0" ? t.isDisabled = true : null);

        var arrlength = this.otherFeeDetails[i].MonthDetails.length;
        // this.otherFeeDetails[i].MonthDetails.forEach(function (t, j) {
        //   if ( t.AmountToBePaid != "0") { t.isDisabled = false ;  return true;}
        // });

        for (var j = 0; j < arrlength - 1; j++) {
          if (this.otherFeeDetails[i].MonthDetails[j].AmountToBePaid != "0") {
            this.otherFeeDetails[i].MonthDetails[j].isDisabled = false;
            break;
          }
        }
      }
    }
    else if (type == 3) {
      this.transportFeeDetails[i].completed = completed;
      if (this.transportFeeDetails[i].busMonthDetails == null) {
        return;
      }

      if (completed) {
        this.transportFeeDetails[i].busMonthDetails.forEach(t => t.pending_amount != "0" ? t.isDisabled = false : null);
        this.transportFeeDetails[i].busMonthDetails.forEach(t => t.pending_amount != "0" && t.isDisabled == false ? t.completed = completed : null);
        var length = this.transportFeeDetails[i].busMonthDetails.length;
        this.transportFeeDetails[i].busMonthDetails.forEach(function (t, j) {
          if (j == +length - 1) { t.isDisabled = false }
          else { t.isDisabled = true };
        });
      }
      else {
        this.transportFeeDetails[i].busMonthDetails.forEach(t => t.pending_amount != "0" ? t.isDisabled = false : null);
        this.transportFeeDetails[i].busMonthDetails.forEach(t => t.pending_amount != "0" && t.isDisabled == false ? t.completed = completed : null);
        this.transportFeeDetails[i].busMonthDetails.forEach(t => t.pending_amount != "0" ? t.isDisabled = true : null);

        var arrlength = this.transportFeeDetails[i].busMonthDetails.length;

        for (var j = 0; j < arrlength - 1; j++) {
          if (this.transportFeeDetails[i].busMonthDetails[j].pending_amount != "0") {
            this.transportFeeDetails[i].busMonthDetails[j].isDisabled = false;
            break;
          }
        }
      }
    }
    else if (type == 4) {
      this.hostelFeeDetails[i].completed = completed;
      if (this.hostelFeeDetails[i].monthWiseFee == null) {
        return;
      }

      if (completed) {
        this.hostelFeeDetails[i].monthWiseFee.forEach(t => t.pendingAmount != "0" ? t.isDisabled = false : null);
        this.hostelFeeDetails[i].monthWiseFee.forEach(t => t.pendingAmount != "0" && t.isDisabled == false ? t.completed = completed : null);
        var length = this.hostelFeeDetails[i].monthWiseFee.length;
        this.hostelFeeDetails[i].monthWiseFee.forEach(function (t, j) {
          if (j == +length - 1) { t.isDisabled = false }
          else { t.isDisabled = true };
        });
      }
      else {
        this.hostelFeeDetails[i].monthWiseFee.forEach(t => t.pendingAmount != "0" ? t.isDisabled = false : null);
        this.hostelFeeDetails[i].monthWiseFee.forEach(t => t.pendingAmount != "0" && t.isDisabled == false ? t.completed = completed : null);
        this.hostelFeeDetails[i].monthWiseFee.forEach(t => t.pendingAmount != "0" ? t.isDisabled = true : null);

        var arrlength = this.hostelFeeDetails[i].monthWiseFee.length;

        for (var j = 0; j < arrlength - 1; j++) {
          if (this.hostelFeeDetails[i].monthWiseFee[j].pendingAmount != "0") {
            this.hostelFeeDetails[i].monthWiseFee[j].isDisabled = false;
            break;
          }
        }
      }
    }

  }

  feeDetails() {
    this.onlineFeePaymentSandbox.studentFeeDetails({
      ChildID: +this.studentId,
      SchoolID: +this.schoolId
    });
  }
  invoiceDetails() {
    this.onlineFeePaymentSandbox.studentReceiptDetails({
      ChildID: this.studentId.toString(),
      SchoolID: this.schoolId.toString()
    });
  }
  downloadInvoice(item) {
    this.onlineFeePaymentSandbox.donwloadReceiptDetails({
      InvoiceId: +item.id,
      SchoolID: +this.schoolId
    });

    this.subscriptions.push(this.onlineFeePaymentSandbox.DownloadStudentReceipt$.subscribe(details => {
      if (details && details.Status == '1') {
        window.open(details.data);
      }
    }));
  }

  async callLateFeeCalculation(selectedfees: any) {
    // debugger;
    let termselection = selectedfees.term;
    let othersselection = selectedfees.others;
    let carryoverselection = selectedfees.carryover;
    let transportselection = selectedfees.transport;
    let hostelselection = selectedfees.hostel;

    let consolidatedSelection: any = [];
    this.total_fee_amount_selected = 0;

    if (othersselection && othersselection.length > 0) {
      othersselection.map((element) => {
        element.MonthDetails.map((month) => {
          consolidatedSelection.push({ "feeId": element.FeeId, "feeGroupTypeId": element.TermGroupTypeId, "otherFeeMonthId": month.MonthId, "account_id": +element.AccountID, "amount": +month.AmountToBePaid })
          this.total_fee_amount_selected = this.total_fee_amount_selected + +month.AmountPerMonth;
        });
      });
    }

    if (termselection && termselection.length > 0) {
      termselection.map((element) => {
        element.FeesDetails.map((fee) => {
          consolidatedSelection.push({ "feeId": fee.FeeId, "feeGroupTypeId": element.TermGroupTypeId, "otherFeeMonthId": 0, "account_id": +fee.AccountID, "amount": +fee.AmountToBePaid })
          this.total_fee_amount_selected = this.total_fee_amount_selected + +fee.AmountToBePaid
        });
      });
    }

    // console.log("SelectedFees", consolidatedSelection)

    await this.onlineFeePaymentSandbox.getLateFeeAmount({
      lateFeeDetails: consolidatedSelection,
      SchoolID: +this.schoolId,
      totalAmount: +this.total_fee_amount_selected,
    });

    let allow: any = 0;
    this.subscriptions.push(this.onlineFeePaymentSandbox.getLateFeeAmountDetails$.subscribe(details => {
      if (details && details.Status && allow == 0) {

        if (carryoverselection && carryoverselection.length > 0) {
          carryoverselection.map((element) => {
            consolidatedSelection.push({ "account_id": +element.AccountID, "amount": +element.AmountToBePaid })
            this.total_fee_amount_selected = this.total_fee_amount_selected + +element.AmountToBePaid;
          });
        }

        if (transportselection && transportselection.length > 0) {
          transportselection.map((element) => {
            element.MonthDetails.map((month) => {
              consolidatedSelection.push({ "account_id": +element.AccountID, "amount": +month.pending_amount })
              this.total_fee_amount_selected = this.total_fee_amount_selected + +month.pending_amount;
            });
          });
        }

        if (hostelselection && hostelselection.length > 0) {
          hostelselection.map((element) => {
            element.MonthDetails.map((month) => {
              consolidatedSelection.push({ "account_id": +element.AccountID, "amount": +month.pendingAmount })
              this.total_fee_amount_selected = this.total_fee_amount_selected + +month.pendingAmount;
            });
          });
        }

        this.total_fee_amount_selected = Math.round((this.total_fee_amount_selected + Number.EPSILON) * 100) / 100;

        if (this.total_fee_amount_selected < 1) {
          this.toastr.error('Paid Amount should be greater then Rs.1');
          this.is_loading = 0;
          return;
        }

        var vendor_details = [];
        consolidatedSelection.reduce(function (res, value) {
          if (!res[value.account_id]) {
            res[value.account_id] = { vendor_id: value.account_id.toString(), amount: 0 };
            vendor_details.push(res[value.account_id])
          }
          res[value.account_id].amount += value.amount;
          return res;
        }, {});

        const modalRef = this.modalService.open(PaymentConfirmationComponent, {
          windowClass: 'previewReqDetails',
          centered: true,
          keyboard: false,
          backdrop: 'static',
          size: 'sm'
        });

        // console.log("latefee", details)
        modalRef.componentInstance.fee_details = selectedfees;
        modalRef.componentInstance.responseDetials = details;
        modalRef.componentInstance.vendor_details = vendor_details;
        modalRef.componentInstance.totalPaidAmount = this.total_fee_amount_selected;
        modalRef.componentInstance.SchoolID = this.schoolId;
        modalRef.componentInstance.StudentId = this.studentId;

        modalRef.result.then((result) => {
          this.is_loading = 0;
          if (result === true) {

          }
        });
        allow = 1;
      }
    }));

  }

  is_loading: any = 0;

  onSubmitPayment() {

    this.is_loading = 1;

    this.selectedFees = { term: [], others: [], carryover: [], transport: [], hostel: [] };
    let termresult = this.termFeeDetails.map((element) => {
      return { ...element, FeesDetails: element.FeesDetails.filter((subElement) => subElement.completed === true && subElement.AmountToBePaid != "0") }
    });

    let othersresult = this.otherFeeDetails.map((element) => {
      return { ...element, MonthDetails: element.MonthDetails.filter((subElement) => subElement.completed === true && subElement.AmountToBePaid != "0") }
    });

    var carryoverresult = this.carryOverFeeDetails.filter(function (el) {
      return el.completed === true;
    });

    let transportresult = this.transportFeeDetails.map((element) => {
      return { ...element, MonthDetails: element.busMonthDetails.filter((subElement) => subElement.completed === true && subElement.pending_amount != "0") }
    });

    let hostelresult = this.hostelFeeDetails.map((element) => {
      return { ...element, MonthDetails: element.monthWiseFee.filter((subElement) => subElement.completed === true && subElement.pendingAmount != "0") }
    });


    termresult = termresult.filter(function (val) { return val.FeesDetails.length != 0; });
    othersresult = othersresult.filter(function (val) { return val.MonthDetails.length != 0; });
    transportresult = transportresult.filter(function (val) { return val.MonthDetails.length != 0; });
    hostelresult = hostelresult.filter(function (val) { return val.MonthDetails.length != 0; });

    this.selectedFees.term = termresult;
    this.selectedFees.others = othersresult;
    this.selectedFees.carryover = carryoverresult;
    this.selectedFees.transport = transportresult;
    this.selectedFees.hostel = hostelresult;

    // termresult = this.termFeeDetails.map((element) => {
    //   return { ...element, FeesDetails: element.FeesDetails.filter((subElement) => subElement.completed === true) }
    // });
    // console.log("submitresult", this.selectedFees)


    if (this.selectedFees.term.length === 0 && this.selectedFees.others.length === 0 && this.selectedFees.carryover.length === 0 && this.selectedFees.transport.length === 0 && this.selectedFees.hostel.length === 0) {
      // console.log("Select any fee to proceed")
      this.toastr.error('Select any fee to proceed');
      this.is_loading = 0;
      return;
    }
    else {
      this.callLateFeeCalculation(this.selectedFees)
    }

  }
  schoolId: any = '';
  private subscriptions: Array<Subscription> = [];
  constructor(
    public route: ActivatedRoute,
    public onlineFeePaymentSandbox: OnlineFeePaymentSandbox,
    public modalService: NgbModal,
    private toastr: ToastrService,
  ) {
    this.route.parent.params.subscribe(param => {
      if ((param.id && +param.id > 0) && (param.schid && +param.schid > 0)) {
        this.studentId = param.id;
        this.schoolId = param.schid;
        this.onlineFeePaymentSandbox.studentFeeDetails({
          ChildID: +this.studentId,
          SchoolID: +this.schoolId
        });
      }
    });
  }

  isShowTermFee = [];
  showMoreTermFee(index) {
    if (this.isShowTermFee[index]) {
      this.isShowTermFee[index] = !this.isShowTermFee[index];
    } else {
      this.isShowTermFee[index] = true;
    }
  }


}