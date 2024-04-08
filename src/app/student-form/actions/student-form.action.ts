import { Action } from '@ngrx/store';
import { type } from './../../shared/utility';

export const ActionTypes = {
    ADD_STUDENT: type('[students] add student'),
    ADD_STUDENT_SUCCESS: type('[students] add student Success'),
    ADD_STUDENT_FAIL: type('[students] add student Fail'),

    PRE_STUDENT_FORM: type('[students] pre add student'),
    PRE_STUDENT_FORM_SUCCESS: type('[students] pre add student Success'),
    PRE_STUDENT_FORM_FAIL: type('[students] pre add student Fail'),

    EDIT_STUDENT: type('[students] edit student'),
    EDIT_STUDENT_SUCCESS: type('[students] edit student Success'),
    EDIT_STUDENT_FAIL: type('[students] edit student Fail'),

    STUDENT_LIST: type('[students] student list'),
    STUDENT_LIST_SUCCESS: type('[students] student list Success'),
    STUDENT_LIST_FAIL: type('[students] student list Fail'),
    RESET_STUDENT_VALUES: type('[students] reset student values'),

    LEAVEREQUEST_LIST: type('[students] leaverequest list'),
    LEAVEREQUEST_LIST_SUCCESS: type('[students] leaverequest list Success'),
    LEAVEREQUEST_LIST_FAIL: type('[students] leaverequest list Fail'),
    RESET_LEAVEREQUEST_VALUES: type('[students] reset leaverequestlist values'),

    GET_LEAVEREQUESTLIST_COUNT: type('[students] get leaverequestlist count'),
    GET_LEAVEREQUESTLIST_SUCCESS: type('[students] get leaverequestlist count success'),
    GET_LEAVEREQUESTLIST_FAIL: type('[students] get leaverequestlist count Fail'),

    STANDARD_LIST: type('[students] standard list'),
    STANDARD_LIST_SUCCESS: type('[students] standard list Success'),
    STANDARD_LIST_FAIL: type('[students] standard list Fail'),

    SECTION_LIST: type('[students] section list'),
    SECTION_LIST_SUCCESS: type('[students] section list Success'),
    SECTION_LIST_FAIL: type('[students] section list Fail'),

    SECTION_LIST_SIBLING: type('[students] section list temp'),
    SECTION_LIST_SIBLING_SUCCESS: type('[students] section list temp Success'),
    SECTION_LIST_SIBLING_FAIL: type('[students] section list temp Fail'),

    MEDIUM_OF_STUDENT: type('[students] medium of student'),
    MEDIUM_OF_STUDENT_SUCCESS: type('[students] medium of student Success'),
    MEDIUM_OF_STUDENT_FAIL: type('[students] medium of student Fail'),

    GET_RELIGION_LIST: type('[students] get religion list'),
    GET_RELIGION_LIST_SUCCESS: type('[students] get religion list Success'),
    GET_RELIGION_LIST_FAIL: type('[students] get religion list Fail'),

    GET_COMMUNITY_LIST: type('[students] get community list'),
    GET_COMMUNITY_LIST_SUCCESS: type('[students] get community list Success'),
    GET_COMMUNITY_LIST_FAIL: type('[students] get community list Fail'),

    BLOOD_GROUP_LIST: type('[students] blood group list'),
    BLOOD_GROUP_LIST_SUCCESS: type('[students] blood group list Success'),
    BLOOD_GROUP_LIST_FAIL: type('[students] blood group list Fail'),

    FEES_PAYMENT_TYPE: type('[students] fees payment type'),
    FEES_PAYMENT_TYPE_SUCCESS: type('[students] fees payment type Success'),
    FEES_PAYMENT_TYPE_FAIL: type('[students] fees payment type Fail'),

    EMPTY_SECTION_LIST: type('[students] empty section list'),

    GET_STUDENT_DETAILS: type('[students] get student details'),
    GET_STUDENT_DETAILS_SUCCESS: type('[students] get student details success'),
    GET_STUDENT_DETAILS_FAIL: type('[students] get student details Fail'),

    GET_STUDENT_COUNT: type('[students] get student count'),
    GET_STUDENT_COUNT_SUCCESS: type('[students] get student count success'),
    GET_STUDENT_COUNT_FAIL: type('[students] get student count Fail'),

    DELETE_STUDENT: type('[students] delete student'),
    DELETE_STUDENT_SUCCESS: type('[students] delete student success'),
    DELETE_STUDENT_FAIL: type('[students] delete student Fail'),

    UPLOAD_DOCUMENT: type('[students] upload document'),
    UPLOAD_DOCUMENT_SUCCESS: type('[students] upload document success'),
    UPLOAD_DOCUMENT_FAIL: type('[students] upload document Fail'),
    REMOVE_DOCUMENT: type('[students] remove document'),

    DELETED_STUDENT_LIST: type('[students] deleted students list'),
    DELETED_STUDENT_LIST_SUCCESS: type('[students] deleted students list success'),
    DELETED_STUDENT_LIST_FAIL: type('[students] deleted students list Fail'),

    REVERT_STUDENT: type('[students] revert student'),
    REVERT_STUDENT_SUCCESS: type('[students]revert student success'),
    REVERT_STUDENT_FAIL: type('[students] revert student Fail'),

    EMPTY_DELETE_STUDENT: type('[students] empty delete student'),

    GET_SIBLING_DETAIL: type('[sibling] sibling details'),
    GET_SIBLING_DETAIL_SUCCESS: type('[sibling] sibling details success'),
    GET_SIBLING_DETAIL_FAIL: type('[sibling] sibling details fail'),

    GET_ROUTE_MASTER_LIST: type('[students] get route master list'),
    GET_ROUTE_MASTER_LIST_SUCCESS: type('[students] get route master list success'),
    GET_ROUTE_MASTER_LIST_FAIL: type('[students] get route master list Fail'),

    STOPING_POINT_LIST: type('[students] get stoping point list'),
    STOPING_POINT_LIST_SUCCESS: type('[students] get stoping point list success'),
    STOPING_POINT_LIST_FAIL: type('[students] get stoping point list Fail'),

    EXPORT_STUDENT_LIST: type('[students] export student list'),
    EXPORT_STUDENT_LIST_SUCCESS: type('[students] export student list Success'),
    EXPORT_STUDENT_LIST_FAIL: type('[students] export student list Fail'),

    GET_ROUTE_FEE_LIST: type('[routefee] routemaster fee list'),
    GET_ROUTE_FEE_LIST_SUCCESS: type('[routefee] routemaster fee list Success'),
    GET_ROUTE_FEE_LIST_FAIL: type('[routefee] routemaster fee list Fail'),

    GET_MONTH_LIST: type('[month] get month list'),
    GET_MONTH_LIST_SUCCESS: type('[month] get month list Success'),
    GET_MONTH_LIST_FAIL: type('[month]  get month list Fail'),

    PROMOTE_STUDENT_LIST: type('[month] PROMOTE_STUDENT list'),
    PROMOTE_STUDENT_LIST_SUCCESS: type('[month] PROMOTE_STUDENT list Success'),
    PROMOTE_STUDENT_LIST_FAIL: type('[month]  PROMOTE_STUDENT list Fail'),

    ACADEMIC_YEAR_LIST: type('[month] ACADEMIC_YEAR list'),
    ACADEMIC_YEAR_LIST_SUCCESS: type('[month] ACADEMIC_YEAR list Success'),
    ACADEMIC_YEAR_LIST_FAIL: type('[month]  ACADEMIC_YEAR list Fail'),

    SELECT_PROMOTE_STUDENT_LIST: type('[ATTENDANCE]  SELECT_PROMOTE_STUDENT_LIST_FAIL'),
    REMOVE_PROMOTE_STUDENT_LIST: type('[ATTENDANCE]  REMOVE_PROMOTE_STUDENT_LIST_FAIL'),
    SELECT_ALL_STUDENT_LIST: type('[ATTENDANCE]  SELECT_ALL_STUDENT_LIST_FAIL'),
    CLEAR_ALL_STUDENT_LIST: type('[ATTENDANCE]  CLEAR_ALL_STUDENT_LIST_FAIL'),

    CREATE_PROMOTE_STUDENT: type('[month] CREATE_PROMOTE_STUDENT list'),
    CREATE_PROMOTE_STUDENT_SUCCESS: type('[month] CREATE_PROMOTE_STUDENT list Success'),
    CREATE_PROMOTE_STUDENT_FAIL: type('[month]  CREATE_PROMOTE_STUDENT list Fail'),

    SEARCH_PROMOTE_STUDENT: type('[month]  SEARCH_PROMOTE_STUDENT list Fail'),
    CLEAR_STUDENT: type('[month]  CLEAR_STUDENT list Fail'),

    STUDENT_MESSAGE_DETAILS: type('[month] STUDENT_MESSAGE_DETAILS list'),
    STUDENT_MESSAGE_DETAILS_SUCCESS: type('[month] STUDENT_MESSAGE_DETAILS list Success'),
    STUDENT_MESSAGE_DETAILS_FAIL: type('[month]  STUDENT_MESSAGE_DETAILS list Fail'),

    STUDENT_MESSAGE_FILE: type('[month] STUDENT_MESSAGE_FILE list'),
    STUDENT_MESSAGE_FILE_SUCCESS: type('[month] STUDENT_MESSAGE_FILE list Success'),
    STUDENT_MESSAGE_FILE_FAIL: type('[month]  STUDENT_MESSAGE_FILE list Fail'),

    IMPORT_INVALID_STUDENT: type('[month] IMPORT_INVALID_STUDENT list'),
    IMPORT_INVALID_STUDENT_SUCCESS: type('[month] IMPORT_INVALID_STUDENT list Success'),
    IMPORT_INVALID_STUDENT_FAIL: type('[month]  IMPORT_INVALID_STUDENT list Fail'),

    ID_CARD_GENERATE: type('[month] ID_CARD_GENERATE'),
    ID_CARD_GENERATE_SUCCESS: type('[month] ID_CARD_GENERATE Success'),
    ID_CARD_GENERATE_FAIL: type('[month] ID_CARD_GENERATE Fail'),

    CLEAR_ALL_SECTION: type('[month] CLEAR_ALL_SECTION'),
    RESET_DOCUMENT: type('[document] RESET_DOCUMENT'),

    CLEAR_STUDENT_LIST: type('[document] CLEAR_STUDENT_LIST'),

    STUDENT_VOICE_REPORT: type('[month] STUDENT_VOICE_REPORT list'),
    STUDENT_VOICE_REPORT_SUCCESS: type('[month] STUDENT_VOICE_REPORT list Success'),
    STUDENT_VOICE_REPORT_FAIL: type('[month]  STUDENT_VOICE_REPORT list Fail'),

    SUBJECT_LIST: type('[students] subject list'),
    SUBJECT_LIST_SUCCESS: type('[students] subject list Success'),
    SUBJECT_LIST_FAIL: type('[students] subject list Fail'),
    GET_EXAMNAMES: type('[students] get examnames'),
    GET_EXAMNAMES_SUCCESS: type('[students] get examnames Success'),
    GET_EXAMNAMES_FAIL: type('[month]  get examnames Fail'),
    STDSEC_PROGRESS: type('[students] getstdsectionforProgress'),
    STDSEC_PROGRESS_SUCCESS: type('[students] getstdsectionProgress success'),
    STDSEC_PROGRESS_FAIL: type('[students] getstdsectionProgress fail'),
    STUDENT_LIST_PROGRESS: type('[students]  Student list Progress'),
    STUDENT_LIST_PROGRESS_SUCCESS: type('[students] Student list Progress success'),
    STUDENT_LIST_PROGRESS_FAIL: type('[students] Student list Progress fail'),
    EXAM_RESULT_ANALYSIS: type('[students]  Exam result Analysis'),
    EXAM_RESULT_ANALYSIS_SUCCESS: type('[students] Exam result Analysis success'),
    EXAM_RESULT_ANALYSIS_FAIL: type('[students] Exam result Analysis fail'),
    PROGRESS_CARD: type('[students]  Progress Card'),
    PROGRESS_CARD_SUCCESS: type('[students] Progress Card success'),
    PROGRESS_CARD_FAIL: type('[students] Progress Card fail'),

    //STUDY_CERTIFICATE_
    STUDY_CERTIFICATE: type('[students]  Study Certificate'),
    STUDY_CERTIFICATE_SUCCESS: type('[students] Study Certificate success'),
    STUDY_CERTIFICATE_FAIL: type('[students] Study Certificate fail'),

    // getting region list
    REGION_LIST: type('[students] REGION_LIST'),
    REGION_LIST_SUCCESS: type('[students] REGION_LIST SUCCESS'),
    REGION_LIST_FAIL: type('[students] REGION_LIST FAIL'),

    // getting country list
    COUNTRY_LIST: type('[students] COUNTRY_LIST'),
    COUNTRY_LIST_SUCCESS: type('[students] COUNTRY_LIST SUCCESS'),
    COUNTRY_LIST_FAIL: type('[students] COUNTRY_LIST FAIL'),

    // getting city List
    CITY_LIST: type('[students] CITY_LIST'),
    CITY_LIST_SUCCESS: type('[students] CITY_LIST SUCCESS'),
    CITY_LIST_FAIL: type('[students] CITY_LIST FAIL'),



};


