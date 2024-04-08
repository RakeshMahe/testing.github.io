import { Map, Record } from 'immutable';

export interface StudentFormState extends Map<string, any> {
    studentList: any;
    LeaveRequestList: any;
    getleaverequestlistcount: any;
    standardList: any;
    sectionList: any;
    mediumList: any;
    religionList: any;
    communityList: any;
    bloodGroupList: any;
    feesPaymentType: any;
    getStudentDetails: any;
    getStudentCount: any;
    deleteStudent: any;
    uploadedDocument: any;
    deletedStudentList: any;
    revertStudent: any;
    exportStudent: any;
    promoteStudent: any;
    AcademicList: any;
    selectedPromoteStudent: any;
    tempSelectedPromoteStudent: any;
    createPromoteStudent: any;
    studentMessageDetails: any;
    studentMessageFile: any;
    importInvalidStudent: any;
    idCardGenerate: any;
    tempStandardList: any;

    importInvalidStudentLoading: boolean;

    studentMessageFileLoading: boolean;

    studentMessageDetailsLoading: boolean;

    studentAdded: any;
    createPromoteStudentLoading: boolean;
    createPromoteStudentLoaded: boolean;
    createPromoteStudentFailed: boolean;

    promoteStudentLoading: boolean;
    promoteStudentLoaded: boolean;
    promoteStudentFailed: boolean;

    AcademicListLoading: boolean;
    AcademicListLoaded: boolean;
    AcademicListFailed: boolean;

    editStudentLoading: boolean;
    editStudent: any;

    addStudentLoading: boolean;
    addStudentLoaded: boolean;
    addStudentFailed: boolean;

    exportStudentLoading: boolean;
    exportStudentLoaded: boolean;
    exportStudentFailed: boolean;

    studentListLoading: boolean;
    studentListLoaded: boolean;
    studentListFailed: boolean;

    LeaveRequestListLoading: boolean;
    LeaveRequestListLoaded: boolean;
    LeaveRequestListFailed: boolean;

    getleaverequestlistcountLoading: boolean;
    getleaverequestlistcountLoaded: boolean;
    getleaverequestlistcountFailed: boolean;

    invalidStudentListLoading: boolean;
    invalidStudentListLoaded: boolean;
    invalidStudentListFailed: boolean;

    standardListLoading: boolean;
    standardListLoaded: boolean;
    standardListFailed: boolean;

    sectionListLoading: boolean;
    sectionListLoaded: boolean;
    sectionListFailed: boolean;

    sectionSiblingList: any;
    sectionSiblingListLoading: boolean;
    sectionSiblingListLoaded: boolean;
    sectionSiblingListFailed: boolean;

    mediumOfStudentLoading: boolean;
    mediumOfStudentLoaded: boolean;
    mediumOfStudentFailed: boolean;

    religionListLoading: boolean;
    religionListLoaded: boolean;
    religionListFailed: boolean;

    communityListLoading: boolean;
    communityListLoaded: boolean;
    communityListFailed: boolean;

    bloodGroupListLoading: boolean;
    bloodGroupListLoaded: boolean;
    bloodGroupListFailed: boolean;

    feesPaymentTypeLoading: boolean;
    feesPaymentTypeLoaded: boolean;
    feesPaymentTypeFailed: boolean;

    getStudentDetailsLoading: boolean;
    getStudentDetailsLoaded: boolean;
    getStudentDetailsFailed: boolean;

    getStudentCountLoading: boolean;
    getStudentCountLoaded: boolean;
    getStudentCountFailed: boolean;

    deleteStudentLoading: boolean;
    deleteStudentLoaded: boolean;
    deleteStudentFailed: boolean;

    uploadDocumentLoading: boolean;
    uploadDocumentLoaded: boolean;
    uploadDocumentFailed: boolean;
    uploadedOriginalDocument: [];

    deletedStudentListLoading: boolean;
    deletedStudentListLoaded: boolean;
    deletedStudentListFailed: boolean;

    revertStudentLoading: boolean;
    revertStudentLoaded: boolean;
    revertStudentFailed: boolean;

    getSiblingDetails: any;
    getSiblingDetailsLoading: boolean;
    getSiblingDetailsLoaded: boolean;
    getSiblingDetailsFailed: boolean;

