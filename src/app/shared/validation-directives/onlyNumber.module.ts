import {NgModule} from '@angular/core';
import {OnlyNumberDirective} from './only-number.directive';
import {NumericDecimalDirective} from './only-number-decimal.directive';
import {RangeDirective} from './range.directive';
import {TitleCaseDirective} from './auto-capital.directive';
import {NotAllowDotDirective} from './not-allow-dot-directive';
import {AlphanumbericDirective} from './alphanumberic.directive';

@NgModule({

    declarations: [OnlyNumberDirective, NumericDecimalDirective, RangeDirective, TitleCaseDirective, NotAllowDotDirective, AlphanumbericDirective],
    exports: [OnlyNumberDirective, NumericDecimalDirective, RangeDirective, TitleCaseDirective, NotAllowDotDirective, AlphanumbericDirective]

})

export class NumberAcceptModule {
}
