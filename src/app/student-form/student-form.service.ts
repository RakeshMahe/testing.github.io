import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Api } from './../providers/api/api';
import { HttpParams } from '@angular/common/http';


@Injectable()

export class StudentFormService extends Api {

    private URL: string = this.getBaseUrl();


    editStudent(params): Observable<any> {
        console.log('addstudent', params);
        const editId = params.id;
        delete params.id;
        return this.http.put<any>(this.URL + '/studentform/update-student/' + editId, params);
    }

    standardList(): Observable<any> {
        debugger;
        return this.http.get<any>(this.URL + '/institute-class/standard-list');
    }
    sectionList(params): Observable<any> {
        return this.http.get<any>(this.URL + '/institute-section/section-list', { params: params });
    }
    mediumOfStudent(): Observable<any> {
        return this.http.get<any>(this.URL + '/master/medium-list');
    }
    religionList(): Observable<any> {
        return this.http.get<any>(this.URL + '/master/religion-list');
    }
    communityList(): Observable<any> {
        return this.http.get<any>(this.URL + '/master/community-list');
    }
    bloodGroupList(): Observable<any> {
        return this.http.get<any>(this.URL + '/master/blood_group-list');
    }
    feesPaymentType(): Observable<any> {
        return this.http.get<any>(this.URL + '/master/payment-type-list');
    }
    getStudentDetails(params): Observable<any> {
        return this.http.get<any>(this.URL + '/studentform/get-student/' + params);
    }
    getStudentCount(params): Observable<any> {
        return this.http.get<any>(this.URL + '/student/student-list', { params: params });
    }

    uploadDocument(params): Observable<any> {
        const formData: FormData = new FormData();
        formData.append('studentDocument', params.studentDocument, params.studentDocument.name);
        return this.http.post<any>(this.URL + '/studentform/uploads-student-document', formData);
    }

    routeList(params): Observable<any> {
        console.log('params', params);
        return this.http.get<any>(this.URL + '/route-master/list-route-master', { params: params });
    }
    stopingPointList(params): Observable<any> {
        console.log('params', params);
        return this.http.get<any>(this.URL + '/route-master/details/' + params.routeId);
    }

    routeMasterFeeList(params): Observable<any> {
        return this.http.get<any>(this.URL + '/route-fees/route-fee-type-list', { params: params });
    }
    monthList(params): Observable<any> {
        return this.http.get<any>(this.URL + '/route-fees/institute-transport-months-list');
    }
    promoteStudent(params): Observable<any> {
        return this.http.get<any>(this.URL + '/student/student-list', { params });
    }
    academicyear(params): Observable<any> {
        return this.http.post<any>(this.URL + '/academic-year/list', params);
    }

    subjectList(params): Observable<any> {
        return this.http.get<any>(this.URL + '/exam/subject-list?sectionId=' + params.sectionId);
    }



    // calling country List APi
    public countryListApi(): Observable<any> {
        return this.http.get(this.URL + '/location/country-list');
    }
    // calling region List Api
    public regionListApi(params): Observable<any> {
        return this.http.get(this.URL + '/location/region-list', { params });
    }
    // Calling city List Api
    public cityListApi(params): Observable<any> {
        return this.http.get(this.URL + '/location/city-list', { params });
    }

    public preStudentFormSubmission(params): Observable<any> {
        return this.http.post<any>(this.URL + '/studentform/pre-submission', params);
    }

}
