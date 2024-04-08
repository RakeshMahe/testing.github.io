import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as actions from '../../student-form/actions/student-form.action';
import { Store } from '@ngrx/store';

import { StudentFormService } from '../../student-form/student-form.service';
import * as store from '../../reducers/app.state';
import { saveAs } from 'file-saver';


@Injectable()
export class StudentManagementEffect {
  studentdata: any;
  constructor(
    private action$: Actions,
    protected api: StudentFormService,
    public router: Router,
    protected StudentFormState: Store<store.AppState>
  ) { }




  // add student
  @Effect()
  editStudent$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.EDIT_STUDENT),
    map((action: actions.EditStudentAction) => action.payload),
    switchMap(state => {
      return this.api.editStudent(state).pipe(
        tap((success: any) => {
          if (success && success.status === 1) {
            if (success.redirect === 0) {
              this.router.navigate(['student-management/student-list']);
            } else {
              this.router.navigate(['student-management/invalid-student']);
            }
          }
        }),
        map(user => new actions.EditStudentSuccess(user)),
        catchError(error => of(new actions.EditStudentFail(error.error)))
      );
    })
  );






  // students standard (class they are studying) list
  @Effect()
  standardList$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.STANDARD_LIST),
    map((action: actions.StandardListAction) => action.payload),
    switchMap(state => {
      return this.api.standardList().pipe(
        map(user => new actions.StandardListSuccess(user)),
        catchError(error => of(new actions.StandardListFail(error.error)))
      );
    })
  );

  // students sections list
  @Effect()
  sectionList$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.SECTION_LIST),
    map((action: actions.SectionListAction) => action.payload),
    switchMap(state => {
      return this.api.sectionList(state).pipe(
        map(user => new actions.SectionListSuccess(user)),
        catchError(error => of(new actions.SectionListFail(error.error)))
      );
    })
  );

  // students sections list
  @Effect()
  sectionSiblingList$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.SECTION_LIST_SIBLING),
    map((action: actions.SectionListSiblingAction) => action.payload),
    switchMap(state => {
      return this.api.sectionList(state).pipe(
        map(user => new actions.SectionListSiblingSuccess(user)),
        catchError(error => of(new actions.SectionListSiblingFail(error.error)))
      );
    })
  );

  // medium of student(In which language they are studying e.g tamil, english..)
  @Effect()
  mediumOfStudent: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.MEDIUM_OF_STUDENT),
    map((action: actions.MediumOfStudentAction) => action.payload),
    switchMap(state => {
      return this.api.mediumOfStudent().pipe(
        map(user => new actions.MediumOfStudentSuccess(user)),
        catchError(error => of(new actions.MediumOfStudentFail(error.error)))
      );
    })
  );

  // get religion list
  @Effect()
  religionList: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.GET_RELIGION_LIST),
    map((action: actions.ReligionListAction) => action.payload),
    switchMap(state => {
      return this.api.religionList().pipe(
        map(user => new actions.ReligionListSuccess(user)),
        catchError(error => of(new actions.ReligionListFail(error.error)))
      );
    })
  );

  // get community list
  @Effect()
  communityList: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.GET_COMMUNITY_LIST),
    map((action: actions.CommunityListAction) => action.payload),
    switchMap(state => {
      return this.api.communityList().pipe(
        map(user => new actions.CommunityListSuccess(user)),
        catchError(error => of(new actions.CommunityListFail(error.error)))
      );
    })
  );

  // get blood group list
  @Effect()
  bloodGroupList: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.BLOOD_GROUP_LIST),
    map((action: actions.BloodGroupListAction) => action.payload),
    switchMap(state => {
      return this.api.bloodGroupList().pipe(
        map(user => new actions.BloodGroupListSuccess(user)),
        catchError(error => of(new actions.BloodGroupListFail(error.error)))
      );
    })
  );

  // get fees payment type
  @Effect()
  paymentType: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.FEES_PAYMENT_TYPE),
    map((action: actions.FeesPaymentTypeAction) => action.payload),
    switchMap(state => {
      return this.api.feesPaymentType().pipe(
        map(user => new actions.FeesPaymentTypeSuccess(user)),
        catchError(error => of(new actions.FeesPaymentTypeFail(error.error)))
      );
    })
  );

  // get student details
  @Effect()
  getStudentDetails: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.GET_STUDENT_DETAILS),
    map((action: actions.GetStudentDetailsAction) => action.payload),
    switchMap(state => {
      tap(val => {
        if (val['data'] && val['data'].classId) {
          this.StudentFormState.dispatch(
            new actions.GetStudentDetailsAction({
              standardId: val['data'].classId
            })
          );
        }
      });
      return this.api.getStudentDetails(state).pipe(
        map(user => new actions.GetStudentDetailsSuccess(user)),
        catchError(error => of(new actions.GetStudentDetailsFail(error.error)))
      );
    })
  );

  // get sibling details
  @Effect()
  getSiblingDetails: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.GET_SIBLING_DETAIL),
    map((action: actions.GetSiblingDetail) => action.payload),
    switchMap(state => {
      return this.api.getStudentDetails(state).pipe(
        map(user => new actions.GetSiblingDetailSuccess(user)),
        catchError(error => of(new actions.GetSiblingDetailFail(error.error)))
      );
    })
  );

  // get student count
  @Effect()
  getStudentCount: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.GET_STUDENT_COUNT),
    map((action: actions.GetStudentCountAction) => action.payload),
    switchMap(state => {
      return this.api.getStudentCount(state).pipe(
        map(user => new actions.GetStudentCountSuccess(user)),
        catchError(error => of(new actions.GetStudentCountFail(error.error)))
      );
    })
  );



  // upload documents
  @Effect()
  uploadDocument: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.UPLOAD_DOCUMENT),
    map((action: actions.UploadDocumentAction) => action.payload),
    switchMap(state => {
      return this.api.uploadDocument(state).pipe(
        map(user => new actions.UploadDocumentSuccess(user)),
        catchError(error => of(new actions.UploadDocumentFail(error.error)))
      );
    })
  );





  // get route master list
  @Effect()
  routeMasterList: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.GET_ROUTE_MASTER_LIST),
    map((action: actions.RouteMasterList) => action.payload),
    switchMap(state => {
      return this.api.routeList(state).pipe(
        map(user => new actions.RouteMasterListSuccess(user)),
        catchError(error => of(new actions.RouteMasterListFail(error.error)))
      );
    })
  );

  // get route master list
  @Effect()
  stopingPointList: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.STOPING_POINT_LIST),
    map((action: actions.StopingPointList) => action.payload),
    switchMap(state => {
      return this.api.stopingPointList(state).pipe(
        map(user => new actions.StopingPointListSuccess(user)),
        catchError(error => of(new actions.StopingPointListFail(error.error)))
      );
    })
  );


  /**
   *  route master fee list effect
   */
  @Effect()
  routeFeeList$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.GET_ROUTE_FEE_LIST),
    map((action: actions.RouteMasterFeeList) => action.payload),
    switchMap(state => {
      return this.api.routeMasterFeeList(state).pipe(
        map(admission => new actions.RouteMasterFeeListSuccess(admission)),
        catchError(error => of(new actions.RouteMasterFeeListFail(error.error)))
      );
    })
  );
  @Effect()
  monthList$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.GET_MONTH_LIST),
    map((action: actions.MonthListAction) => action.payload),
    switchMap(state => {
      return this.api.monthList(state).pipe(
        tap(data => {
          console.log('studenteffect', data);

        }),
        map(user => new actions.MonthListActionSuccess(user)),
        catchError(error => of(new actions.MonthListActionFail(error.error)))
      );
    })
  );


  @Effect()
  academicList$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.ACADEMIC_YEAR_LIST),
    map((action: actions.AcademicAction) => action.payload),
    switchMap(state => {
      return this.api.academicyear(state).pipe(
        map(user => new actions.AcademicSuccess(user)),
        catchError(error => of(new actions.AcademicFail(error.error)))
      );
    })
  );



  @Effect()
  subjectList$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.SUBJECT_LIST),
    map((action: actions.SubjectListAction) => action.payload),
    switchMap(state => {
      return this.api.subjectList(state).pipe(
        map(user => new actions.SubjectListActionSuccess(user)),
        catchError(error => of(new actions.SubjectListActionFail(error.error)))
      );
    })
  );

  @Effect()
  prestudentAdded$: Observable<Action> = this.action$.pipe(
    ofType(actions.ActionTypes.PRE_STUDENT_FORM),
    map((action: actions.PreStudentFormAction) => action.payload),
    switchMap(state => {
      return this.api.preStudentFormSubmission(state).pipe(
        map(user => new actions.PreStudentFormSuccess(user)),
        catchError(error => of(new actions.PreStudentFormFail(error.error)))
      );
    })
  );

  // country list
  @Effect()
  countryList$: Observable<Action> = this.action$
    .pipe(
      ofType(actions.ActionTypes.COUNTRY_LIST),

      map((action: actions.CountryListAction) => action),
      switchMap((state) => {
        return this.api.countryListApi()
          .pipe(
            switchMap((user) => [
              new actions.CountryListSuccess(user),
            ]),
            catchError(error => of(new actions.CountryListFail(error)))
          );
      })
    );
  // region List
  @Effect()
  regionList$: Observable<Action> = this.action$
    .pipe(
      ofType(actions.ActionTypes.REGION_LIST),

      map((action: actions.RegionListAction) => action.payload),
      switchMap((state) => {
        return this.api.regionListApi(state)
          .pipe(
            switchMap((user) => [
              new actions.RegionListSuccess(user),
            ]),
            catchError(error => of(new actions.RegionListFail(error)))
          );
      })
    );
  // city list
  @Effect()
  cityList$: Observable<Action> = this.action$
    .pipe(
      ofType(actions.ActionTypes.CITY_LIST),

      map((action: actions.CityListAction) => action.payload),
      switchMap((state) => {
        return this.api.cityListApi(state)
          .pipe(
            switchMap((user) => [
              new actions.CityListSuccess(user),
            ]),
            catchError(error => of(new actions.CityListFail(error)))
          );
      })
    );

  public convertBase64PDFToBlobData(base64Data: string,
    contentType: string = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', sliceSize = 512) {
    const byteCharacters = atob(base64Data.replace(/^data:([A-Za-z-+\/]+);base64,/, ''));
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }
  public convertBase64PDFToBlobData1(base64Data: string, contentType: string = 'text/html', sliceSize = 512) {
    const byteCharacters = atob(base64Data.replace(/^data:([A-Za-z-+\/]+);base64,/, ''));
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }
  printPdfFile(base64content: any) {
    const blobData = this.convertBase64PDFToBlobData(base64content);
    const blob = new Blob([blobData], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    const instituteDetails = localStorage.getItem('instituteDetails') ? JSON.parse(localStorage.getItem('instituteDetails')) : false;
    let fileName = 'invalidStudent.xlsx';
    if (instituteDetails) {
      // fileName =  instituteDetails.institudeCode + '_invalidStudent.xlsx';
      fileName = '#' + instituteDetails.instituteIntId + '_invalidStudent.xlsx';
    }
    // const fileName = 'invalidStudent.xlsx';
    document.body.appendChild(a);
    a.setAttribute('style', 'display: none');
    a.setAttribute('target', '_blank  ');
    a.href = url;
    // a.setAttribute('download', url);
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
    a.remove();
  }
  // id card generate
  printIdCard(base64content: any) {
    const blobData = this.convertBase64PDFToBlobData1(base64content);
    const blob = new Blob([blobData], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.setAttribute('style', 'display: none');
    a.setAttribute('target', '_blank  ');
    a.href = url;
    a.click();
    URL.revokeObjectURL(url);
    a.remove();
  }
}
