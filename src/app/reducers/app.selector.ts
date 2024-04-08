// import {createSelector} from 'reselect';
// import {AppState} from './app.state';

// import * as studentManagementReducer from './app.reducer';

// // *************************** PUBLIC API's ****************************
// /**
//  * Signup store functions
//  */
// export const studentManagementState = (state: AppState) => state;

// export const createFeedbackLoading = createSelector(studentManagementState, studentManagementReducer.addStudentLoading);
// export const createFeedbackLoaded = createSelector(studentManagementState, studentManagementReducer.addStudentLoaded);
// export const createFeedbackFailed = createSelector(studentManagementState, studentManagementReducer.addStudentFailed);

// export const studentList = createSelector(studentManagementState, studentManagementReducer.studentList);
// export const studentListLoading = createSelector(studentManagementState, studentManagementReducer.studentListLoading);
// export const studentListLoaded = createSelector(studentManagementState, studentManagementReducer.studentListLoaded);
// export const studentListFailed = createSelector(studentManagementState, studentManagementReducer.studentListFailed);

// export const LeaveRequestList = createSelector(studentManagementState, studentManagementReducer.LeaveRequestList);
// export const LeaveRequestListLoading = createSelector(studentManagementState, studentManagementReducer.LeaveRequestListLoading);
// export const LeaveRequestListLoaded = createSelector(studentManagementState, studentManagementReducer.LeaveRequestListLoaded);
// export const LeaveRequestListFailed = createSelector(studentManagementState, studentManagementReducer.LeaveRequestListFailed);

// export const getLeaveRequestListCount = createSelector(studentManagementState, studentManagementReducer.getLeaveRequestListCount);
// export const getLeaveRequestListCountLoading = createSelector(studentManagementState, studentManagementReducer.getLeaveRequestListCountLoading);
// export const getLeaveRequestListCountLoaded = createSelector(studentManagementState, studentManagementReducer.getLeaveRequestListCountLoaded);
// export const getLeaveRequestListCountFailed = createSelector(studentManagementState, studentManagementReducer.getLeaveRequestListCountFailed);

// export const invalidStudentListLoading = createSelector(studentManagementState, studentManagementReducer.invalidStudentListLoading);
// export const invalidStudentListLoaded = createSelector(studentManagementState, studentManagementReducer.invalidStudentListLoaded);
// export const invalidStudentListFailed = createSelector(studentManagementState, studentManagementReducer.invalidStudentListFailed);

// export const standardList = createSelector(studentManagementState, studentManagementReducer.standardList);
// export const standardListLoading = createSelector(studentManagementState, studentManagementReducer.standardListLoading);
// export const standardListLoaded = createSelector(studentManagementState, studentManagementReducer.standardListLoaded);
// export const standardListFailed = createSelector(studentManagementState, studentManagementReducer.standardListFailed);

// export const sectionList = createSelector(studentManagementState, studentManagementReducer.sectionList);
// export const sectionListLoading = createSelector(studentManagementState, studentManagementReducer.sectionListLoading);
// export const sectionListLoaded = createSelector(studentManagementState, studentManagementReducer.sectionListLoaded);
// export const sectionListFailed = createSelector(studentManagementState, studentManagementReducer.sectionListFailed);

// export const sectionSiblingList = createSelector(studentManagementState, studentManagementReducer.sectionSiblingList);
// export const sectionSiblingListLoading = createSelector(studentManagementState, studentManagementReducer.sectionSiblingListLoading);
// export const sectionSiblingListLoaded = createSelector(studentManagementState, studentManagementReducer.sectionSiblingListLoaded);
// export const sectionSiblingListFailed = createSelector(studentManagementState, studentManagementReducer.sectionSiblingListFailed);

// export const mediumList = createSelector(studentManagementState, studentManagementReducer.mediumList);
// export const mediumOfStudentLoading = createSelector(studentManagementState, studentManagementReducer.mediumOfStudentLoading);
// export const mediumOfStudentLoaded = createSelector(studentManagementState, studentManagementReducer.mediumOfStudentLoaded);
// export const mediumOfStudentFailed = createSelector(studentManagementState, studentManagementReducer.mediumOfStudentFailed);

// export const religionList = createSelector(studentManagementState, studentManagementReducer.religionList);
// export const religionListLoading = createSelector(studentManagementState, studentManagementReducer.religionListLoading);
// export const religionListLoaded = createSelector(studentManagementState, studentManagementReducer.religionListLoaded);
// export const religionListFailed = createSelector(studentManagementState, studentManagementReducer.religionListFailed);

