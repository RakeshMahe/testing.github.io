import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { CouponMainComponent } from './components/coupon-main.component';


export const routes = [
  {
    path: '',
    component: CouponMainComponent,
    data: {
      title: 'Coupon',
      urls: [{ title: 'Home' }, { title: 'coupon' }]
    }
  },
  {
    path: 'coupon',
    component: CouponMainComponent,
    data: {
      title: 'coupon',
      urls: [{ title: 'Home' }, { title: 'coupon' }]
    }
  },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // ReactiveFormsModule,
    SharedModule,
    // FormsModule,
    EffectsModule.forFeature([]),
  ],
  declarations: [
    CouponMainComponent,
  ],
  providers: [],
  entryComponents: [],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class CouponMainModule { }