// add student
export class AddStudentAction implements Action {
    type = ActionTypes.ADD_STUDENT;
    constructor(public payload: any) {
    }
}
export class AddStudentSuccess implements Action {
    type = ActionTypes.ADD_STUDENT_SUCCESS;
    constructor(public payload: any) {
    }
}
export class AddStudentFail implements Action {
    type = ActionTypes.ADD_STUDENT_FAIL;
    constructor(public payload: any) {
    }
}


// pre student form submission
export class PreStudentFormAction implements Action {
    type = ActionTypes.PRE_STUDENT_FORM;
    constructor(public payload: any) {
    }
}
export class PreStudentFormSuccess implements Action {
    type = ActionTypes.PRE_STUDENT_FORM_SUCCESS;
    constructor(public payload: any) {
    }
}
export class PreStudentFormFail implements Action {
    type = ActionTypes.PRE_STUDENT_FORM_FAIL;
    constructor(public payload: any) {
    }
}


// academic list
export class AcademicAction implements Action {
    type = ActionTypes.ACADEMIC_YEAR_LIST;
    constructor(public payload: any) {
    }
}
export class AcademicSuccess implements Action {
    type = ActionTypes.ACADEMIC_YEAR_LIST_SUCCESS;
    constructor(public payload: any) {
    }
}
export class AcademicFail implements Action {
    type = ActionTypes.ACADEMIC_YEAR_LIST_FAIL;
    constructor(public payload: any) {
    }
}