// export const communityList = createSelector(studentManagementState, studentManagementReducer.communityList);
// export const communityListLoading = createSelector(studentManagementState, studentManagementReducer.communityListLoading);
// export const communityListLoaded = createSelector(studentManagementState, studentManagementReducer.communityListLoaded);
// export const communityListFailed = createSelector(studentManagementState, studentManagementReducer.communityListFailed);

// export const bloodGroupList = createSelector(studentManagementState, studentManagementReducer.bloodGroupList);
// export const bloodGroupListLoading = createSelector(studentManagementState, studentManagementReducer.bloodGroupListLoading);
// export const bloodGroupListLoaded = createSelector(studentManagementState, studentManagementReducer.bloodGroupListLoaded);
// export const bloodGroupListFailed = createSelector(studentManagementState, studentManagementReducer.bloodGroupListFailed);

// export const feesPaymentType = createSelector(studentManagementState, studentManagementReducer.feesPaymentType);
// export const feesPaymentTypeLoading = createSelector(studentManagementState, studentManagementReducer.feesPaymentTypeLoading);
// export const feesPaymentTypeLoaded = createSelector(studentManagementState, studentManagementReducer.feesPaymentTypeLoaded);
// export const feesPaymentTypeFailed = createSelector(studentManagementState, studentManagementReducer.feesPaymentTypeFailed);


// export const getStudentDetails = createSelector(studentManagementState, studentManagementReducer.getStudentDetails);
// export const getStudentDetailsLoading = createSelector(studentManagementState, studentManagementReducer.getStudentDetailsLoading);
// export const getStudentDetailsLoaded = createSelector(studentManagementState, studentManagementReducer.getStudentDetailsLoaded);
// export const getStudentDetailsFailed = createSelector(studentManagementState, studentManagementReducer.getStudentDetailsFailed);

// export const getStudentCount = createSelector(studentManagementState, studentManagementReducer.getStudentCount);
// export const getStudentCountLoading = createSelector(studentManagementState, studentManagementReducer.getStudentCountLoading);
// export const getStudentCountLoaded = createSelector(studentManagementState, studentManagementReducer.getStudentCountLoaded);
// export const getStudentCountFailed = createSelector(studentManagementState, studentManagementReducer.getStudentCountFailed);

// export const deleteStudent = createSelector(studentManagementState, studentManagementReducer.deleteStudent);
// export const deleteStudentLoading = createSelector(studentManagementState, studentManagementReducer.deleteStudentLoading);
// export const deleteStudentLoaded = createSelector(studentManagementState, studentManagementReducer.deleteStudentLoaded);
// export const deleteStudentFailed = createSelector(studentManagementState, studentManagementReducer.deleteStudentFailed);

// export const uploadedDocument = createSelector(studentManagementState, studentManagementReducer.uploadedDocument);
// export const uploadDocumentLoading = createSelector(studentManagementState, studentManagementReducer.uploadDocumentLoading);
// export const uploadDocumentLoaded = createSelector(studentManagementState, studentManagementReducer.uploadDocumentLoaded);
// export const uploadDocumentFailed = createSelector(studentManagementState, studentManagementReducer.uploadDocumentFailed);

// export const deletedStudentList = createSelector(studentManagementState, studentManagementReducer.deletedStudentList);
// export const deletedStudentListLoading = createSelector(studentManagementState, studentManagementReducer.deletedStudentListLoading);
// export const deletedStudentListLoaded = createSelector(studentManagementState, studentManagementReducer.deletedStudentListLoaded);
// export const deletedStudentListFailed = createSelector(studentManagementState, studentManagementReducer.deletedStudentListFailed);

// export const revertStudent = createSelector(studentManagementState, studentManagementReducer.revertStudent);
// export const revertStudentLoading = createSelector(studentManagementState, studentManagementReducer.revertStudentLoading);
// export const revertStudentLoaded = createSelector(studentManagementState, studentManagementReducer.revertStudentLoaded);
// export const revertStudentFailed = createSelector(studentManagementState, studentManagementReducer.revertStudentFailed);

// export const studentAdded = createSelector(studentManagementState, studentManagementReducer.studentAdded);
// export const getSiblingDetails = createSelector(studentManagementState, studentManagementReducer.getSiblingDetails);

