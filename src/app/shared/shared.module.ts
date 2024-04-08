import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'ngx-swiper-wrapper';

// components
import { LoaderComponent } from './components/loader/loader.component';
import { PageLoaderComponent } from './components/page-loader/page-loader.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import {
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
  MAT_DATE_LOCALE,
  MatTooltipModule,
  MatExpansionModule
} from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EffectsModule } from '@ngrx/effects';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SideScroll } from './utility/sidebar.directive';


import { NgSelectModule } from '@ng-select/ng-select';
import { NumberAcceptModule } from './validation-directives/onlyNumber.module';

// import { JwPaginationComponent } from 'jw-angular-pagination';



@NgModule({

  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    SelectDropDownModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule,
    MatTooltipModule,
    NgSelectModule,
    NumberAcceptModule,
    MatExpansionModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    SwiperModule,
    SelectDropDownModule,
    LoaderComponent,
    PageLoaderComponent,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule,
    SideScroll,
    MatTooltipModule,
    NgSelectModule,
    MatExpansionModule
    // JwPaginationComponent
  ],
  declarations: [
    LoaderComponent,
    PageLoaderComponent,
    SideScroll,
    // JwPaginationComponent,
  ],
  entryComponents: [

  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
})
export class SharedModule { }