// update student
export class EditStudentAction implements Action {
    type = ActionTypes.EDIT_STUDENT;
    constructor(public payload: any) {
    }
}
export class EditStudentSuccess implements Action {
    type = ActionTypes.EDIT_STUDENT_SUCCESS;
    constructor(public payload: any) {
    }
}
export class EditStudentFail implements Action {
    type = ActionTypes.EDIT_STUDENT_FAIL;
    constructor(public payload: any) {
    }
}

export class ResetStudentValues implements Action {
    type = ActionTypes.RESET_STUDENT_VALUES;

    constructor() {
    }
}

// students standard(class he is studying) list
export class StandardListAction implements Action {
    type = ActionTypes.STANDARD_LIST;
    constructor(public payload = null) {
    }
}
export class StandardListSuccess implements Action {
    type = ActionTypes.STANDARD_LIST_SUCCESS;
    constructor(public payload: any) {
    }
}
export class StandardListFail implements Action {
    type = ActionTypes.STANDARD_LIST_FAIL;
    constructor(public payload: any) {
    }
}


// students section list
export class SectionListAction implements Action {
    type = ActionTypes.SECTION_LIST;
    constructor(public payload: any) {
    }
}
export class SectionListSuccess implements Action {
    type = ActionTypes.SECTION_LIST_SUCCESS;
    constructor(public payload: any) {
    }
}
export class SectionListFail implements Action {
    type = ActionTypes.SECTION_LIST_FAIL;
    constructor(public payload: any) {
    }
}