    routeMasterList: any;
    routeMasterListLoading: boolean;
    routeMasterListLoaded: boolean;
    routeMasterListFailed: boolean;

    stopingPointList: any;
    stopingPointListLoading: boolean;
    stopingPointListLoaded: boolean;
    stopingPointListFailed: boolean;

    routeFeeListLoading: boolean;
    routeFeeList: any;
    monthList: Array<any>;

    idCardGenerateLoading: boolean;
    idCardGenerateLoaded: boolean;
    idCardGenerateFailed: boolean;

    studentVoiceReportLoading: boolean;
    studentVoiceReport: any;

    subjectList: any;
    subjectListLoading: boolean;
    subjectListLoaded: boolean;
    subjectListFailed: boolean;
    GetExamNames: any;
    GetExamNamesLoading: boolean;
    GetExamNamesLoaded: boolean;
    GetExamNamesFailed: boolean;

    GetStdSecProgress: any;

    GetStdSecProgressLoading: boolean;
    GetStdSecProgressLoaded: boolean;
    GetStdSecProgressFailed: boolean;

    progressCard: any;

    progressCardLoading: boolean;
    progressCardLoaded: boolean;
    progressCardFailed: boolean;
    //studyCertificate
    studyCertificate: any;
    studyCertificateLoading: boolean;
    studyCertificateLoaded: boolean;
    studyCertificateFailed: boolean;

    examResultAnalysis: any;

    examResultAnalysisLoading: boolean;
    examResultAnalysisLoaded: boolean;
    examResultAnalysisFailed: boolean;

    StudentListProgress: any;

    StudentListProgressLoading: boolean;
    StudentListProgressLoaded: boolean;
    StudentListProgressFailed: boolean;
    subjectSameForAllSection: any;

    countryList: any;
    regionList: any;
    cityList: any;

    countryListLoading: boolean;
    countryListLoaded: boolean;
    countryListFailed: boolean;

    regionListLoading: boolean;
    regionListLoaded: boolean;
    regionListFailed: boolean;

    cityListLoading: boolean;
    cityListLoaded: boolean;
    cityListFailed: boolean;

    absenteesList: any;

    absenteesListLoading: boolean;
    absenteesListLoaded: boolean;
    absenteesListFailed: boolean;

    absenteesListParticularClass: any;

    absenteesListParticularClassLoading: boolean;
    absenteesListParticularClassLoaded: boolean;
    absenteesListParticularClassFailed: boolean;

    prestudentAdded: any;
    preaddStudentLoading: boolean;
    preaddStudentLoaded: boolean;
    preaddStudentFailed: boolean;

}

