import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SWIPER_CONFIG, SwiperConfigInterface, SwiperModule } from 'ngx-swiper-wrapper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPrintModule } from 'ngx-print';
import { MatExpansionModule, MatIconModule, MatCardModule, MatCheckboxModule, MatButtonModule } from '@angular/material';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './reducers/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    HashLocationStrategy,
    LocationStrategy
} from '@angular/common';
import { DynamicScriptLoaderService } from './providers/services/Dynamic.Script.Loader.service';
import { SharedModule } from './shared/shared.module';
import { NumberAcceptModule } from './shared/validation-directives/onlyNumber.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};

@NgModule({
    declarations: [
        AppComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        SwiperModule,
        SharedModule,
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([]),
        ToastrModule.forRoot({
            timeOut: 5000,
            easing: 'ease-in',
            positionClass: 'toast-top-right',
            preventDuplicates: true,
            closeButton: true,
        }),
        NgxPrintModule,
        NumberAcceptModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatIconModule,
        MatButtonModule,
        NgbModule,

    ],
    providers: [
        {
            provide: SWIPER_CONFIG,
            useValue: DEFAULT_SWIPER_CONFIG
        },
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        DynamicScriptLoaderService,
    ],
    bootstrap: [AppComponent],
    entryComponents: [
    ]
})
export class AppModule {
}