// students section list
export class SectionListSiblingAction implements Action {
    type = ActionTypes.SECTION_LIST_SIBLING;
    constructor(public payload: any) {
    }
}
export class SectionListSiblingSuccess implements Action {
    type = ActionTypes.SECTION_LIST_SIBLING_SUCCESS;
    constructor(public payload: any) {
    }
}
export class SectionListSiblingFail implements Action {
    type = ActionTypes.SECTION_LIST_SIBLING_FAIL;
    constructor(public payload: any) {
    }
}


// student belongs to which medium(english or tamil..etc)
export class MediumOfStudentAction implements Action {
    type = ActionTypes.MEDIUM_OF_STUDENT;
    constructor(public payload = null) {
    }
}
export class MediumOfStudentSuccess implements Action {
    type = ActionTypes.MEDIUM_OF_STUDENT_SUCCESS;
    constructor(public payload: any) {
    }
}
export class MediumOfStudentFail implements Action {
    type = ActionTypes.MEDIUM_OF_STUDENT_FAIL;
    constructor(public payload: any) {
    }
}

// get religion list
export class ReligionListAction implements Action {
    type = ActionTypes.GET_RELIGION_LIST;
    constructor(public payload = null) {
    }
}
export class ReligionListSuccess implements Action {
    type = ActionTypes.GET_RELIGION_LIST_SUCCESS;
    constructor(public payload: any) {
    }
}
export class ReligionListFail implements Action {
    type = ActionTypes.GET_RELIGION_LIST_FAIL;
    constructor(public payload: any) {
    }
}


