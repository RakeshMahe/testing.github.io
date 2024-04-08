import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as store from './../reducers/app.state';
import * as studentManagementActions from './../student-form/actions/student-form.action';
import { Subscription } from 'rxjs/index';
import {
    editStudent,
    studentList,
    LeaveRequestList,
    getLeaveRequestListCount,
    standardList,
    sectionList,
    sectionSiblingList,
    mediumList,
    religionList,
    communityList,
    bloodGroupList,
    feesPaymentType,
    getStudentCount,
    getStudentDetails,
    studentListLoading,
    deleteStudent,
    uploadedDocument,
    uploadDocumentLoaded,
    uploadDocumentLoading,
    deletedStudentList,
    revertStudent,
    studentAdded,
    getSiblingDetails,
    routeMasterList,
    stopingPointList,
    exportStudent,
    exportStudentLoading,
    routeFeeList,
    routeFeeListLoading,
    getMonthList,
    AcademicList,
    AcademicListLoading,
    promoteStudent,
    promoteStudentLoading,
    selectedPromoteStudent,
    createPromoteStudent,
    createPromoteStudentLoading,
    studentMessageDetails,
    studentMessageDetailsLoading,
    studentMessageFile,
    studentMessageFileLoading,
    importInvalidStudent,
    importInvalidStudentLoading,
    tempStandardList, deletedStudentListLoading, studentVoiceReport, studentVoiceReportLoading,
    subjectList,
    subjectListLoading,
    GetExamNames,
    GetStdSecProgress,
    StudentListProgress,
    examResultAnalysis,
    progressCard,
    progressCardLoading,
    subjectSameForAllSection,

    regionListLoading,
    cityListLoading,
    cityList,
    countryList,
    regionList,
    studyCertificate,
    studyCertificateLoading,
    absenteesList,
    absenteesListLoading,
    absenteesListParticularClass,
    absenteesListParticularClassLoading,

    addStudentLoading,
    editStudentLoading,
    deleteStudentLoading,
    revertStudentLoading,
    prestudentAdded,
    preaddStudentLoading

} from './../student-form/reducers/student-form.selector';

@Injectable()
export class StudentManagementSandbox {
    public prestudentAdded$ = this.appState.select(prestudentAdded);
    public preaddStudentLoading$ = this.appState.select(preaddStudentLoading);

    public absenteeslist$ = this.appState.select(absenteesList);
    public absenteeslistLoading$ = this.appState.select(absenteesListLoading);
    public absenteeslistparticularclass$ = this.appState.select(absenteesListParticularClass);
    public absenteeslistparticularclassLoading$ = this.appState.select(absenteesListParticularClassLoading);

    public studentList$ = this.appState.select(studentList);
    public getLeaveRequestListCount$ = this.appState.select(getLeaveRequestListCount);
    public LeaveRequestList$ = this.appState.select(LeaveRequestList);
    public standardList$ = this.appState.select(standardList);
    public sectionList$ = this.appState.select(sectionList);
    public sectionSiblingList$ = this.appState.select(sectionSiblingList);
    public mediumList$ = this.appState.select(mediumList);
    public religionList$ = this.appState.select(religionList);
    public communityList$ = this.appState.select(communityList);
    public bloodGroupList$ = this.appState.select(bloodGroupList);
    public feesPaymentType$ = this.appState.select(feesPaymentType);
    public getStudentCount$ = this.appState.select(getStudentCount);
    public getStudentDetails$ = this.appState.select(getStudentDetails);
    public studentListLoading$ = this.appState.select(studentListLoading);
    public deleteStudent$ = this.appState.select(deleteStudent);
    public uploadedDocument$ = this.appState.select(uploadedDocument);
    public uploadDocumentLoaded$ = this.appState.select(uploadDocumentLoaded);
    public uploadDocumentLoading$ = this.appState.select(uploadDocumentLoading);
    public deletedStudentList$ = this.appState.select(deletedStudentList);
    public deletedStudentListLoading$ = this.appState.select(deletedStudentListLoading);
    public revertStudent$ = this.appState.select(revertStudent);
    public revertStudentLoading$ = this.appState.select(revertStudentLoading);
    public studentAdded$ = this.appState.select(studentAdded);
    public getSiblingDetails$ = this.appState.select(getSiblingDetails);
    public routeMasterList$ = this.appState.select(routeMasterList);
    public stopingPointList$ = this.appState.select(stopingPointList);
    public exportStudent$ = this.appState.select(exportStudent);
    public exportStudentLoading$ = this.appState.select(exportStudentLoading);

    public routeFeeList$ = this.appState.select(routeFeeList);
    public routeFeeListLoading$ = this.appState.select(routeFeeListLoading);
    public monthList$ = this.appState.select(getMonthList);

    public AcademicList$ = this.appState.select(AcademicList);
    public AcademicListLoading$ = this.appState.select(AcademicListLoading);
    public promoteStudent$ = this.appState.select(promoteStudent);
    public promoteStudentLoading$ = this.appState.select(promoteStudentLoading);
    public selectedPromoteStudent$ = this.appState.select(selectedPromoteStudent);

    public createPromoteStudent$ = this.appState.select(createPromoteStudent);
    public createPromoteStudentLoading$ = this.appState.select(createPromoteStudentLoading);

    public studentMessageDetails$ = this.appState.select(studentMessageDetails);
    public studentMessageDetailsLoading$ = this.appState.select(studentMessageDetailsLoading);

