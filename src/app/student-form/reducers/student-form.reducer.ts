import {
    StudentFormState,
    studentManagementRecord
  } from './../reducers/student-form.state';
  import * as actions from '../../student-form/actions/student-form.action';
  import { get, uniqBy, filter } from 'lodash';
  
  export const initialState: StudentFormState = (new studentManagementRecord() as unknown) as StudentFormState;
  
  export function reducer(
    state = initialState,
    { type, payload }: any
  ): StudentFormState {
    if (!type) {
      return state;
    }
  
    switch (type) {
      /**
       * add student
       */
  
  
      case actions.ActionTypes.EDIT_STUDENT:
        return Object.assign({}, state, {
          editStudent: null,
          editStudentLoading: true,
        });
  
      case actions.ActionTypes.EDIT_STUDENT_SUCCESS:
        return Object.assign({}, state, {
          editStudent: payload,
          // getStudentDetails: {},
          editStudentLoading: false,
        });
  
      case actions.ActionTypes.EDIT_STUDENT_FAIL:
        return Object.assign({}, state, {
          addStudentLoading: false,
          addStudentLoaded: false,
          addStudentFailed: true
        });
  
      case actions.ActionTypes.ADD_STUDENT:
        return Object.assign({}, state, {
          studentAdded: null,
          addStudentLoading: true,
          addStudentLoaded: false,
          addStudentFailed: false
        });
  
      case actions.ActionTypes.ADD_STUDENT_SUCCESS:
        return Object.assign({}, state, {
          studentAdded: payload,
          getStudentDetails: {},
          addStudentLoading: false,
          addStudentLoaded: true,
          addStudentFailed: false
        });
  
      case actions.ActionTypes.ADD_STUDENT_FAIL:
        return Object.assign({}, state, {
          addStudentLoading: false,
          addStudentLoaded: false,
          addStudentFailed: true
        });

        case actions.ActionTypes.PRE_STUDENT_FORM:
          return Object.assign({}, state, {
            prestudentAdded: null,
            preaddStudentLoading: true,
            preaddStudentLoaded: false,
            preaddStudentFailed: false
          });
    
        case actions.ActionTypes.PRE_STUDENT_FORM_SUCCESS:
          return Object.assign({}, state, {
            prestudentAdded: payload,
            preaddStudentLoading: false,
            preaddStudentLoaded: true,
            preaddStudentFailed: false
          });
    
        case actions.ActionTypes.PRE_STUDENT_FORM_FAIL:
          return Object.assign({}, state, {
            preaddStudentLoading: false,
            preaddStudentLoaded: false,
            preaddStudentFailed: true
          });
    
  
      /**
       * student list
       */
      case actions.ActionTypes.STUDENT_LIST:
        return Object.assign({}, state, {
          uploadedDocument: [],
          // studentList: [],
          deletedStudentList: [],
          uploadedOriginalDocument: [],
          studentListLoading: true,
          studentListLoaded: false,
          studentListFailed: false
        });
      case actions.ActionTypes.STUDENT_LIST_SUCCESS:
        return Object.assign({}, state, {
          studentList: payload.data,
          studentListLoading: false,
          studentListLoaded: true,
          studentListFailed: false
        });
  
      case actions.ActionTypes.STUDENT_LIST_FAIL:
        return Object.assign({}, state, {
          studentListLoading: false,
          studentListLoaded: false,
          studentListFailed: true
        });
      case actions.ActionTypes.RESET_STUDENT_VALUES:
        return Object.assign({}, state, {
          studentList: undefined
        });
  
      /**
    * LeaveRequestList
    */
      case actions.ActionTypes.LEAVEREQUEST_LIST:
        return Object.assign({}, state, {
          LeaveRequestListLoading: true,
          LeaveRequestListLoaded: false,
          LeaveRequestListFailed: false
        });
      case actions.ActionTypes.LEAVEREQUEST_LIST_SUCCESS:
        return Object.assign({}, state, {
          LeaveRequestList: payload.data,
          LeaveRequestListLoading: false,
          LeaveRequestListLoaded: true,
          LeaveRequestListFailed: false
        });
  
      case actions.ActionTypes.LEAVEREQUEST_LIST_FAIL:
        return Object.assign({}, state, {
          LeaveRequestListLoading: false,
          LeaveRequestListLoaded: false,
          LeaveRequestListFailed: true
        });
  
      case actions.ActionTypes.RESET_STUDENT_VALUES:
        return Object.assign({}, state, {
          studentList: undefined
        });
  
      /**
      *  get leaverequest count
      */
      case actions.ActionTypes.GET_LEAVEREQUESTLIST_COUNT:
        return Object.assign({}, state, {
          // getStudentCount: [],
          getleaverequestlistcountLoading: true,
          getleaverequestlistcountLoaded: false,
          getleaverequestlistcountFailed: false
        });
  
      case actions.ActionTypes.GET_LEAVEREQUESTLIST_SUCCESS:
        console.log('payload.data', payload.count);
        return Object.assign({}, state, {
          getleaverequestlistcountCount: payload.count,
          getleaverequestlistcountCountLoading: false,
          getleaverequestlistcountCountLoaded: true,
          getleaverequestlistcountCountFailed: false
        });
  
      case actions.ActionTypes.GET_LEAVEREQUESTLIST_FAIL:
        return Object.assign({}, state, {
          getleaverequestlistcountLoading: false,
          getleaverequestlistcountLoaded: false,
          getleaverequestlistcountCountFailed: true
        });
      /**
       *  student standard( class they are studying ) list
       */
      case actions.ActionTypes.STANDARD_LIST:
        return Object.assign({}, state, {
          standardListLoading: true,
          standardListLoaded: false,
          standardListFailed: false
        });
  
      case actions.ActionTypes.STANDARD_LIST_SUCCESS:
        const tempStand = JSON.stringify(payload.data);
        let standardArray = [];
        if (get(payload, 'data.length') > 0) {
          const len = payload.data.length;
          const All = { id: '', instituteId: '', classDisplayName: 'All', className: 'All', mStandardId: 0 };
          standardArray.push(All);
          payload.data.map(element => {
            standardArray.push(element);
          });
          console.log('PerAdStdList', payload.data);
          console.log('standardArray', standardArray);
        }
        return Object.assign({}, state, {
          tempStandardList: JSON.parse(tempStand),
          standardList: standardArray,  // payload.data,
          standardListLoading: false,
          standardListLoaded: true,
          standardListFailed: false
        });
  
      case actions.ActionTypes.STANDARD_LIST_FAIL:
        return Object.assign({}, state, {
          standardListLoading: false,
          standardListLoaded: false,
          standardListFailed: true
        });
  
      /**
       *  student  section list
       */
      case actions.ActionTypes.SECTION_LIST:
        return Object.assign({}, state, {
          sectionList: [],
          subjectSameForAllSection: null,
          sectionListLoading: true,
          sectionListLoaded: false,
          sectionListFailed: false
        });
  
      case actions.ActionTypes.SECTION_LIST_SUCCESS:
        return Object.assign({}, state, {
          subjectSameForAllSection: payload['subjectSameForAllSection'],
          sectionList: payload.data,
          sectionListLoading: false,
          sectionListLoaded: true,
          sectionListFailed: false
        });
  
      case actions.ActionTypes.SECTION_LIST_FAIL:
        return Object.assign({}, state, {
          sectionListLoading: false,
          sectionListLoaded: false,
          sectionListFailed: true
        });
  
  
      /**
     *  student  section sibling list
     */
      case actions.ActionTypes.SECTION_LIST_SIBLING:
        return Object.assign({}, state, {
          sectionSiblingList: [],
          sectionSiblingListLoading: true,
          sectionSiblingListLoaded: false,
          sectionSiblingListFailed: false
        });
  
      case actions.ActionTypes.SECTION_LIST_SIBLING_SUCCESS:
        return Object.assign({}, state, {
          sectionSiblingList: payload.data,
          sectionSiblingListLoading: false,
          sectionSiblingListLoaded: true,
          sectionSiblingListFailed: false
        });
  
      case actions.ActionTypes.SECTION_LIST_SIBLING_FAIL:
        return Object.assign({}, state, {
          sectionSiblingListLoading: false,
          sectionSiblingListLoaded: false,
          sectionSiblingListFailed: true
        });
  
      /**
       *  medium of student(In which language they are studying e.g tamil, english..)
       */
      case actions.ActionTypes.MEDIUM_OF_STUDENT:
        return Object.assign({}, state, {
          mediumOfStudentLoading: true,
          mediumOfStudentLoaded: false,
          mediumOfStudentFailed: false
        });
  
      case actions.ActionTypes.MEDIUM_OF_STUDENT_SUCCESS:
        return Object.assign({}, state, {
          mediumList: payload.data,
          mediumOfStudentLoading: false,
          mediumOfStudentLoaded: true,
          mediumOfStudentFailed: false
        });
  
      case actions.ActionTypes.MEDIUM_OF_STUDENT_FAIL:
        return Object.assign({}, state, {
          mediumOfStudentLoading: false,
          mediumOfStudentLoaded: false,
          mediumOfStudentFailed: true
        });
  
      /**
       *  get the list of religion that student belongs to
       */
      case actions.ActionTypes.GET_RELIGION_LIST:
        return Object.assign({}, state, {
          religionListLoading: true,
          religionListLoaded: false,
          religionListFailed: false
        });
  
      case actions.ActionTypes.GET_RELIGION_LIST_SUCCESS:
        return Object.assign({}, state, {
          religionList: payload.data,
          religionListLoading: false,
          religionListLoaded: true,
          religionListFailed: false
        });
  
      case actions.ActionTypes.GET_RELIGION_LIST_FAIL:
        return Object.assign({}, state, {
          religionListLoading: false,
          religionListLoaded: false,
          religionListFailed: true
        });
  
      /**
       *  get the list of community that student belongs to
       */
      case actions.ActionTypes.GET_COMMUNITY_LIST:
        return Object.assign({}, state, {
          communityListLoading: true,
          communityListLoaded: false,
          communityListFailed: false
        });
  
      case actions.ActionTypes.GET_COMMUNITY_LIST_SUCCESS:
        return Object.assign({}, state, {
          communityList: payload.data,
          communityListLoading: false,
          communityListLoaded: true,
          communityListFailed: false
        });
  
      case actions.ActionTypes.GET_COMMUNITY_LIST_FAIL:
        return Object.assign({}, state, {
          communityListLoading: false,
          communityListLoaded: false,
          communityListFailed: true
        });
  
      /**
       *  get the blood group list
       */
      case actions.ActionTypes.BLOOD_GROUP_LIST:
        return Object.assign({}, state, {
          bloodGroupListLoading: true,
          bloodGroupListLoaded: false,
          bloodGroupListFailed: false
        });
  
      case actions.ActionTypes.BLOOD_GROUP_LIST_SUCCESS:
        return Object.assign({}, state, {
          bloodGroupList: payload.data,
          bloodGroupListLoading: false,
          bloodGroupListLoaded: true,
          bloodGroupListFailed: false
        });
  
      case actions.ActionTypes.BLOOD_GROUP_LIST_FAIL:
        return Object.assign({}, state, {
          bloodGroupListLoading: false,
          bloodGroupListLoaded: false,
          bloodGroupListFailed: true
        });
  
      /**
       *  get the blood group list
       */
      case actions.ActionTypes.FEES_PAYMENT_TYPE:
        return Object.assign({}, state, {
          feesPaymentTypeLoading: true,
          feesPaymentTypeLoaded: false,
          feesPaymentTypeFailed: false
        });
  
      case actions.ActionTypes.FEES_PAYMENT_TYPE_SUCCESS:
        return Object.assign({}, state, {
          feesPaymentType: payload.data,
          feesPaymentTypeLoading: false,
          feesPaymentTypeLoaded: true,
          feesPaymentTypeFailed: false
        });
  
      case actions.ActionTypes.FEES_PAYMENT_TYPE_FAIL:
        return Object.assign({}, state, {
          feesPaymentTypeLoading: false,
          feesPaymentTypeLoaded: false,
          feesPaymentTypeFailed: true
        });
  
      /**
       *  empty section list varibale
       */
      case actions.ActionTypes.EMPTY_SECTION_LIST:
        return Object.assign({}, state, {
          sectionList: undefined
        });
  
      /**
       *  get student details for update
       */
      case actions.ActionTypes.GET_STUDENT_DETAILS:
        return Object.assign({}, state, {
          getStudentDetails: null,
          getStudentDetailsLoading: true,
          getStudentDetailsLoaded: false,
          getStudentDetailsFailed: false
        });
  
      case actions.ActionTypes.GET_STUDENT_DETAILS_SUCCESS:
        const studentDetail = payload.data;
        let uploadedDoc = [];
        if (
          studentDetail.studentDocuments &&
          studentDetail.studentDocuments.length
        ) {
          uploadedDoc = studentDetail.studentDocuments;
        }
        // feesPaymentType
        return Object.assign({}, state, {
          uploadedDocument: uploadedDoc,
          uploadedOriginalDocument: uploadedDoc,
          getStudentDetails: studentDetail,
          getStudentDetailsLoading: false,
          getStudentDetailsLoaded: true,
          getStudentDetailsFailed: false
        });
  
      case actions.ActionTypes.GET_STUDENT_DETAILS_FAIL:
        return Object.assign({}, state, {
          getStudentDetailsLoading: false,
          getStudentDetailsLoaded: false,
          getStudentDetailsFailed: true
        });
      /**
       *  get student details for update
       */
      case actions.ActionTypes.GET_SIBLING_DETAIL:
        return Object.assign({}, state, {
          getSiblingDetails: null,
          getSiblingDetailsLoading: true,
          getSiblingDetailsLoaded: false,
          getSiblingDetailsFailed: false
        });
  
      case actions.ActionTypes.GET_SIBLING_DETAIL_SUCCESS:
        const siblingDetail = payload.data;
        return Object.assign({}, state, {
          getSiblingDetails: siblingDetail,
          getSiblingDetailsLoading: false,
          getSiblingDetailsLoaded: true,
          getSiblingDetailsFailed: false
        });
  
      case actions.ActionTypes.GET_SIBLING_DETAIL_FAIL:
        return Object.assign({}, state, {
          getSiblingDetailsLoading: false,
          getSiblingDetailsLoaded: false,
          getSiblingDetailsFailed: true
        });
      /**
       *  get student count
       */
      case actions.ActionTypes.GET_STUDENT_COUNT:
        return Object.assign({}, state, {
          // getStudentCount: [],
          getStudentCountLoading: true,
          getStudentCountLoaded: false,
          getStudentCountFailed: false
        });
  
      case actions.ActionTypes.GET_STUDENT_COUNT_SUCCESS:
        return Object.assign({}, state, {
          getStudentCount: payload.data,
          getStudentCountLoading: false,
          getStudentCountLoaded: true,
          getStudentCountFailed: false
        });
  
      case actions.ActionTypes.GET_STUDENT_COUNT_FAIL:
        return Object.assign({}, state, {
          getStudentCountLoading: false,
          getStudentCountLoaded: false,
          getStudentCountFailed: true
        });
  
      /**
       *  delete student
       */
      case actions.ActionTypes.DELETE_STUDENT:
        return Object.assign({}, state, {
          deleteStudentLoading: true,
          deleteStudenLoaded: false,
          deleteStudenFailed: false
        });
  
      case actions.ActionTypes.DELETE_STUDENT_SUCCESS:
        return Object.assign({}, state, {
          deleteStudent: payload,
          deleteStudentLoading: false,
          deleteStudenLoaded: true,
          deleteStudenFailed: false
        });
  
      case actions.ActionTypes.DELETE_STUDENT_FAIL:
        return Object.assign({}, state, {
          deleteStudentLoading: false,
          deleteStudenLoaded: false,
          deleteStudenFailed: true
        });
  
      /**
       *  upload Document
       */
      case actions.ActionTypes.UPLOAD_DOCUMENT:
        return Object.assign({}, state, {
          uploadDocumentLoading: true,
          uploadDocumentLoaded: false,
          uploadDocumentFailed: false
        });
  
      case actions.ActionTypes.UPLOAD_DOCUMENT_SUCCESS:
        let temp = [];
        if (state.uploadedDocument) {
          temp = state.uploadedDocument;
        }
        temp.push(payload.data);
        console.log('tempvalue', temp);
        console.log('uploaddoc', state.uploadedDocument);
  
        return Object.assign({}, state, {
          uploadedDocument: temp,
          uploadedOriginalDocument: temp,
          uploadDocumentLoading: false,
          uploadDocumentLoaded: true,
          uploadDocumentFailed: false
        });
  
      case actions.ActionTypes.UPLOAD_DOCUMENT_FAIL:
        return Object.assign({}, state, {
          uploadDocumentLoading: false,
          uploadDocumentLoaded: false,
          uploadDocumentFailed: true
        });
      case actions.ActionTypes.REMOVE_DOCUMENT:
        let currentDocs = state.uploadedDocument;
        currentDocs = currentDocs.filter(val => {
          return val.documentName !== payload;
        });
        return Object.assign({}, state, {
          uploadedDocument: currentDocs
        });
      case actions.ActionTypes.RESET_DOCUMENT:
        console.log('resetdocc');
  
        return Object.assign({}, state, {
          uploadedDocument: state.uploadedOriginalDocument
        });
  
      /**
       *  get deleted student list
       */
      case actions.ActionTypes.DELETED_STUDENT_LIST:
        return Object.assign({}, state, {
          // studentList: [],
          deletedStudentListLoading: true,
          deletedStudentListLoaded: false,
          deletedStudentListFailed: false
        });
  
      case actions.ActionTypes.DELETED_STUDENT_LIST_SUCCESS:
        return Object.assign({}, state, {
          deletedStudentList: payload.data,
          deletedStudentListLoading: false,
          deletedStudentListLoaded: true,
          deletedStudentListFailed: false
        });
  
      case actions.ActionTypes.DELETED_STUDENT_LIST_FAIL:
        return Object.assign({}, state, {
          deletedStudentListLoading: false,
          deletedStudentListLoaded: false,
          deletedStudentListFailed: true
        });
  
      /**
       *  revert student
       */
      case actions.ActionTypes.REVERT_STUDENT:
        return Object.assign({}, state, {
          revertStudentLoading: true,
          revertStudentLoaded: false,
          revertStudentFailed: false
        });
  
      case actions.ActionTypes.REVERT_STUDENT_SUCCESS:
        console.log('revertreducer', payload);
        return Object.assign({}, state, {
          revertStudent: payload,
          revertStudentLoading: false,
          revertStudentLoaded: true,
          revertStudentFailed: false
        });
  
      case actions.ActionTypes.REVERT_STUDENT_FAIL:
        return Object.assign({}, state, {
          revertStudentLoading: false,
          revertStudentLoaded: false,
          revertStudentFailed: true
        });
  
      // empty delete student variable in reducer
      case actions.ActionTypes.REVERT_STUDENT_FAIL:
        return Object.assign({}, state, {
          deleteStudent: undefined
        });
  
      /**
       * get route list
       */
      case actions.ActionTypes.GET_ROUTE_MASTER_LIST:
        return Object.assign({}, state, {
          routeMasterListLoading: true,
          routeMasterListLoaded: false,
          routeMasterListFailed: false
        });
  
      case actions.ActionTypes.GET_ROUTE_MASTER_LIST_SUCCESS:
        return Object.assign({}, state, {
          routeMasterList: payload.data,
          routeMasterListLoading: false,
          routeMasterListLoaded: true,
          routeMasterListFailed: false
        });
  
      case actions.ActionTypes.GET_ROUTE_MASTER_LIST_FAIL:
        return Object.assign({}, state, {
          routeMasterListLoading: false,
          routeMasterListLoaded: false,
          routeMasterListFailed: true
        });
  
      /**
       * get stoping point list
       */
      case actions.ActionTypes.STOPING_POINT_LIST:
        return Object.assign({}, state, {
          stopingPointListLoading: true,
          stopingPointListLoaded: false,
          stopingPointListFailed: false
        });
  
      case actions.ActionTypes.STOPING_POINT_LIST_SUCCESS:
        let routeList = [];
        if (payload.data) {
          routeList = payload.data.routeMasterDetails.routeStopsDetails;
          routeList = routeList.map(element => {
            element = element.busStopsDetails;
            return element;
          });
          console.log('routeList', routeList);
        }
        return Object.assign({}, state, {
          stopingPointList: routeList,
          stopingPointListLoading: false,
          stopingPointListLoaded: true,
          stopingPointListFailed: false
        });
  
      case actions.ActionTypes.STOPING_POINT_LIST_FAIL:
        return Object.assign({}, state, {
          stopingPointListLoading: false,
          stopingPointListLoaded: false,
          stopingPointListFailed: true
        });
      // get export student list
      case actions.ActionTypes.EXPORT_STUDENT_LIST:
        return Object.assign({}, state, {
          exportStudentLoading: false,
          exportStudentLoaded: false,
          exportStudentFailed: false
        });
  
      case actions.ActionTypes.EXPORT_STUDENT_LIST_SUCCESS:
        return Object.assign({}, state, {
          exportStudent: payload,
          exportStudentLoading: false,
          exportStudentLoaded: false,
          exportStudentFailed: false
        });
  
      case actions.ActionTypes.EXPORT_STUDENT_LIST_FAIL:
        return Object.assign({}, state, {
          exportStudentLoading: false,
          exportStudentLoaded: false,
          exportStudentFailed: false
        });
      /**
       * get route master fee list case function
       */
      case actions.ActionTypes.GET_ROUTE_FEE_LIST:
        return Object.assign({}, state, {
          routeFeeListLoading: true
        });
      case actions.ActionTypes.GET_ROUTE_FEE_LIST_SUCCESS:
        console.log('feetest', payload);
  
        return Object.assign({}, state, {
          routeFeeListLoading: false,
          routeFeeList: payload['date']
        });
      case actions.ActionTypes.GET_ROUTE_FEE_LIST_FAIL:
        return Object.assign({}, state, {
          routeFeeListLoading: false,
          routeFeeList: null
        });
      case actions.ActionTypes.GET_MONTH_LIST:
        return Object.assign({}, state, {});
  
      case actions.ActionTypes.GET_MONTH_LIST_SUCCESS:
        if (payload.data) {
          payload.data.forEach(element => {
            element.isSelected = false;
          });
        }
        console.log('finearray', payload.data);
  
        return Object.assign({}, state, {
          monthList: payload.data
        });
  
      case actions.ActionTypes.GET_MONTH_LIST_FAIL:
        return Object.assign({}, state, {
          monthList: []
        });
      // promote student list
      case actions.ActionTypes.PROMOTE_STUDENT_LIST:
        return Object.assign({}, state, {
          promoteStudent: [],
          promoteStudentLoading: true,
          promoteStudentLoaded: false,
          promoteStudentFailed: false,
        });
  
      case actions.ActionTypes.PROMOTE_STUDENT_LIST_SUCCESS:
        const tempPromoteStudent = payload.data.map(_list => {
          _list['isChecked'] = false;
          return _list;
        });
        return Object.assign({}, state, {
          promoteStudent: tempPromoteStudent,
          promoteStudentLoading: false,
          promoteStudentLoaded: true,
          promoteStudentFailed: false,
        });
  
      case actions.ActionTypes.PROMOTE_STUDENT_LIST_FAIL:
        return Object.assign({}, state, {
          promoteStudentLoading: false,
          promoteStudentLoaded: false,
          promoteStudentFailed: true,
        });
      // academic year
      case actions.ActionTypes.ACADEMIC_YEAR_LIST:
        return Object.assign({}, state, {
          AcademicList: [],
          AcademicListLoading: true,
          AcademicListLoaded: false,
          AcademicListFailed: false,
        });
  
      case actions.ActionTypes.ACADEMIC_YEAR_LIST_SUCCESS:
        return Object.assign({}, state, {
          AcademicList: payload.data,
          AcademicListLoading: false,
          AcademicListLoaded: true,
          AcademicListFailed: false,
        });
  
      case actions.ActionTypes.ACADEMIC_YEAR_LIST_FAIL:
        return Object.assign({}, state, {
          AcademicListLoading: false,
          AcademicListLoaded: false,
          AcademicListFailed: true,
        });
      // clear all student
      case actions.ActionTypes.CLEAR_STUDENT:
        return Object.assign({}, state, {
          promoteStudent: [],
          sectionList: [],
          standardList: [],
          tempStandardList: [],
        });
      // select promote student
      case actions.ActionTypes.SELECT_PROMOTE_STUDENT_LIST:
        let tempSelectedStud = [];
        let temppromoteStudent = state.promoteStudent;
        if (state.selectedPromoteStudent) {
          tempSelectedStud = state.selectedPromoteStudent;
        }
        tempSelectedStud.push(payload);
        temppromoteStudent.forEach(list => {
          if (list.studentId === payload.studentId) {
            list['isChecked'] = true;
            return list;
          }
        });
        return Object.assign({}, state, {
          promoteStudent: temppromoteStudent,
          selectedPromoteStudent: tempSelectedStud,
          tempSelectedPromoteStudent: tempSelectedStud,
        });
      // remove promote student
      case actions.ActionTypes.REMOVE_PROMOTE_STUDENT_LIST:
        let removepromoteStudent = state.promoteStudent;
        let TempRemoveStudent = state.selectedPromoteStudent;
        TempRemoveStudent = TempRemoveStudent.filter(data => data.studentId !== payload.studentId);
        removepromoteStudent.forEach(list => {
          if (list.studentId === payload.studentId) {
            list['isChecked'] = false;
            return list;
          }
        });
        return Object.assign({}, state, {
          promoteStudent: removepromoteStudent,
          selectedPromoteStudent: TempRemoveStudent,
          tempSelectedPromoteStudent: TempRemoveStudent,
        });
      case actions.ActionTypes.SELECT_ALL_STUDENT_LIST:
        let allPromoteStudentList = state.promoteStudent;
        let previousSAllPromotedStudent = [];
        let SelectedPromotedStudent = [];
        if (state.promoteStudent) {
          previousSAllPromotedStudent = get(state, 'selectedPromoteStudent') ? get(state, 'selectedPromoteStudent') : [];
          allPromoteStudentList = allPromoteStudentList.map(_data => {
            _data['isChecked'] = true;
            previousSAllPromotedStudent.push(_data);
            SelectedPromotedStudent = uniqBy(previousSAllPromotedStudent, 'studentId');
            return _data;
          });
        }
        return Object.assign({}, state, {
          promoteStudent: allPromoteStudentList,
          selectedPromoteStudent: SelectedPromotedStudent,
          tempSelectedPromoteStudent: SelectedPromotedStudent,
        });
      case actions.ActionTypes.CLEAR_ALL_STUDENT_LIST:
        let tempClearAllPromoteStudent = state.promoteStudent;
        if (state.promoteStudent) {
          tempClearAllPromoteStudent = tempClearAllPromoteStudent.map(_data => {
            _data['isChecked'] = false;
            return _data;
          });
        }
        return Object.assign({}, state, {
          promoteStudent: tempClearAllPromoteStudent,
          selectedPromoteStudent: [],
          tempSelectedPromoteStudent: [],
        });
      case actions.ActionTypes.CREATE_PROMOTE_STUDENT:
        return Object.assign({}, state, {
          createPromoteStudentLoading: true,
          createPromoteStudentLoaded: false,
          createPromoteStudentFailed: false,
        });
  
      case actions.ActionTypes.CREATE_PROMOTE_STUDENT_SUCCESS:
        return Object.assign({}, state, {
          createPromoteStudent: payload,
          createPromoteStudentLoading: false,
          createPromoteStudentLoaded: true,
          createPromoteStudentFailed: false,
        });
  
      case actions.ActionTypes.CREATE_PROMOTE_STUDENT_FAIL:
        return Object.assign({}, state, {
          createPromoteStudentLoading: false,
          createPromoteStudentLoaded: false,
          createPromoteStudentFailed: true,
        });
      // search student
      case actions.ActionTypes.SEARCH_PROMOTE_STUDENT:
        let tempStudentSearch = state.tempSelectedPromoteStudent;
        const searchStudent = payload.toLowerCase();
        tempStudentSearch = filter(tempStudentSearch, (item) => {
          return item.studentName.toLowerCase().includes(searchStudent);
        });
        return Object.assign({}, state, {
          selectedPromoteStudent: tempStudentSearch,
        });
      // student message report
      case actions.ActionTypes.STUDENT_MESSAGE_DETAILS:
        return Object.assign({}, state, {
          studentMessageDetailsLoading: true,
        });
  
      case actions.ActionTypes.STUDENT_MESSAGE_DETAILS_SUCCESS:
        return Object.assign({}, state, {
          studentMessageDetails: payload.data,
          studentMessageDetailsLoading: false,
        });
  
      case actions.ActionTypes.STUDENT_MESSAGE_DETAILS_FAIL:
        return Object.assign({}, state, {
          studentMessageDetailsLoading: false,
        });
      // student message file
      case actions.ActionTypes.STUDENT_MESSAGE_FILE:
        return Object.assign({}, state, {
          studentMessageFile: [],
          studentMessageFileLoading: true,
        });
  
      case actions.ActionTypes.STUDENT_MESSAGE_FILE_SUCCESS:
        return Object.assign({}, state, {
          studentMessageFile: payload.data,
          studentMessageFileLoading: false,
        });
  
      case actions.ActionTypes.STUDENT_MESSAGE_FILE_FAIL:
        return Object.assign({}, state, {
          studentMessageFileLoading: false,
        });
      // import invalid staff
      case actions.ActionTypes.IMPORT_INVALID_STUDENT:
        return Object.assign({}, state, {
          importInvalidStudent: {},
          importInvalidStudentLoading: true,
        });
  
      case actions.ActionTypes.IMPORT_INVALID_STUDENT_SUCCESS:
        return Object.assign({}, state, {
          importInvalidStudent: payload,
          importInvalidStudentLoading: false,
        });
  
      case actions.ActionTypes.IMPORT_INVALID_STUDENT_FAIL:
        return Object.assign({}, state, {
          importInvalidStudent: {},
          importInvalidStudentLoading: false,
        });
  
      // id card generate
      case actions.ActionTypes.ID_CARD_GENERATE:
        return Object.assign({}, state, {
          idCardGenerate: payload,
          idCardGenerateLoading: true,
          idCardGenerateLoaded: false,
          idCardGenerateFailed: false,
        });
  
      case actions.ActionTypes.IMPORT_INVALID_STUDENT_SUCCESS:
        return Object.assign({}, state, {
          idCardGenerateLoading: false,
          idCardGenerateLoaded: true,
          idCardGenerateFailed: false,
        });
  
      case actions.ActionTypes.ID_CARD_GENERATE_FAIL:
        return Object.assign({}, state, {
          idCardGenerateLoading: false,
          idCardGenerateLoaded: false,
          idCardGenerateFailed: true,
        });
      case actions.ActionTypes.CLEAR_ALL_SECTION:
        return Object.assign({}, state, {
          sectionList: [],
  
        });
  
      case actions.ActionTypes.CLEAR_STUDENT_LIST:
        return Object.assign({}, state, {
          studentList: [],
          getStudentCount: [],
          deletedStudentList: [],
  
        });
      // STUDENT VOICE REPORT
      case actions.ActionTypes.STUDENT_VOICE_REPORT:
        return Object.assign({}, state, {
          studentVoiceReportLoading: true,
        });
  
      case actions.ActionTypes.STUDENT_VOICE_REPORT_SUCCESS:
        return Object.assign({}, state, {
          studentVoiceReport: payload.data,
          studentVoiceReportLoading: false,
        });
  
      case actions.ActionTypes.STUDENT_VOICE_REPORT_FAIL:
        return Object.assign({}, state, {
          studentVoiceReportLoading: false,
        });
      case actions.ActionTypes.SUBJECT_LIST:
        return Object.assign({}, state, {
          subjectListLoading: true,
          subjectListLoaded: false,
          subjectListFailed: false
        });
  
      case actions.ActionTypes.SUBJECT_LIST_SUCCESS:
        return Object.assign({}, state, {
          subjectList: payload.data,
          subjectListLoading: false,
          subjectListLoaded: true,
          subjectListFailed: false
        });
  
      case actions.ActionTypes.SUBJECT_LIST_FAIL:
        return Object.assign({}, state, {
          subjectListLoading: false,
          subjectListLoaded: false,
          subjectListFailed: true
        });
  
      case actions.ActionTypes.GET_EXAMNAMES:
        return Object.assign({}, state, {
          GetExamNamesLoading: true,
          GetExamNamesLoaded: false,
          GetExamNamesFailed: false
        });
  
      case actions.ActionTypes.GET_EXAMNAMES_SUCCESS:
        return Object.assign({}, state, {
          GetExamNames: payload.data,
          GetExamNamesLoading: false,
          GetExamNamesLoaded: true,
          GetExamNamesFailed: false
        });
  
      case actions.ActionTypes.GET_EXAMNAMES_FAIL:
        return Object.assign({}, state, {
          GetExamNamesLoading: false,
          GetExamNamesLoaded: false,
          GetExamNamesFailed: true
        });
  
      case actions.ActionTypes.STDSEC_PROGRESS:
        return Object.assign({}, state, {
          GetStdSecProgressLoading: true,
          GetStdSecProgressLoaded: false,
          GetStdSecProgressFailed: false
        });
  
      case actions.ActionTypes.STDSEC_PROGRESS_SUCCESS:
        return Object.assign({}, state, {
          GetStdSecProgress: payload.data,
          GetStdSecProgressLoading: false,
          GetStdSecProgressLoaded: true,
          GetStdSecProgressFailed: false
        });
  
      case actions.ActionTypes.STDSEC_PROGRESS_FAIL:
        return Object.assign({}, state, {
          GetStdSecProgressLoading: false,
          GetStdSecProgressLoaded: false,
          GetStdSecProgressFailed: true
        });
  
      case actions.ActionTypes.STUDENT_LIST_PROGRESS:
        return Object.assign({}, state, {
          StudentListProgressLoading: true,
          StudentListProgressLoaded: false,
          StudentListProgressFailed: false
        });
  
      case actions.ActionTypes.STUDENT_LIST_PROGRESS_SUCCESS:
        return Object.assign({}, state, {
          StudentListProgress: payload.data.dataResult,
          StudentListProgressLoading: false,
          StudentListProgressLoaded: true,
          StudentListProgressFailed: false
        });
  
      case actions.ActionTypes.STUDENT_LIST_PROGRESS_FAIL:
        return Object.assign({}, state, {
          StudentListProgressLoading: false,
          StudentListProgressLoaded: false,
          StudentListProgressFailed: true
        });
  
      case actions.ActionTypes.EXAM_RESULT_ANALYSIS:
        return Object.assign({}, state, {
          examResultAnalysisLoading: true,
          examResultAnalysisLoaded: false,
          examResultAnalysisFailed: false
        });
  
      case actions.ActionTypes.EXAM_RESULT_ANALYSIS_SUCCESS:
        return Object.assign({}, state, {
          examResultAnalysis: payload.data,
          examResultAnalysisLoading: false,
          examResultAnalysisLoaded: true,
          examResultAnalysisFailed: false
        });
  
      case actions.ActionTypes.EXAM_RESULT_ANALYSIS_FAIL:
        return Object.assign({}, state, {
          examResultAnalysisLoading: false,
          examResultAnalysisLoaded: false,
          examResultAnalysisFailed: true
        });
  
      case actions.ActionTypes.PROGRESS_CARD:
        return Object.assign({}, state, {
          progressCardLoading: true,
          progressCardLoaded: false,
          progressCardFailed: false
        });
  
      case actions.ActionTypes.PROGRESS_CARD_SUCCESS:
        return Object.assign({}, state, {
          progressCard: payload.data,
          progressCardLoading: false,
          progressCardLoaded: true,
          progressCardFailed: false
        });
  
      case actions.ActionTypes.PROGRESS_CARD_FAIL:
        return Object.assign({}, state, {
          progressCardLoading: false,
          progressCardLoaded: false,
          progressCardFailed: true
        });
  
      //studyCertificate
      case actions.ActionTypes.STUDY_CERTIFICATE:
        return Object.assign({}, state, {
          studyCertificateLoading: true,
          studyCertificateLoaded: false,
          studyCertificateFailed: false
        });
  
      case actions.ActionTypes.STUDY_CERTIFICATE_SUCCESS:
        console.log('Reducerdata', payload.data);
        return Object.assign({}, state, {
          studyCertificate: payload.data,
          studyCertificateLoading: false,
          studyCertificateLoaded: true,
          studyCertificateFailed: false
        });
  
      case actions.ActionTypes.STUDY_CERTIFICATE_FAIL:
        return Object.assign({}, state, {
          studyCertificateLoading: false,
          studyCertificateLoaded: false,
          studyCertificateFailed: true
        });
  
  
      // Country LIST
  
      case actions.ActionTypes.COUNTRY_LIST: {
        return Object.assign({}, state, {
          countryListLoading: true,
          countryListLoaded: false,
          countryListFailed: false,
        });
      }
  
      case actions.ActionTypes.COUNTRY_LIST_SUCCESS: {
        return Object.assign({}, state, {
          countryList: payload.data,
          countryListLoading: false,
          countryListLoaded: true,
          countryListFailed: false,
        });
      }
  
  
      case actions.ActionTypes.COUNTRY_LIST_FAIL: {
        return Object.assign({}, state, {
          countryListLoading: false,
          countryListLoaded: false,
          countryListFailed: true,
        });
      }
  
      // Region LIST
  
      case actions.ActionTypes.REGION_LIST: {
        return Object.assign({}, state, {
          regionListLoading: true,
          regionListLoaded: false,
          regionListFailed: false,
        });
      }
  
      case actions.ActionTypes.REGION_LIST_SUCCESS: {
        return Object.assign({}, state, {
          regionList: payload.data,
          regionListLoading: true,
          regionListLoaded: true,
          regionListFailed: false,
        });
      }
  
  
      case actions.ActionTypes.REGION_LIST_FAIL: {
        return Object.assign({}, state, {
          regionListLoading: true,
          regionListLoaded: false,
          regionListFailed: true,
        });
      }
  
      // City LIST
  
      case actions.ActionTypes.CITY_LIST: {
        return Object.assign({}, state, {
          cityListLoading: true,
          cityListLoaded: false,
          cityListFailed: false,
        });
      }
  
      case actions.ActionTypes.CITY_LIST_SUCCESS: {
        return Object.assign({}, state, {
          cityList: payload.data,
          cityListLoading: false,
          cityListLoaded: true,
          cityListFailed: false,
        });
      }
  
  
      case actions.ActionTypes.CITY_LIST_FAIL: {
        return Object.assign({}, state, {
          cityListLoading: false,
          cityListLoaded: false,
          cityListFailed: true,
        });
      }
  
  
      default: {
        return state;
      }
    }
  }
  
  /**
   * export values
   */

  export const editStudent = (state: StudentFormState) =>
  state.editStudent;

  export const editStudentLoading = (state: StudentFormState) =>
    state.editStudentLoading;
  export const addStudentLoading = (state: StudentFormState) =>
    state.addStudentLoading;
  export const addStudentLoaded = (state: StudentFormState) =>
    state.addStudentLoaded;
  export const addStudentFailed = (state: StudentFormState) =>
    state.addStudentFailed;
  
  export const studentList = (state: StudentFormState) => state.studentList;
  export const studentListLoading = (state: StudentFormState) =>
    state.studentListLoading;
  export const studentListLoaded = (state: StudentFormState) =>
    state.studentListLoaded;
  export const studentListFailed = (state: StudentFormState) =>
    state.studentListFailed;
  
  export const LeaveRequestList = (state: StudentFormState) => state.LeaveRequestList;
  export const LeaveRequestListLoading = (state: StudentFormState) =>
    state.LeaveRequestListLoading;
  export const LeaveRequestListLoaded = (state: StudentFormState) =>
    state.LeaveRequestListLoaded;
  export const LeaveRequestListFailed = (state: StudentFormState) =>
    state.LeaveRequestListFailed;
  
  export const getLeaveRequestListCount = (state: StudentFormState) =>
    state.getleaverequestlistcount;
  export const getLeaveRequestListCountLoading = (state: StudentFormState) =>
    state.getleaverequestlistcountLoading;
  export const getLeaveRequestListCountLoaded = (state: StudentFormState) =>
    state.getleaverequestlistcountLoaded;
  export const getLeaveRequestListCountFailed = (state: StudentFormState) =>
    state.getleaverequestlistcountFailed;
  
  
  export const invalidStudentListLoading = (state: StudentFormState) =>
    state.invalidStudentListLoading;
  export const invalidStudentListLoaded = (state: StudentFormState) =>
    state.invalidStudentListLoaded;
  export const invalidStudentListFailed = (state: StudentFormState) =>
    state.invalidStudentListFailed;
  
  export const standardList = (state: StudentFormState) =>
    state.standardList;
  export const standardListLoading = (state: StudentFormState) =>
    state.standardListLoading;
  export const standardListLoaded = (state: StudentFormState) =>
    state.standardListLoaded;
  export const standardListFailed = (state: StudentFormState) =>
    state.standardListFailed;
  
  export const sectionList = (state: StudentFormState) => state.sectionList;
  export const sectionListLoading = (state: StudentFormState) =>
    state.sectionListLoading;
  export const sectionListLoaded = (state: StudentFormState) =>
    state.sectionListLoaded;
  export const sectionListFailed = (state: StudentFormState) =>
    state.sectionListFailed;
  
  export const sectionSiblingList = (state: StudentFormState) => state.sectionSiblingList;
  export const sectionSiblingListLoading = (state: StudentFormState) =>
    state.sectionSiblingListLoading;
  export const sectionSiblingListLoaded = (state: StudentFormState) =>
    state.sectionSiblingListLoaded;
  export const sectionSiblingListFailed = (state: StudentFormState) =>
    state.sectionSiblingListFailed;
  
  export const mediumList = (state: StudentFormState) => state.mediumList;
  export const mediumOfStudentLoading = (state: StudentFormState) =>
    state.mediumOfStudentLoading;
  export const mediumOfStudentLoaded = (state: StudentFormState) =>
    state.mediumOfStudentLoaded;
  export const mediumOfStudentFailed = (state: StudentFormState) =>
    state.mediumOfStudentFailed;
  
  export const religionList = (state: StudentFormState) =>
    state.religionList;
  export const religionListLoading = (state: StudentFormState) =>
    state.religionListLoading;
  export const religionListLoaded = (state: StudentFormState) =>
    state.religionListLoaded;
  export const religionListFailed = (state: StudentFormState) =>
    state.religionListFailed;
  
  export const communityList = (state: StudentFormState) =>
    state.communityList;
  export const communityListLoading = (state: StudentFormState) =>
    state.communityListLoading;
  export const communityListLoaded = (state: StudentFormState) =>
    state.communityListLoaded;
  export const communityListFailed = (state: StudentFormState) =>
    state.communityListFailed;
  
  export const bloodGroupList = (state: StudentFormState) =>
    state.bloodGroupList;
  export const bloodGroupListLoading = (state: StudentFormState) =>
    state.bloodGroupListLoading;
  export const bloodGroupListLoaded = (state: StudentFormState) =>
    state.bloodGroupListLoaded;
  export const bloodGroupListFailed = (state: StudentFormState) =>
    state.bloodGroupListFailed;
  
  export const feesPaymentType = (state: StudentFormState) =>
    state.feesPaymentType;
  export const feesPaymentTypeLoading = (state: StudentFormState) =>
    state.feesPaymentTypeLoading;
  export const feesPaymentTypeLoaded = (state: StudentFormState) =>
    state.feesPaymentTypeLoaded;
  export const feesPaymentTypeFailed = (state: StudentFormState) =>
    state.feesPaymentTypeFailed;
  
  export const getStudentDetails = (state: StudentFormState) =>
    state.getStudentDetails;
  export const getStudentDetailsLoading = (state: StudentFormState) =>
    state.getStudentDetailsLoading;
  export const getStudentDetailsLoaded = (state: StudentFormState) =>
    state.getStudentDetailsLoaded;
  export const getStudentDetailsFailed = (state: StudentFormState) =>
    state.getStudentDetailsFailed;
  
  export const getStudentCount = (state: StudentFormState) =>
    state.getStudentCount;
  export const getStudentCountLoading = (state: StudentFormState) =>
    state.getStudentCountLoading;
  export const getStudentCountLoaded = (state: StudentFormState) =>
    state.getStudentCountLoaded;
  export const getStudentCountFailed = (state: StudentFormState) =>
    state.getStudentCountFailed;
  
  export const deleteStudent = (state: StudentFormState) =>
    state.deleteStudent;
  export const deleteStudentLoading = (state: StudentFormState) =>
    state.deleteStudentLoading;
  export const deleteStudentLoaded = (state: StudentFormState) =>
    state.deleteStudentLoaded;
  export const deleteStudentFailed = (state: StudentFormState) =>
    state.deleteStudentFailed;
  
  export const uploadedDocument = (state: StudentFormState) =>
    state.uploadedDocument;
  export const uploadDocumentLoading = (state: StudentFormState) =>
    state.uploadDocumentLoading;
  export const uploadDocumentLoaded = (state: StudentFormState) =>
    state.uploadDocumentLoaded;
  export const uploadDocumentFailed = (state: StudentFormState) =>
    state.uploadDocumentFailed;
  
  export const deletedStudentList = (state: StudentFormState) =>
    state.deletedStudentList;
  export const deletedStudentListLoading = (state: StudentFormState) =>
    state.deletedStudentListLoading;
  export const deletedStudentListLoaded = (state: StudentFormState) =>
    state.deletedStudentListLoaded;
  export const deletedStudentListFailed = (state: StudentFormState) =>
    state.deletedStudentListFailed;
  
  export const revertStudent = (state: StudentFormState) =>
    state.revertStudent;
  export const revertStudentLoading = (state: StudentFormState) =>
    state.revertStudentLoading;
  export const revertStudentLoaded = (state: StudentFormState) =>
    state.revertStudentLoaded;
  export const revertStudentFailed = (state: StudentFormState) =>
    state.revertStudentFailed;
  export const studentAdded = (state: StudentFormState) =>
    state.studentAdded;
  
  export const getSiblingDetails = (state: StudentFormState) =>
    state.getSiblingDetails;
  
  export const routeMasterList = (state: StudentFormState) =>
    state.routeMasterList;
  export const routeMasterListLoading = (state: StudentFormState) =>
    state.routeMasterListLoading;
  export const routeMasterListLoaded = (state: StudentFormState) =>
    state.routeMasterListLoaded;
  export const routeMasterListFailed = (state: StudentFormState) =>
    state.routeMasterListFailed;
  
  export const stopingPointList = (state: StudentFormState) =>
    state.stopingPointList;
  export const stopingPointListLoading = (state: StudentFormState) =>
    state.stopingPointListLoading;
  export const stopingPointListLoaded = (state: StudentFormState) =>
    state.stopingPointListLoaded;
  export const stopingPointListFailed = (state: StudentFormState) =>
    state.stopingPointListFailed;
  
  export const exportStudent = (state: StudentFormState) =>
    state.exportStudent;
  export const exportStudentLoading = (state: StudentFormState) =>
    state.exportStudentLoading;
  export const exportStudentLoaded = (state: StudentFormState) =>
    state.exportStudentLoaded;
  export const exportStudentFailed = (state: StudentFormState) =>
    state.exportStudentFailed;
  
  export const routeFeeList = (state: StudentFormState) =>
    state.routeFeeList;
  export const routeFeeListLoading = (state: StudentFormState) =>
    state.routeFeeListLoading;
  export const getMonthList = (state: StudentFormState) => state.monthList;
  
  export const AcademicList = (state: StudentFormState) =>
    state.AcademicList;
  export const AcademicListLoading = (state: StudentFormState) =>
    state.AcademicListLoading;
  
  export const promoteStudent = (state: StudentFormState) =>
    state.promoteStudent;
  export const promoteStudentLoading = (state: StudentFormState) =>
    state.promoteStudentLoading;
  export const selectedPromoteStudent = (state: StudentFormState) =>
    state.selectedPromoteStudent;
  
  export const createPromoteStudent = (state: StudentFormState) =>
    state.createPromoteStudent;
  
  export const createPromoteStudentLoading = (state: StudentFormState) =>
    state.createPromoteStudentLoading;
  
  export const studentMessageDetails = (state: StudentFormState) =>
    state.studentMessageDetails;
  export const studentMessageDetailsLoading = (state: StudentFormState) =>
    state.studentMessageDetailsLoading;
  
  export const studentMessageFile = (state: StudentFormState) =>
    state.studentMessageFile;
  export const studentMessageFileLoading = (state: StudentFormState) =>
    state.studentMessageFileLoading;
  export const importInvalidStudent = (state: StudentFormState) =>
    state.importInvalidStudent;
  export const importInvalidStudentLoading = (state: StudentFormState) =>
    state.importInvalidStudentLoading;
  
  
  export const idCardGenerate = (state: StudentFormState) =>
    state.idCardGenerate;
  
  export const tempStandardList = (state: StudentFormState) => state.tempStandardList;
  
  export const studentVoiceReportLoading = (state: StudentFormState) => state.studentVoiceReportLoading;
  export const studentVoiceReport = (state: StudentFormState) => state.studentVoiceReport;
  export const subjectList = (state: StudentFormState) => state.subjectList;
  export const subjectListLoading = (state: StudentFormState) =>
    state.subjectListLoading;
  export const subjectListLoaded = (state: StudentFormState) =>
    state.subjectListLoaded;
  export const subjectListFailed = (state: StudentFormState) =>
    state.subjectListFailed;
  
  export const GetExamNames = (state: StudentFormState) =>
    state.GetExamNames;
  export const GetExamNamesLoading = (state: StudentFormState) =>
    state.GetExamNamesLoading;
  export const GetExamNamesLoaded = (state: StudentFormState) =>
    state.GetExamNamesLoaded;
  export const GetExamNamesFailed = (state: StudentFormState) =>
    state.GetExamNamesFailed;
  
  export const GetStdSecProgress = (state: StudentFormState) =>
    state.GetStdSecProgress;
  export const GetStdSecProgressLoading = (state: StudentFormState) =>
    state.GetStdSecProgressLoading;
  export const GetStdSecProgressLoaded = (state: StudentFormState) =>
    state.GetStdSecProgressLoaded;
  export const GetStdSecProgressFailed = (state: StudentFormState) =>
    state.GetStdSecProgressFailed;
  
  export const StudentListProgress = (state: StudentFormState) =>
    state.StudentListProgress;
  export const StudentListProgressLoading = (state: StudentFormState) =>
    state.StudentListProgressLoading;
  export const StudentListProgressLoaded = (state: StudentFormState) =>
    state.StudentListProgressLoaded;
  export const StudentListProgressFailed = (state: StudentFormState) =>
    state.StudentListProgressFailed;
  
  export const examResultAnalysis = (state: StudentFormState) =>
    state.examResultAnalysis;
  export const examResultAnalysisLoading = (state: StudentFormState) =>
    state.examResultAnalysisLoading;
  export const examResultAnalysisLoaded = (state: StudentFormState) =>
    state.examResultAnalysisLoaded;
  export const examResultAnalysisFailed = (state: StudentFormState) =>
    state.examResultAnalysisFailed;
  
  export const progressCard = (state: StudentFormState) =>
    state.progressCard;
  export const progressCardLoading = (state: StudentFormState) =>
    state.progressCardLoading;
  export const progressCardLoaded = (state: StudentFormState) =>
    state.progressCardLoaded;
  export const progressCardFailed = (state: StudentFormState) =>
    state.progressCardFailed;
  
  export const subjectSameForAllSection = (state: StudentFormState) => state.subjectSameForAllSection;
  
  // country list
  export const countryList = (state: StudentFormState) => state.countryList;
  export const countryListLoading = (state: StudentFormState) => state.countryListLoading;
  export const countryListLoaded = (state: StudentFormState) => state.countryListLoaded;
  export const countryListFailed = (state: StudentFormState) => state.countryListFailed;
  // region list
  
  export const regionList = (state: StudentFormState) => state.regionList;
  export const regionListLoading = (state: StudentFormState) => state.regionListLoading;
  export const regionListLoaded = (state: StudentFormState) => state.regionListLoaded;
  export const regionListFailed = (state: StudentFormState) => state.regionListFailed;
  // city list
  
  export const cityList = (state: StudentFormState) => state.cityList;
  export const cityListLoading = (state: StudentFormState) => state.cityListLoading;
  export const cityListLoaded = (state: StudentFormState) => state.cityListLoaded;
  export const cityListFailed = (state: StudentFormState) => state.cityListFailed;
  
  
  export const studyCertificate = (state: StudentFormState) =>
    state.studyCertificate;
  export const studyCertificateLoading = (state: StudentFormState) =>
    state.studyCertificateLoading;
  export const studyCertificateLoaded = (state: StudentFormState) =>
    state.studyCertificateLoaded;
  export const studyCertificateFailed = (state: StudentFormState) =>
    state.studyCertificateFailed;
  //studyCertificate
  
  export const absenteesList = (state: StudentFormState) =>
    state.absenteesList;
  export const absenteesListLoading = (state: StudentFormState) =>
    state.absenteesListLoading;
  export const absenteesListLoaded = (state: StudentFormState) =>
    state.absenteesListLoaded;
  export const absenteesListFailed = (state: StudentFormState) =>
    state.absenteesListFailed;
  
  export const absenteesListParticularClass = (state: StudentFormState) =>
    state.absenteesListParticularClass;
  export const absenteesListParticularClassLoading = (state: StudentFormState) =>
    state.absenteesListParticularClassLoading;
  export const absenteesListParticularClassLoaded = (state: StudentFormState) =>
    state.absenteesListParticularClassLoaded;
  export const absenteesListParticularClassFailed = (state: StudentFormState) =>
    state.absenteesListParticularClassFailed;
  
  export const prestudentAdded = (state: StudentFormState) =>
    state.prestudentAdded;
  export const preaddStudentLoading = (state: StudentFormState) =>
    state.preaddStudentLoading;
  export const preaddStudentLoaded = (state: StudentFormState) =>
    state.preaddStudentLoaded;
  export const preaddStudentFailed = (state: StudentFormState) =>
    state.preaddStudentFailed;