// get community list
export class CommunityListAction implements Action {
    type = ActionTypes.GET_COMMUNITY_LIST;
    constructor(public payload = null) {
    }
}
export class CommunityListSuccess implements Action {
    type = ActionTypes.GET_COMMUNITY_LIST_SUCCESS;
    constructor(public payload: any) {
    }
}
export class CommunityListFail implements Action {
    type = ActionTypes.GET_COMMUNITY_LIST_FAIL;
    constructor(public payload: any) {
    }
}


// get blood group list
export class BloodGroupListAction implements Action {
    type = ActionTypes.BLOOD_GROUP_LIST;
    constructor(public payload = null) {
    }
}
export class BloodGroupListSuccess implements Action {
    type = ActionTypes.BLOOD_GROUP_LIST_SUCCESS;
    constructor(public payload: any) {
    }
}
export class BloodGroupListFail implements Action {
    type = ActionTypes.BLOOD_GROUP_LIST_FAIL;
    constructor(public payload: any) {
    }
}

// fees payment type
export class FeesPaymentTypeAction implements Action {
    type = ActionTypes.FEES_PAYMENT_TYPE;
    constructor(public payload = null) {
    }
}
export class FeesPaymentTypeSuccess implements Action {
    type = ActionTypes.FEES_PAYMENT_TYPE_SUCCESS;
    constructor(public payload: any) {
    }
}
export class FeesPaymentTypeFail implements Action {
    type = ActionTypes.FEES_PAYMENT_TYPE_FAIL;
    constructor(public payload: any) {
    }
}

// empty section list variable in reducer
export class EmptySectionListAction implements Action {
    type = ActionTypes.EMPTY_SECTION_LIST;
    constructor(public payload = null) {
    }
}