export const studentManagementRecord = Record({

    absenteesList: [],

    absenteesListLoading: false,
    absenteesListLoaded: false,
    absenteesListFailed: false,

    absenteesListParticularClass: [],
    absenteesListParticularClassLoading: false,
    absenteesListParticularClassLoaded: false,
    absenteesListParticularClassFailed: false,

    prestudentAdded: [],
    preaddStudentLoading: false,
    preaddStudentLoaded: false,
    preaddStudentFailed: false,

    studentList: [],
    LeaveRequestList: [],
    getLeaveRequestListCount: [],
    standardList: [],
    sectionList: [],
    mediumList: [],
    religionList: [],
    communityList: [],
    bloodGroupList: [],
    feesPaymentType: [],
    getStudentDetails: [],
    getStudentCount: [],
    deleteStudent: [],
    uploadedDocument: [],
    uploadedOriginalDocument: [],
    deletedStudentList: [],
    revertStudent: [],
    routeMasterList: [],
    stopingPointList: [],
    exportStudent: [],
    promoteStudent: [],
    AcademicList: [],
    selectedPromoteStudent: [],
    tempSelectedPromoteStudent: [],
    createPromoteStudent: [],
    studentMessageDetails: [],
    studentMessageFile: [],
    importInvalidStudent: [],
    idCardGenerate: [],
    tempStandardList: [],

    editStudent: [],

    editStudentLoading: false,

    importInvalidStudentLoading: false,

    studentMessageFileLoading: false,

    studentMessageDetailsLoading: true,

    createPromoteStudentLoading: false,
    createPromoteStudentLoaded: false,
    createPromoteStudentFailed: false,

    promoteStudentLoading: false,
    promoteStudentLoaded: false,
    promoteStudentFailed: false,

    AcademicListLoading: false,
    AcademicListLoaded: false,
    AcademicListFailed: false,

    studentAdded: null,
    addStudentLoading: false,
    addStudentLoaded: false,
    addStudentFailed: false,

    studentListLoading: false,
    studentListLoaded: false,
    studentListFailed: false,

    LeaveRequestListLoading: false,
    LeaveRequestListLoaded: false,
    LeaveRequestListFailed: false,

    getleaverequestlistcountLoading: false,
    getleaverequestlistcountLoaded: false,
    getleaverequestlistcountFailed: false,

    invalidStudentListLoading: false,
    invalidStudentListLoaded: false,
    invalidStudentListFailed: false,

    standardListLoading: false,
    standardListLoaded: false,
    standardListFailed: false,

    sectionListLoading: false,
    sectionListLoaded: false,
    sectionListFailed: false,

    sectionSiblingList: [],
    sectionSiblingListLoading: false,
    sectionSiblingListLoaded: false,
    sectionSiblingListFailed: false,

    mediumOfStudentLoading: false,
    mediumOfStudentLoaded: false,
    mediumOfStudentFailed: false,

    religionListLoading: false,
    religionListLoaded: false,
    religionListFailed: false,

    communityListLoading: false,
    communityListLoaded: false,
    communityListFailed: false,

    bloodGroupListLoading: false,
    bloodGroupListLoaded: false,
    bloodGroupListFailed: false,

    feesPaymentTypeLoading: false,
    feesPaymentTypeLoaded: false,
    feesPaymentTypeFailed: false,

    getStudentDetailsLoading: false,
    getStudentDetailsLoaded: false,
    getStudentDetailsFailed: false,

    getStudentCountLoading: false,
    getStudentCountLoaded: false,
    getStudentCountFailed: false,

    deleteStudentLoading: false,
    deleteStudentLoaded: false,
    deleteStudentFailed: false,

    uploadDocumentLoading: false,
    uploadDocumentLoaded: false,
    uploadDocumentFailed: false,

    deletedStudentListLoading: false,
    deletedStudentListLoaded: false,
    deletedStudentListFailed: false,

    revertStudentLoading: false,
    revertStudentLoaded: false,
    revertStudentFailed: false,

    getSiblingDetails: null,
    getSiblingDetailsLoading: false,
    getSiblingDetailsLoaded: false,
    getSiblingDetailsFailed: false,

    routeMasterListLoading: false,
    routeMasterListLoaded: false,
    routeMasterListFailed: false,

    stopingPointListLoading: false,
    stopingPointListLoaded: false,
    stopingPointListFailed: false,

    exportStudentLoading: false,
    exportStudentLoaded: false,
    exportStudentFailed: false,

    routeFeeListLoading: false,
    routeFeeList: null,
    monthList: [],

    idCardGenerateLoading: false,
    idCardGenerateLoaded: false,
    idCardGenerateFailed: false,

    studentVoiceReportLoading: true,
    studentVoiceReport: [],
    subjectList: [],
    subjectListLoading: false,
    subjectListLoaded: false,
    subjectListFailed: false,

    GetExamNames: [],
    GetExamNamesLoading: false,
    GetExamNamesLoaded: false,
    GetExamNamesFailed: false,

    StudentListProgress: [],

    StudentListProgressLoading: false,
    StudentListProgressLoaded: false,
    StudentListProgressFailed: false,

    examResultAnalysis: [],

    examResultAnalysisLoading: false,
    examResultAnalysisLoaded: false,
    examResultAnalysisFailed: false,

    progressCard: [],

    progressCardLoading: false,
    progressCardLoaded: false,
    progressCardFailed: false,

    studyCertificate: [],
    studyCertificateLoading: false,
    studyCertificateLoaded: false,
    studyCertificateFailed: false,

    GetStdSecProgress: [],
    GetStdSecProgressLoading: false,
    GetStdSecProgressLoaded: false,
    GetStdSecProgressFailed: false,
    subjectSameForAllSection: null,

    countryList: [],
    regionList: [],
    cityList: [],

    countryListLoading: false,
    countryListLoaded: false,
    countryListFailed: false,

    regionListLoading: false,
    regionListLoaded: false,
    regionListFailed: false,

    cityListLoading: false,
    cityListLoaded: false,
    cityListFailed: false,
});
