import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { OnlineFeePaymentComponent } from "./online-fee-payment.component";

describe("OnlineFeePaymentComponent", () => {
  let component: OnlineFeePaymentComponent;
  let fixture: ComponentFixture<OnlineFeePaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OnlineFeePaymentComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineFeePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