// get student details
export class GetStudentDetailsAction implements Action {
    type = ActionTypes.GET_STUDENT_DETAILS;
    constructor(public payload: any) {
    }
}
export class GetStudentDetailsSuccess implements Action {
    type = ActionTypes.GET_STUDENT_DETAILS_SUCCESS;
    constructor(public payload: any) {
    }
}
export class GetStudentDetailsFail implements Action {
    type = ActionTypes.GET_STUDENT_DETAILS_FAIL;
    constructor(public payload: any) {
    }
}

// get student count
export class GetStudentCountAction implements Action {
    type = ActionTypes.GET_STUDENT_COUNT;
    constructor(public payload: any) {
    }
}
export class GetStudentCountSuccess implements Action {
    type = ActionTypes.GET_STUDENT_COUNT_SUCCESS;
    constructor(public payload: any) {
    }
}
export class GetStudentCountFail implements Action {
    type = ActionTypes.GET_STUDENT_COUNT_FAIL;
    constructor(public payload: any) {
    }
}





// upload documents
export class UploadDocumentAction implements Action {
    type = ActionTypes.UPLOAD_DOCUMENT;
    constructor(public payload: any) {
    }
}
export class UploadDocumentSuccess implements Action {
    type = ActionTypes.UPLOAD_DOCUMENT_SUCCESS;
    constructor(public payload: any) {
    }
}
export class UploadDocumentFail implements Action {
    type = ActionTypes.UPLOAD_DOCUMENT_FAIL;
    constructor(public payload: any) {
    }
}
export class RemoveDocument implements Action {
    type = ActionTypes.REMOVE_DOCUMENT;
    constructor(public payload: any) {
    }
}




// deleted student list
export class GetSiblingDetail implements Action {
    type = ActionTypes.GET_SIBLING_DETAIL;
    constructor(public payload: any) {
    }
}
export class GetSiblingDetailSuccess implements Action {
    type = ActionTypes.GET_SIBLING_DETAIL_SUCCESS;
    constructor(public payload: any) {
    }
}
export class GetSiblingDetailFail implements Action {
    type = ActionTypes.GET_SIBLING_DETAIL_FAIL;
    constructor(public payload: any) {
    }
}




// get route master liat
export class RouteMasterList implements Action {
    type = ActionTypes.GET_ROUTE_MASTER_LIST;
    constructor(public payload: any) {
    }
}
export class RouteMasterListSuccess implements Action {
    type = ActionTypes.GET_ROUTE_MASTER_LIST_SUCCESS;
    constructor(public payload: any) {
    }
}
export class RouteMasterListFail implements Action {
    type = ActionTypes.GET_ROUTE_MASTER_LIST_FAIL;
    constructor(public payload: any) {
    }
}

// get stoping point list
export class StopingPointList implements Action {
    type = ActionTypes.STOPING_POINT_LIST;
    constructor(public payload: any) {
    }
}
export class StopingPointListSuccess implements Action {
    type = ActionTypes.STOPING_POINT_LIST_SUCCESS;
    constructor(public payload: any) {
    }
}
export class StopingPointListFail implements Action {
    type = ActionTypes.STOPING_POINT_LIST_FAIL;
    constructor(public payload: any) {
    }
}

// route master fee list
export class RouteMasterFeeList implements Action {
    type = ActionTypes.GET_ROUTE_FEE_LIST;

    constructor(public payload: any) {
    }
}

export class RouteMasterFeeListSuccess implements Action {
    type = ActionTypes.GET_ROUTE_FEE_LIST_SUCCESS;

    constructor(public payload: any) {
        console.log('payload', payload);
    }
}

export class RouteMasterFeeListFail implements Action {
    type = ActionTypes.GET_ROUTE_FEE_LIST_FAIL;

    constructor(public payload: any) {
    }
}
export class MonthListAction implements Action {
    type = ActionTypes.GET_MONTH_LIST;
    constructor(public payload = null) { }
}
export class MonthListActionSuccess implements Action {
    type = ActionTypes.GET_MONTH_LIST_SUCCESS;
    constructor(public payload: any) { }
}
export class MonthListActionFail implements Action {
    type = ActionTypes.GET_MONTH_LIST_FAIL;
    constructor(public payload: any) { }
}