    public studentMessageFile$ = this.appState.select(studentMessageFile);
    public studentMessageFileLoading$ = this.appState.select(studentMessageFileLoading);

    public importInvalidStudent$ = this.appState.select(importInvalidStudent);
    public importInvalidStudentLoading$ = this.appState.select(importInvalidStudentLoading);
    public tempStandardList$ = this.appState.select(tempStandardList);

    public studentVoiceReport$ = this.appState.select(studentVoiceReport);
    public studentVoiceReportLoading$ = this.appState.select(studentVoiceReportLoading);
    public subjectListLoading$ = this.appState.select(subjectListLoading);
    public subjectList$ = this.appState.select(subjectList);
    public GetExamNames$ = this.appState.select(GetExamNames);
    public GetStdSecProgress$ = this.appState.select(GetStdSecProgress);
    public StudentListProgress$ = this.appState.select(StudentListProgress);
    public examResultAnalysis$ = this.appState.select(examResultAnalysis);
    public progressCard$ = this.appState.select(progressCard);
    public progressCardLoading$ = this.appState.select(progressCardLoading);
    public subjectSameForAllSection$ = this.appState.select(subjectSameForAllSection);

    public countryList$ = this.appState.select(countryList);
    public regionList$ = this.appState.select(regionList);
    public regionListLoading$ = this.appState.select(regionListLoading);
    public cityList$ = this.appState.select(cityList);
    public cityListLoading$ = this.appState.select(cityListLoading);
    //studyCertificate
    public studyCertificate$ = this.appState.select(studyCertificate);
    public studyCertificateLoading$ = this.appState.select(studyCertificateLoading);
    public addStudentLoading$ = this.appState.select(addStudentLoading);

    public editStudentLoading$ = this.appState.select(editStudentLoading);
    public editStudent$ = this.appState.select(editStudent);

    public deleteStudentLoading$ = this.appState.select(deleteStudentLoading);
    constructor(protected appState: Store<store.AppState>) {
        this.stopingPointList$.subscribe(data => {
            console.log('stoppingPoint', data);
        });
    }


    

    public addStudent(params) {
        this.appState.dispatch(new studentManagementActions.AddStudentAction(params));
    }
    public editStudent(params) {
        this.appState.dispatch(new studentManagementActions.EditStudentAction(params));
    }
    public PreStudentFormSubmission(params) {
        this.appState.dispatch(new studentManagementActions.PreStudentFormAction(params));
    }



    public standardList() {
        this.appState.dispatch(new studentManagementActions.StandardListAction());
    }
    public sectionList(params) {
        this.appState.dispatch(new studentManagementActions.SectionListAction(params));
    }
    public sectionSiblingList(params) {
        this.appState.dispatch(new studentManagementActions.SectionListSiblingAction(params));
    }
    public mediumOfStudent() {
        this.appState.dispatch(new studentManagementActions.MediumOfStudentAction());
    }
    public religionList() {
        this.appState.dispatch(new studentManagementActions.ReligionListAction());
    }
    public communityList() {
        this.appState.dispatch(new studentManagementActions.CommunityListAction());
    }
    public bloodGroupList() {
        this.appState.dispatch(new studentManagementActions.BloodGroupListAction());
    }
    public feesPaymentType() {
        this.appState.dispatch(new studentManagementActions.FeesPaymentTypeAction());
    }
    public emptySectionList() {
        this.appState.dispatch(new studentManagementActions.EmptySectionListAction());
    }
    public getStudentDetails(params) {
        this.appState.dispatch(new studentManagementActions.GetStudentDetailsAction(params));
    }
    public getCount(params) {
        this.appState.dispatch(new studentManagementActions.GetStudentCountAction(params));
    }

    public uploadDocument(params) {
        this.appState.dispatch(new studentManagementActions.UploadDocumentAction(params));
    }
    public removeDocument(params) {
        this.appState.dispatch(new studentManagementActions.RemoveDocument(params));
    }

    public getSiblingDetails(params) {
        this.appState.dispatch(new studentManagementActions.GetSiblingDetail(params));
    }
    public resetStudentValues() {
        this.appState.dispatch(new studentManagementActions.ResetStudentValues());
    }
    public masterRouteList(params) {
        this.appState.dispatch(new studentManagementActions.RouteMasterList(params));
    }
    public stopingPointList(params) {
        this.appState.dispatch(new studentManagementActions.StopingPointList(params));
    }

    public getRouteFeeList(params) {
        this.appState.dispatch(new studentManagementActions.RouteMasterFeeList(params));
    }
    public getMonthList(params) {
        this.appState.dispatch(new studentManagementActions.MonthListAction(params));
    }

    public academicList(params) {
        this.appState.dispatch(new studentManagementActions.AcademicAction(params));
    }

    

    public clearSection() {
        this.appState.dispatch(new studentManagementActions.ClearSection());
    }
    public resetDocument() {
        this.appState.dispatch(new studentManagementActions.ResetDocument());
    }
    public emptyStudentStudentList() {
        this.appState.dispatch(new studentManagementActions.clearStudentList());
    }





    public subjectList(params) {
        this.appState.dispatch(new studentManagementActions.SubjectListAction(params));
    }

    public countryList() {
        this.appState.dispatch(new studentManagementActions.CountryListAction());
    }

    // calling region list
    public getRegionList(params) {
        this.appState.dispatch(new studentManagementActions.RegionListAction(params));
    }
    // calling city API
    public getCityList(params) {
        this.appState.dispatch(new studentManagementActions.CityListAction(params));
    }
}
