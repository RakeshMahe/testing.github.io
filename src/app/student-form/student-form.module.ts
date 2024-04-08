import { AppModule } from './../app.module';
import { NgModule } from '@angular/core';
import { StudentFormComponent } from './student-form.component';
import { EffectsModule } from '@ngrx/effects';
import { StudentManagementSandbox } from './student-form.sandbox';
import { StudentFormService } from './student-form.service';
import { StudentManagementEffect } from './effects/student-form.effect';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NumberAcceptModule } from 'src/app/shared/validation-directives/onlyNumber.module';

export const routes = [
    {
        path: '',
        component: StudentFormComponent,
        pathMatch: 'full',
        data: {
            title: 'student-form',
        }
    },
];

@NgModule({
    imports: [CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        SharedModule,
        ReactiveFormsModule,
        NumberAcceptModule,
        EffectsModule.forFeature([StudentManagementEffect])],
    declarations: [
        StudentFormComponent,
    ],
    providers: [StudentManagementSandbox,
        StudentFormService]

})
export class StudentFormModule {
}