// clear all section
export class ClearSection implements Action {
    type = ActionTypes.CLEAR_ALL_SECTION;
}
// ResetDocument
export class ResetDocument implements Action {
    type = ActionTypes.RESET_DOCUMENT;
}
export class clearStudentList implements Action {
    type = ActionTypes.CLEAR_STUDENT_LIST;
}


export class SubjectListAction implements Action {
    type = ActionTypes.SUBJECT_LIST;
    constructor(public payload: any) {
    }
}
export class SubjectListActionSuccess implements Action {
    type = ActionTypes.SUBJECT_LIST_SUCCESS;
    constructor(public payload: any) {
    }
}
export class SubjectListActionFail implements Action {
    type = ActionTypes.SUBJECT_LIST_FAIL;
    constructor(public payload: any) {
    }
}



// country List
export class CountryListAction implements Action {
    type = ActionTypes.COUNTRY_LIST;
}

export class CountryListSuccess implements Action {
    type = ActionTypes.COUNTRY_LIST_SUCCESS;

    constructor(public payload: any) {
    }
}

export class CountryListFail implements Action {
    type = ActionTypes.COUNTRY_LIST_FAIL;

    constructor(public payload: any) {
    }
}
// region list
export class RegionListAction implements Action {
    type = ActionTypes.REGION_LIST;

    constructor(public payload: any) {
    }
}

export class RegionListSuccess implements Action {
    type = ActionTypes.REGION_LIST_SUCCESS;

    constructor(public payload: any) {
    }
}

export class RegionListFail implements Action {
    type = ActionTypes.REGION_LIST_FAIL;

    constructor(public payload: any) {
    }
}
// city list
export class CityListAction implements Action {
    type = ActionTypes.CITY_LIST;

    constructor(public payload: any) {
    }
}

export class CityListSuccess implements Action {
    type = ActionTypes.CITY_LIST_SUCCESS;

    constructor(public payload: any) {
    }
}

export class CityListFail implements Action {
    type = ActionTypes.CITY_LIST_FAIL;

    constructor(public payload: any) {
    }
}

export type Actions =
    | AddStudentAction
    | ClearSection

    | AddStudentSuccess
    | AddStudentFail
    | PreStudentFormFail
    | PreStudentFormSuccess
    | PreStudentFormAction

    | StandardListAction
    | StandardListSuccess
    | StandardListFail
    | SectionListAction
    | SectionListSuccess
    | SectionListFail
    | MediumOfStudentAction
    | MediumOfStudentSuccess
    | MediumOfStudentFail
    | ReligionListAction
    | ReligionListSuccess
    | ReligionListFail
    | CommunityListAction
    | CommunityListSuccess
    | CommunityListFail
    | BloodGroupListAction
    | BloodGroupListSuccess
    | BloodGroupListFail
    | FeesPaymentTypeAction
    | FeesPaymentTypeSuccess
    | FeesPaymentTypeFail
    | GetStudentDetailsAction
    | GetStudentDetailsSuccess
    | GetStudentDetailsFail
    | GetStudentCountAction
    | GetStudentCountSuccess
    | GetStudentCountFail

    | UploadDocumentAction
    | UploadDocumentSuccess
    | UploadDocumentFail
    | EditStudentAction
    | EditStudentSuccess
    | EditStudentFail
    | RemoveDocument

    | RouteMasterList
    | RouteMasterListSuccess
    | RouteMasterListFail
    | StopingPointList
    | StopingPointListSuccess
    | StopingPointListFail

    | AcademicAction
    | AcademicSuccess
    | AcademicFail

    | SectionListSiblingAction
    | SectionListSiblingSuccess
    | SectionListSiblingFail
    | SubjectListAction
    | SubjectListActionSuccess
    | SubjectListActionFail

    | CountryListAction
    | CountryListSuccess
    | CountryListFail
    | RegionListAction
    | RegionListSuccess
    | RegionListFail
    | CityListAction
    | CityListSuccess
    | CityListFail;