// export const routeMasterList = createSelector(studentManagementState, studentManagementReducer.routeMasterList);
// export const routeMasterListLoading = createSelector(studentManagementState, studentManagementReducer.routeMasterListLoading);
// export const routeMasterListLoaded = createSelector(studentManagementState, studentManagementReducer.routeMasterListLoaded);
// export const routeMasterListFailed = createSelector(studentManagementState, studentManagementReducer.routeMasterListFailed);

// export const stopingPointList = createSelector(studentManagementState, studentManagementReducer.stopingPointList);
// export const stopingPointListLoading = createSelector(studentManagementState, studentManagementReducer.stopingPointListLoading);
// export const stopingPointListLoaded = createSelector(studentManagementState, studentManagementReducer.stopingPointListLoaded);
// export const stopingPointListFailed = createSelector(studentManagementState, studentManagementReducer.stopingPointListFailed);

// export const exportStudent = createSelector(studentManagementState, studentManagementReducer.exportStudent);
// export const exportStudentLoading = createSelector(studentManagementState, studentManagementReducer.exportStudentLoading);
// export const exportStudentLoaded = createSelector(studentManagementState, studentManagementReducer.exportStudentLoaded);
// export const exportStudentFailed = createSelector(studentManagementState, studentManagementReducer.exportStudentFailed);

// export const routeFeeList = createSelector(studentManagementState, studentManagementReducer.routeFeeList);
// export const routeFeeListLoading = createSelector(studentManagementState, studentManagementReducer.routeFeeListLoading);
// export const getMonthList = createSelector(studentManagementState, studentManagementReducer.getMonthList);

// export const AcademicList = createSelector(studentManagementState, studentManagementReducer.AcademicList);
// export const AcademicListLoading = createSelector(studentManagementState, studentManagementReducer.AcademicListLoading);

// export const promoteStudent = createSelector(studentManagementState, studentManagementReducer.promoteStudent);
// export const promoteStudentLoading = createSelector(studentManagementState, studentManagementReducer.promoteStudentLoading);
// export const selectedPromoteStudent = createSelector(studentManagementState, studentManagementReducer.selectedPromoteStudent);

// export const createPromoteStudent = createSelector(studentManagementState, studentManagementReducer.createPromoteStudent);
// export const createPromoteStudentLoading = createSelector(studentManagementState, studentManagementReducer.createPromoteStudentLoading);

// export const studentMessageDetails = createSelector(studentManagementState, studentManagementReducer.studentMessageDetails);
// export const studentMessageDetailsLoading = createSelector(studentManagementState, studentManagementReducer.studentMessageDetailsLoading);

// export const studentMessageFile = createSelector(studentManagementState, studentManagementReducer.studentMessageFile);
// export const studentMessageFileLoading = createSelector(studentManagementState, studentManagementReducer.studentMessageFileLoading);

// export const importInvalidStudent = createSelector(studentManagementState, studentManagementReducer.importInvalidStudent);
// export const importInvalidStudentLoading = createSelector(studentManagementState, studentManagementReducer.importInvalidStudentLoading);
// export const tempStandardList = createSelector(studentManagementState, studentManagementReducer.tempStandardList);

// export const studentVoiceReport = createSelector(studentManagementState, studentManagementReducer.studentVoiceReport);
// export const studentVoiceReportLoading = createSelector(studentManagementState, studentManagementReducer.studentVoiceReportLoading);

// export const subjectList = createSelector(studentManagementState, studentManagementReducer.subjectList);
// export const subjectListLoading = createSelector(studentManagementState, studentManagementReducer.subjectListLoading);
// export const subjectListLoaded = createSelector(studentManagementState, studentManagementReducer.subjectListLoaded);
// export const subjectListFailed = createSelector(studentManagementState, studentManagementReducer.subjectListFailed);


// export const GetExamNames = createSelector(studentManagementState, studentManagementReducer.GetExamNames);
// export const GetExamNamesLoading = createSelector(studentManagementState, studentManagementReducer.GetExamNamesLoading);
// export const GetExamNamesLoaded = createSelector(studentManagementState, studentManagementReducer.GetExamNamesLoaded);
// export const GetExamNamesFailed = createSelector(studentManagementState, studentManagementReducer.GetExamNamesFailed);

// export const GetStdSecProgress = createSelector(studentManagementState, studentManagementReducer.GetStdSecProgress);
// export const GetStdSecProgressLoading = createSelector(studentManagementState, studentManagementReducer.GetStdSecProgressLoading);
// export const GetStdSecProgressLoaded = createSelector(studentManagementState, studentManagementReducer.GetStdSecProgressLoaded);
// export const GetStdSecProgressFailed = createSelector(studentManagementState, studentManagementReducer.GetStdSecProgressFailed);

