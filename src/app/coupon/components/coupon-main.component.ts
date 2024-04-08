import { Component, OnInit } from "@angular/core";


@Component({
  selector: "app-coupon-main",
  templateUrl: "./coupon-main.component.html",
  styleUrls: ["./coupon-main.component.scss"],
})
export class CouponMainComponent implements OnInit {

  scrollData: any = [
    { name: "All" },
    { name: "Active" },
    { name: "Expired" },
    { name: "Redeemed" },
    { name: "Food" },
    { name: "Gadgets" },
    { name: "Mobile" },
    { name: "Fashion" },
    { name: "Tv & Appliances" },
    { name: "Beauty & Grooming" }
  ]

  viewData: any = [
    {
      brand: "Swiggy",
      logo: "https://logowik.com/content/uploads/images/swiggy2340.jpg",
      content: "Flat Rs 200 OFF On Best Wearble & Audible Devices"
    },
    {
      brand: "Zomato",
      logo: "https://1000logos.net/wp-content/uploads/2021/06/Zomato-logo-500x281.png",
      content: "Flat Rs 200 OFF On Best Wearble & Audible Devices"
    },
    {
      brand: "Boat",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Boat_Logo.webp/800px-Boat_Logo.webp.png",
      content: "Flat Rs 200 OFF On Best Wearble & Audible Devices"
    },
    {
      brand: "Noise",
      logo: "https://logowik.com/content/uploads/images/noise2238.jpg",
      content: "Flat Rs 200 OFF On Best Wearble & Audible Devices"
    },
  ]


  constructor(

  ) { }

  ngOnInit() {
    console.log('viewData', this.viewData);
  }

  addCoupon() {
    console.log('Rakesh');
    alert('Hii This Is Rakesh')
  }

  horizontalScroll(event) {
    const delta = Math.sign(event.deltaY);
    event.currentTarget.scrollLeft =
      event.currentTarget.scrollLeft + delta * 200;
    console.log(event.currentTarget.scrollLeft);
  }
  onWheel(event: WheelEvent): void {
    const scrollableElement = event.currentTarget as HTMLElement;
    scrollableElement.scrollLeft += event.deltaY * 2.5;
  }

}