// export const StudentListProgress = createSelector(studentManagementState, studentManagementReducer.StudentListProgress);
// export const StudentListProgressLoading = createSelector(studentManagementState, studentManagementReducer.StudentListProgressLoading);
// export const StudentListProgressLoaded = createSelector(studentManagementState, studentManagementReducer.StudentListProgressLoaded);
// export const StudentListProgressFailed = createSelector(studentManagementState, studentManagementReducer.StudentListProgressFailed);

// export const examResultAnalysis = createSelector(studentManagementState, studentManagementReducer.examResultAnalysis);
// export const examResultAnalysisLoading = createSelector(studentManagementState, studentManagementReducer.examResultAnalysisLoading);
// export const examResultAnalysisLoaded = createSelector(studentManagementState, studentManagementReducer.examResultAnalysisLoaded);
// export const examResultAnalysisFailed = createSelector(studentManagementState, studentManagementReducer.examResultAnalysisFailed);

// export const progressCard = createSelector(studentManagementState, studentManagementReducer.progressCard);
// export const progressCardLoading = createSelector(studentManagementState, studentManagementReducer.progressCardLoading);
// export const progressCardLoaded = createSelector(studentManagementState, studentManagementReducer.progressCardLoaded);
// export const progressCardFailed = createSelector(studentManagementState, studentManagementReducer.progressCardFailed);
// //studyCertificate
// export const subjectSameForAllSection = createSelector(studentManagementState, studentManagementReducer.subjectSameForAllSection);


// export const countryList = createSelector(studentManagementState, studentManagementReducer.countryList);
// export const countryListLoading = createSelector(studentManagementState, studentManagementReducer.countryListLoading);
// export const countryListLoaded = createSelector(studentManagementState, studentManagementReducer.countryListLoaded);
// export const countryListFailed = createSelector(studentManagementState, studentManagementReducer.countryListFailed);
// // region list

// export const regionList = createSelector(studentManagementState, studentManagementReducer.regionList);
// export const regionListLoading = createSelector(studentManagementState, studentManagementReducer.regionListLoading);
// export const regionListLoaded = createSelector(studentManagementState, studentManagementReducer.regionListLoaded);
// export const regionListFailed = createSelector(studentManagementState, studentManagementReducer.regionListFailed);

// // city list

// export const cityList = createSelector(studentManagementState, studentManagementReducer.cityList);
// export const cityListLoading = createSelector(studentManagementState, studentManagementReducer.cityListLoading);
// export const cityListLoaded = createSelector(studentManagementState, studentManagementReducer.cityListLoaded);
// export const cityListFailed = createSelector(studentManagementState, studentManagementReducer.cityListFailed);


// export const studyCertificate = createSelector(studentManagementState, studentManagementReducer.studyCertificate);
// export const studyCertificateLoading = createSelector(studentManagementState, studentManagementReducer.studyCertificateLoading);
// export const studyCertificateLoaded = createSelector(studentManagementState, studentManagementReducer.studyCertificateLoaded);
// export const studyCertificateFailed = createSelector(studentManagementState, studentManagementReducer.studyCertificateFailed);
// //studyCertificate

// export const absenteesList = createSelector(studentManagementState, studentManagementReducer.absenteesList);
// export const absenteesListLoading = createSelector(studentManagementState, studentManagementReducer.absenteesListLoading);
// export const absenteesListLoaded = createSelector(studentManagementState, studentManagementReducer.absenteesListLoaded);
// export const absenteesListFailed = createSelector(studentManagementState, studentManagementReducer.absenteesListFailed);

// export const absenteesListParticularClass = createSelector(studentManagementState, studentManagementReducer.absenteesListParticularClass);
// export const absenteesListParticularClassLoading = createSelector(studentManagementState, studentManagementReducer.absenteesListParticularClassLoading);
// export const absenteesListParticularClassLoaded = createSelector(studentManagementState, studentManagementReducer.absenteesListParticularClassLoaded);
// export const absenteesListParticularClassFailed = createSelector(studentManagementState, studentManagementReducer.absenteesListParticularClassFailed);

// export const addStudentLoading = createSelector(studentManagementState, studentManagementReducer.addStudentLoading);
// export const editStudentLoading = createSelector(studentManagementState, studentManagementReducer.editStudentLoading);
