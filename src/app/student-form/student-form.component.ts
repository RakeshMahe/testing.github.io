import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy
} from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { get } from 'lodash';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import * as moment from 'moment';
import * as $ from 'jquery';
import { StudentManagementSandbox } from './student-form.sandbox';
import { transform, isEqual, isObject, difference, _ } from 'lodash';

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY'
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  }
};

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ],
})
export class StudentFormComponent implements OnInit {
  title = 'studentform';


  @ViewChild('filePath') filePath: ElementRef;
  @ViewChild('filePathDocument') filePathDocument: ElementRef;

  public config: SwiperConfigInterface = {};
  private subscriptions: Array<Subscription> = [];
  private Demosubscriptions: Array<Subscription> = [];
  UploadDocumentFiles: any = [];

  instituteId;
  //  form variables
  createStudentForm: FormGroup;
  submitted = false;
  startDate = new Date(2000, 0, 1);

  //  upload image variables
  files: any;
  file: any;
  fileType: any;
  fileTypeError: any;
  isSelected = false;
  postUrl = 'assets/imgs/users.svg';
  imagePost = '';
  isLateFee: boolean;
  isSibling = false;
  standardId = 0;
  maxDate1: any;
  maxDate: any;
  minDate: any;

  //  upload document variables
  documentFiles: any;
  documentFile: File;
  documentFileType: any;
  isDefault = true;
  documentName: any;
  IsTransportChecked = false;
  IsNewImageUpload = false;
  getStudentImage: any;

  options: any;
  studentId: any;
  studentDetails: any;
  isBusStudent = 0;
  aa = [];
  scStudent: boolean;
  nonScStudent: boolean;

  //  fee month
  feemonth = [];
  feeMonthDetails = [];
  isChecked = [];
  allChecked = false;
  selectedMonths = [];
  selectedMonth = false;
  previousMonth = [];
  setMonths = [];
  isSameAddress = false;
  fileUrl: any;
  enableErp: any;
  emptySectionDisplay = 0;

  studentConfig = {
    displayKey: 'studentName',
    value: 'studentId',
    search: true
  };

  //  setting drop down initial config
  standardConfig = {
    displayKey: 'classDisplayName',
    value: 'id',
    search: true,
    customComparator: (a, b) => {
      const keyA = a.standardLevelId;
      const keyB = b.standardLevelId;
      if (keyA < keyB) {
        return -1;
      }
      if (keyA > keyB) {
        return 1;
      }
      return 0;
    }
  };
  sectionConfig = {
    displayKey: 'sectionDisplayName',
    value: 'id',
    search: true,
    customComparator: (a, b) => {
      const keyA = a.sectionName;
      const keyB = b.sectionName;
      if (keyA < keyB) {
        return -1;
      }
      if (keyA > keyB) {
        return 1;
      }
      return 0;
    }
  };
  studentTypeConfig = { displayKey: 'name', value: 'id', search: true };
  mediumOfStudentConfig = {
    displayKey: 'medium',
    value: 'mediumId',
    search: true,
    customComparator: (a, b) => {
      const keyA = a.mediumId;
      const keyB = b.mediumId;
      if (keyA < keyB) {
        return -1;
      }
      if (keyA > keyB) {
        return 1;
      }
      return 0;
    }
  };
  religionConfig = {
    displayKey: 'religion',
    value: 'religionId',
    search: true,
    customComparator: (a, b) => {
      const keyA = a.religionId;
      const keyB = b.religionId;
      if (keyA < keyB) {
        return -1;
      }
      if (keyA > keyB) {
        return 1;
      }
      return 0;
    }
  };
  communityConfig = {
    displayKey: 'community',
    value: 'communityId',
    search: true,
    customComparator: (a, b) => {
      const keyA = a.communityId;
      const keyB = b.communityId;
      if (keyA < keyB) {
        return -1;
      }
      if (keyA > keyB) {
        return 1;
      }
      return 0;
    }
  };
  bloodGroupConfig = {
    displayKey: 'bloodGroup',
    value: 'bloodGroupId',
    search: true,
    customComparator: (a, b) => {
      const keyA = a.bloodGroupId;
      const keyB = b.bloodGroupId;
      if (keyA < keyB) {
        return -1;
      }
      if (keyA > keyB) {
        return 1;
      }
      return 0;
    }
  };
  paymentTypeConfig = {
    displayKey: 'feesPaymentType',
    value: 'paymentTypeId',
    search: true,
    customComparator: (a, b) => {
      const keyA = a.paymentTypeId;
      const keyB = b.paymentTypeId;
      if (keyA < keyB) {
        return -1;
      }
      if (keyA > keyB) {
        return 1;
      }
      return 0;
    }
  };
  routeListConfig = {
    displayKey: 'routeName',
    value: 'id',
    search: true,
    customComparator: (a, b) => {
      const keyA = a.id;
      const keyB = b.id;
      if (keyA < keyB) {
        return -1;
      }
      if (keyA > keyB) {
        return 1;
      }
      return 0;
    }
  };
  stopingPointConfig = {
    displayKey: 'stopName',
    value: 'id',
    search: true,
    customComparator: (a, b) => {
      const keyA = a.stopSequence;
      const keyB = b.stopSequence;
      if (keyA < keyB) {
        return -1;
      }
      if (keyA > keyB) {
        return 1;
      }
      return 0;
    }
  };
  feeTypeConfig = {
    displayKey: 'routeFeeTypeName',
    value: 'id',
    search: true,
    customComparator: (a, b) => {
      const keyA = a.routeFeeTypeId;
      const keyB = b.routeFeeTypeId;
      if (keyA < keyB) {
        return -1;
      }
      if (keyA > keyB) {
        return 1;
      }
      return 0;
    }
  };
  constructor(
    public fb: FormBuilder,
    public route: ActivatedRoute,
    private toastr: ToastrService,
    public studentManagementSandbox: StudentManagementSandbox,
  ) {
    // this.enableErp = JSON.parse(localStorage.getItem('instituteDetails'));
    // this.getMonthSubscribe();
    
  }

  ngOnInit() {

    if (this.route && this.route.params) {
      this.route.params.subscribe(param => {
        debugger;
        if (param.id) {
          this.studentId = param.id;
          this.getDocuments();
        }
      });
    }
    let convertMinDate = new Date(new Date().setFullYear(new Date().getFullYear() - 20));
    console.log('convertMinDate',convertMinDate);
    this.minDate = '2000-01-01';  // moment(convertMinDate).format("YYYY-MM-DD");
    let convertMaxDate = new Date();
    this.maxDate = moment(convertMaxDate).format("YYYY-MM-DD");
    let convertMaxDate1 = new Date(new Date().setFullYear(new Date().getFullYear() - 2));
    this.maxDate1 = moment(convertMaxDate1).format("YYYY-MM-DD");
    this.initCreateForm();
    this.fileUrl = environment.baseUrl;
    this.createStudentForm.controls['routeId'].disable();
    this.createStudentForm.controls['stopId'].disable();
    this.createStudentForm.controls['transportFeeType'].disable();
    this.createStudentForm.controls['studentType'].setValue({
      id: '1',
      name: 'Old'
    });
    // this.standardList();
    // this.mediumOfStudent();
    this.religionList();
    this.communityList();
    this.bloodGroupList();
    // this.feesPaymentType();
    this.emptySectionList();
    // this.masterRouteList();
    // this.studentManagementSandbox.getRouteFeeList({ limit: '', offset: 0 });
    if (this.studentId) {
      this.studentManagementSandbox.getStudentDetails(this.studentId);
    }
    this.options = [
      {
        id: '1',
        name: 'Old'
      },
      {
        id: '2',
        name: 'New'
      }
    ];

    if (this.studentId) {
      debugger;
      this.setStudentDetails();
      // this.studentManagementSandbox.getMonthList({});
    }
    // this.commonsanbox.getMonthList({});
    this.createStudentForm.controls.siblingStandard.disable();
    this.createStudentForm.controls.siblingSection.disable();
    this.createStudentForm.controls.siblingId.disable();
  }

  minimumDate: any;
  maximumDate: any;
  eventDate: any;
  comapareDate(event, minimumDate, maximumDate, fieldName) {
    this.eventDate = event.target.value;
    debugger;
    if (this.eventDate && this.eventDate != undefined && this.eventDate != '' && this.eventDate != null) {

      this.minimumDate = minimumDate;
      this.maximumDate = maximumDate;

      if (this.minimumDate == '0') {
        this.minimumDate = moment(new Date(new Date().setFullYear(new Date().getFullYear() - 100))).format('YYYY/MM/DD');
      } else {
        this.minimumDate = moment(this.minimumDate, 'YYYY-MM-DD').format('YYYY/MM/DD');

      }

      if (this.maximumDate == '0') {
        this.maximumDate = moment(new Date(new Date().setFullYear(new Date().getFullYear() + 100))).format('YYYY/MM/DD');
      } else {
        this.maximumDate = moment(this.maximumDate, 'YYYY-MM-DD').format('YYYY/MM/DD');
      }

      this.eventDate = moment(event.target.value, 'DD/MM/YYYY').format('YYYY/MM/DD');

      if (this.eventDate >= this.minimumDate && this.eventDate <= this.maximumDate)
        return true;
      else {
        event.target.value = null;
        alert("Invalid " + fieldName);
        return false;
      }

    }

  }

  public initCreateForm(): void {
    this.createStudentForm = this.fb.group({
      siblingStandard: [''],
      siblingSection: [''],
      isSameAddress: [false],
      studentName: ['', Validators.required],
      standard: ['', Validators.required],
      section: ['', Validators.required],
      admissionNo: [''],
      admissionDate: ['', Validators.required],
      gender: ['', Validators.required],
      studentType: ['', Validators.required],
      medium: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      dateOfJoining: ['', Validators.required],
      primaryMobileNo: ['', Validators.required],
      secondaryMobileNo: ['', Validators.required],
      whatsappNumber: ['', Validators.required],
      email: [''],
      emisNumber: [''],
      studentAadharNo: [''],
      rteNumber: [''],
      bhavishyaJyothiNo: [''],
      aplNumber: [''],
      stsNumber: [''],
      schoolDiseNumber: [''],
      scSt: [''],
      nccScoutGuide: [''],
      religion: [''],
      community: [''],
      communityCertificateNo: [''],
      nationality: [''],
      caste: [''],
      subCaste: [''],
      residentialAddress: [''],
      residentialCity: [''],
      residentialState: [''],
      residentialCountry: [''],
      residentialPincode: [''],
      permanentAddress: [''],
      permanentCity: [''],
      permanentState: [''],
      permanentCountry: [''],
      permanentPincode: [''],
      bloodGroup: [''],
      height: [''],
      weight: [''],
      markIdentity1: [''],
      markIdentity2: [''],
      medicalInspection: [''],
      fatherName: [''],
      fatherOccupation: [''],
      fatherIncome: [''],
      fatherAadharNo: [''],
      motherName: [''],
      motherOccupation: [''],
      motherIncome: [''],
      motherAadharNo: [''],
      incomeCertificateNo: [''],
      bankAccountNo: [''],
      bankName: [''],
      ifscCode: [''],
      studentHostel: [''],
      feesPaymentType: [''],
      scholorship: [''],
      routeId: ['', Validators.required],
      stopId: ['', Validators.required],
      transportFeeType: ['', Validators.required],
      remarks: [''],
      siblingId: [''],
      physicallychalleged: [''],
      medicalcondition: [''],
      acheivements: [''],
      hobbies: [''],
      vaccination: [''],
    });
  }
  address(event) {
    if (this.isSameAddress === true) {
      this.subscriptions.push(this.createStudentForm.controls['residentialAddress'].valueChanges.subscribe(val => {
        if (this.isSameAddress === true) {
          this.createStudentForm.controls['permanentAddress'].setValue(val);
        }
      }));
    }
  }
  city(event) {
    if (this.isSameAddress === true) {
      this.subscriptions.push(this.createStudentForm.controls['residentialCity'].valueChanges.subscribe(val => {
        if (this.isSameAddress === true) {
          this.createStudentForm.controls['permanentCity'].setValue(val);
        }
      }));
    }
  }
  state(event) {
    if (this.isSameAddress === true) {
      this.subscriptions.push(this.createStudentForm.controls['residentialState'].valueChanges.subscribe(val => {
        if (this.isSameAddress === true) {
          this.createStudentForm.controls['permanentState'].setValue(val);
        }
      }));
    }
  }
  country(event) {
    if (this.isSameAddress === true) {
      this.subscriptions.push(this.createStudentForm.controls['residentialCountry'].valueChanges.subscribe(val => {
        if (this.isSameAddress === true) {
          this.createStudentForm.controls['permanentCountry'].setValue(val);
        }
      }));
    }
  }
  pincode(event) {
    if (this.isSameAddress === true) {
      this.subscriptions.push(this.createStudentForm.controls['residentialPincode'].valueChanges.subscribe(val => {
        if (this.isSameAddress === true) {
          this.createStudentForm.controls['permanentPincode'].setValue(val);
        }
      }));
    }
  }
  // standardList() {
  //   debugger;
  //   this.studentManagementSandbox.standardList();
  // }
  // mediumOfStudent() {
  //   this.studentManagementSandbox.mediumOfStudent();
  // }
  religionList() {
    this.studentManagementSandbox.religionList();
  }
  communityList() {
    this.studentManagementSandbox.communityList();
  }
  bloodGroupList() {
    this.studentManagementSandbox.bloodGroupList();
  }
  // feesPaymentType() {
  //   this.studentManagementSandbox.feesPaymentType();
  // }

  enable(){
    this.createStudentForm.enable();
  }
  inputArray:any =[];
  PreparedArray:any =[];
  onSubmit(forms, document) {
    debugger
    this.enable();
    console.log('forms_Enabled', forms)
    const form = this.createStudentForm.getRawValue();
    const formData = this.createStudentForm.getRawValue();
    this.selectedMonths = [];
    console.log('feeeeee', form);
    this.feeMonthDetails.filter(element => {
      if (element.isSelected === true) {
        this.selectedMonths.push({ id: element.monthId, monthName: element.monthName, order: element.order });
      }
    });
    if (!formData.section.id || formData.section.id == undefined || formData.section.id == null) {
      $('html,body').animate(
        { scrollTop: $('#emptySectionValue').offset().top - 310 },
        'slow');
      return;
    }

    // this.selectedMonth = false;

    //   if (this.selectedMonths.length === 0 && this.IsTransportChecked) {
    //     console.log('notvalidselectedMonth');
    //     this.selectedMonth = true;
    //     return;
    //   }
    // if (this.selectedMonths.length === 0 && this.IsTransportChecked) {
    //   this.selectedMonth = true;
    //   return;
    // }

    console.log('form', form);
    const params: any = {};
    params.AdmissionDate = new DatePipe('en-US').transform(
      get(formData, 'admissionDate'),
      'yyyy-MM-dd'
    );
    params.AdmissionNo= form.admissionNo;
    params.AplBplCardNumber= form.aplNumber;
    params.BankAccountNumber= form.bankAccountNo;
    params.BankName = form.bankName;
    params.BhavishyaJyothiNumber = form.bhavishyaJyothiNo;
    params.BloodGroup =  formData.bloodGroup && formData.bloodGroup.bloodGroup ? formData.bloodGroup.bloodGroup : '';
    params.Caste = form.caste;
    params.Community = formData.community && formData.community.community ? formData.community.community : '';
    params.CommunityCertificateNumber = form.communityCertificateNo;
    params.DataOfJoining = new DatePipe('en-US').transform(
      get(formData, 'dateOfJoining'),
      'yyyy-MM-dd'
    );
    params.DateOfBirth = new DatePipe('en-US').transform(
      get(formData, 'dateOfBirth'),
      'yyyy-MM-dd'
    );
    params.Email = form.email;
    params.EmisNumber = form.emisNumber;
    params.FatherAdhaarNumber = form.fatherAadharNo;
    params.FatherAnnualIncome =  form.fatherIncome;
    params.FatherName =  form.fatherName;
    params.FatherOccupation = form.fatherOccupation;
    params.FeesPaymentType = 1;
    params.Gender = form.gender;
    params.Height = form.height;
    params.IfscCode =  form.ifscCode;
    // params.Image =  this.imagePost;
    params.InComeCerificateNo = form.incomeCertificateNo;
    params.InstituteId= this.instituteId;
    params.MarkIdentificationA = form.markIdentity1;
    params.MarkIdentificationB = form.markIdentity2;
    params.MedicalInspection = form.medicalInspection;
    params.Medium = form.medium;
    params.MotherAdhaarNumber =  form.motherAadharNo;
    params.MotherAnnualIncome = form.motherIncome;
    params.MotherName =  form.motherName;
    params.MotherOccupation = form.motherOccupation;
    params.Nationality =  form.nationality;
    if(form.nccScoutGuide){
      if(form.nccScoutGuide == 1){
        params.NccScoutGuide = 'NCC';
      } else if(form.nccScoutGuide == 2){
        params.NccScoutGuide = 'Boy Scout';
      } else if(form.nccScoutGuide == 3){
        params.NccScoutGuide = 'Girl Guide';
      }
    }
    params.PermanentAddress = get(formData, 'permanentAddress') || '';
    params.PermanentCity = get(formData, 'permanentCity') || '';
    params.PermanentCountry = get(formData, 'permanentCountry') || '';
    params.PermanentPincode = get(formData, 'permanentPincode') || '';
    params.PermanentState = get(formData, 'permanentState') || '';
    params.PrimaryMobileNo = form.primaryMobileNo;
    if(this.ReligionData){
      params.Religion =  form.religion && form.religion.religion ? form.religion.religion : form.religion;
    } else {
      params.Religion =  form.religion && form.religion.religion ? form.religion.religion : '';
    }
    params.ResidentalAddress = form.residentialAddress;
    params.ResidentalCity = form.residentialCity;
    params.ResidentalCountry = form.residentialCountry;
    params.ResidentalPincode = form.residentialPincode;
    params.ResidentalState = form.residentialState;
    params.RteNumber =form.rteNumber;
    if(form.scSt){
      if(form.scSt == 1){
        params.ScSt = 'Yes';
      } else if(form.scSt == 2){
        params.ScSt = 'No';
      }
    }
    params.Scholorship= form.scholorship;
    params.SchoolDiseNumber = form.schoolDiseNumber;
    params.SecondaryMobile = form.secondaryMobileNo;
    params.Section=form.section.id;
    params.Standard= form.standard.id;
    params.StsNumber = form.stsNumber ;
    params.StudentAdhaarNumber = form.studentAadharNo;
    params.StudentHostel = form.studentHostel;
    params.StudentName= form.studentName;
    params.SubCaste = form.subCaste;
    params.Weight= form.weight
    params.WhatsappNumber = form.whatsappNumber;
    params.physicallychalleged = form.physicallychalleged;
    params.medicalcondition = form.medicalcondition;
    params.acheivements = form.acheivements;
    params.hobbies = form.hobbies;
    params.vaccination = form.vaccination;

    let getStudentDoc:any = this.inputStudentDetails.StudentDocumentUpload ? JSON.parse(this.inputStudentDetails.StudentDocumentUpload) : '';
    let NewDocument = document;
    if(NewDocument.length > 0) {
      for(let i = 0; i < getStudentDoc.length; i++) {
        NewDocument = NewDocument.filter(function(returnableObjects){
            return returnableObjects.documentName !== getStudentDoc[i].documentName;
        });
      }
    } else {
      NewDocument = "";
    }

    params.StudentDocumentUpload = NewDocument ? JSON.stringify(NewDocument) : this.inputStudentDetails.StudentDocumentUpload;
    params.StudentImage = this.IsNewImageUpload == true ? this.imagePost : this.getStudentImage;
    this.PreparedArray.push(params);

    // let symmetricDifference = this.getIntKeys(this.inputStudentDetails, params);
    // console.log('symmetricDifference', symmetricDifference);

    let getNewProperties = this.compareArrays(params, this.inputStudentDetails);

    console.log('getNewProperties', getNewProperties);
    let output:any = {};
    output.schoolId = this.instituteId;
    output.studentId = this.studentId;
    output.student_json = JSON.stringify(getNewProperties);

    const InputDetailsExits = Object.keys(getNewProperties).length === 0;

    if(InputDetailsExits) {
      this.toastr.error('No changes noted in profile');
      return;
    }
  
    if (this.studentId) {
      params.id = this.studentId;
      console.log('params', params);
      console.log('output', output);
      // this.studentManagementSandbox.editStudent(params);
      this.studentManagementSandbox.PreStudentFormSubmission(output);
      
      this.reload();
    } else {
      params.redirect = 'student';
      this.studentManagementSandbox.addStudent(params);
    }
    this.IsNewImageUpload = false;
  }

  
  getIntKeys(obj1, obj2){
    var k1 = Object.keys(obj1);
    return k1.filter(function(x){
        return obj2[x] != obj1[x];
    });
  }

  compareArrays(obj1, obj2) {

      const keys1 = [];const values1 = [];
      Object.keys(obj1).forEach((element) => {keys1.push(element);});
      Object.values(obj1).forEach((element) => {values1.push(element);});

      const keys2 = []; const values2 = [];
      Object.keys(obj2).forEach((element) => {keys2.push(element);});
      Object.values(obj2).forEach((element) => {values2.push(element);});

      const obj = {};
      keys1.forEach((element, i) => {
        for (let index = 0; index < keys2.length; index++) {
          if (element === keys2[index]) {
            if (values1[i] !== values2[index]) {
              const jsonKey = element;
              obj[jsonKey] = values1[i];
            }
            break;
          }
        }
      });
      return obj;
  }
  

  reload(){
    this.studentManagementSandbox.prestudentAdded$.subscribe(data =>{
      if (data && data.status == 1) {

        // this.toastr.success('Success')
        this.toastr.success('Your changes are successfully submitted for approval');
        // setTimeout(() => {
        //   window.location.reload()
        // }, 2000);
      }
  });

    // this.studentManagementSandbox.editStudent$.subscribe(data =>{
    //     if (data && data.status == 1) {

    //       this.toastr.success('Success')
    //       // this.studentManagementSandbox.getStudentDetails(this.studentId);
    //       // this.setStudentDetails();
    //       setTimeout(() => {
    //         window.location.reload()
    //       }, 2000);
          
    //     }
    // });
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  checkSibiling(event) {
    this.isSibling = event.target.checked;
    this.createStudentForm.controls.siblingId.reset();
    this.createStudentForm.controls.siblingSection.reset();
    this.createStudentForm.controls.siblingStandard.reset();
    if (this.isSibling) {
      this.createStudentForm.controls.siblingStandard.enable();
      this.createStudentForm.controls.siblingSection.enable();
      this.createStudentForm.controls.siblingId.enable();
    } else {
      this.createStudentForm.controls.siblingStandard.disable();
      this.createStudentForm.controls.siblingSection.disable();
      this.createStudentForm.controls.siblingId.disable();
    }
  }

  //  after select standard, section api will call
  changeStandardSibling(event) {
    this.createStudentForm.controls.siblingSection.reset();
    this.createStudentForm.controls.siblingId.reset();
    this.standardId = event.value.id;
    const params: any = {};
    params.standardId = event.value.id;
    this.studentManagementSandbox.sectionSiblingList(params);
  }

  changeSiblingSection(event) {
    this.createStudentForm.controls.siblingId.reset();
    this.studentList(event.value.id);
  }

  studentList(sectionId) {
    const params: any = {};
    params.limit = '';
    params.offset = 0;
    params.keywword = '';
    params.count = 0;
    params.standardId = this.standardId;
    params.sectionId = sectionId;
    // this.studentManagementSandbox.studentList(params);
  }

  //  upload student image
  uploadImage(event) {
    this.fileTypeError = '';
    this.files = event.target.files;
    this.file = this.files[0];
    this.fileType = this.file.type;
    if (this.fileType.match(/image\/*/)) {
      if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (events: any) => {
          this.isSelected = true;
          this.postUrl = events.target.result;
          this.imagePost = events.target.result;
          this.IsNewImageUpload = true;
        };
        reader.readAsDataURL(event.target.files[0]);
      }
    } else {
      this.fileTypeError = '(Only Images are allowed)';
    }
  }

  uploadButtonClick() {
    const el: HTMLElement = this.filePath.nativeElement as HTMLElement;
    el.click();
  }

  //  upload documents

  uploadDocument(event) {
    this.isDefault = false;
    this.documentFiles = event.target.files;
    this.documentFile = this.documentFiles[0];
    this.documentFileType = this.documentFile.type;
    this.documentName = this.documentFile.name;
  }
  clickDocument() {
    const doc: HTMLElement = this.filePathDocument.nativeElement as HTMLElement;
    doc.click();
  }
  uploadDocumentApi() {
    this.isDefault = true;
    const params: any = {};
    params.studentDocument = this.documentFile;
    this.studentManagementSandbox.uploadDocument(params);
  }

  //  after select standard, section api will call
  changeStandard(event) {
    console.log('wwww', event.value);
    this.createStudentForm.controls.section.reset();
    this.createStudentForm.controls['section'].setValue('Select');
    this.emptySectionDisplay = 1;
    if (event.value === undefined) {
      this.emptySectionList();
    } else {
      const standardId = event.value.id;
      const params: any = {};
      params.standardId = standardId;
      this.studentManagementSandbox.sectionList(params);
    }
  }
  chooseSection(event) {
    if (event.value) {
      this.emptySectionDisplay = 0;
    }
    else {
      this.createStudentForm.controls['section'].setValue('Select');
      this.emptySectionDisplay = 1;
    }
  }
  //  empty section list in reducer
  emptySectionList() {
    this.studentManagementSandbox.emptySectionList();
  }

  inputStudentDetails:any ={}; ReligionData:any;
  setStudentDetails() {
    debugger;
    this.subscriptions.push(
      this.studentManagementSandbox.getStudentDetails$.subscribe(details => {
        debugger;
        if (details) {
          debugger;
          this.studentDetails = details;
          this.instituteId = details.instituteId;
          this.previousMonth = details.studentTransportMonth;
          console.log('detailsdetails', details);
          console.log('previousMonth', this.previousMonth);
          this.setStudentDetail(this.studentDetails);

          const params: any = {};
          params.InstituteId = details.instituteId;
          params.StudentName = details.studentName;
          params.Standard = details.classId;
          params.Section = details.sectionId;
          // params.Image = "";
          params.AdmissionNo = details.admissionNo;
          params.AdmissionDate = new DatePipe('en-US').transform(
            get(details, 'admissionDate'),
            'yyyy-MM-dd'
          );
          params.DataOfJoining = new DatePipe('en-US').transform(
            get(details, 'doj'),
            'yyyy-MM-dd'
          );
          params.Gender = details.gender;
          params.Medium = details.medium;
          params.DateOfBirth = new DatePipe('en-US').transform(
            get(details, 'dob'),
            'yyyy-MM-dd'
          );
          params.PrimaryMobileNo = details.primaryMobile;
          params.SecondaryMobile = details.secondaryMobile;
          params.WhatsappNumber = details.whatsappNumber;
          params.Email = details.email;
          params.EmisNumber = details.emisNumber;
          params.StudentAdhaarNumber = details.studentAdhaarNumber;
          params.RteNumber = details.rteNumber;
          params.BhavishyaJyothiNumber = details.bhavishyaJyothiNumber;
          params.AplBplCardNumber = details.aplBplCardNumber;
          params.StsNumber = details.stsNumber;
          params.SchoolDiseNumber = details.schoolDiseNumber ? details.schoolDiseNumber : '';
          params.ScSt = details.scStFlg ? details.scStFlg : '';
          params.NccScoutGuide = details.nccScoutGuide ? details.nccScoutGuide : '';
          params.Religion = details.religion ? details.religion : '';
          this.ReligionData = details.religion ? details.religion : '';
          params.Community = details.community ? details.community.community : '';
          params.CommunityCertificateNumber = details.communityCertificateNumber ? details.communityCertificateNumber : '';
          params.Nationality = details.nationality;
          params.Caste = details.caste;
          params.SubCaste = details.subCaste;
          params.ResidentalAddress = details.residentalAddress;
          params.ResidentalCity = details.residentalCity;
          params.ResidentalState = details.residentalState;
          params.ResidentalCountry = details.residentalCountry;
          params.ResidentalPincode = details.residentalPincode;
          params.PermanentAddress = details.permanentAddress; 
          params.PermanentCity =    details.permanentCity ? details.permanentCity  : '';
          params.PermanentState =   details.permanentState ? details.permanentState : '';
          params.PermanentCountry = details.permanentCountry ? details.permanentCountry : '';
          params.PermanentPincode = details.permanentPincode ? details.permanentPincode  : '';
          params.BloodGroup = details.bloodGroup ? details.bloodGroup.bloodGroup : '';
          params.Height = details.height;
          params.Weight = details.weight;
          params.MarkIdentificationA = details.markIdentificationA;
          params.MarkIdentificationB = details.markIdentificationB;
          params.MedicalInspection = details.medicalInspection;
          params.FatherName = details.fatherName;
          params.FatherOccupation = details.fatherOccupation;
          params.FatherAnnualIncome = details.fatherAnnualIncome;
          params.FatherAdhaarNumber = details.fatherAdhaarNumber;
          params.MotherName = details.motherName;
          params.MotherOccupation = details.motherOccupation;
          params.MotherAnnualIncome = details.motherAnnualIncome;
          params.MotherAdhaarNumber = details.motherAdhaarNumber;
          params.InComeCerificateNo = details.incomeCertificateNumber;
          params.BankAccountNumber = details.bankAccountNumber ? details.bankAccountNumber : '';
          params.BankName = details.bankName;
          params.IfscCode = details.ifscCode;
          params.StudentHostel = details.studentHostel;
          params.FeesPaymentType = 1;
          params.Scholorship = details.scholarship;
          params.StudentDocumentUpload = details.studentDocuments ? JSON.stringify(details.studentDocuments) : '';
          params.StudentImage = details.photoPath ? details.photoPath : '';

          params.physicallychalleged = details.physicallychalleged ? details.physicallychalleged : '';
          params.medicalcondition = details.medicalcondition ? details.medicalcondition : '';
          params.acheivements = details.acheivements ? details.acheivements : '';
          params.hobbies = details.hobbies ? details.hobbies : '';
          params.vaccination = details.vaccination ? details.vaccination : '';

          this.getStudentImage = details.photoPath ? details.photoPath : '';
          this.inputStudentDetails = params;
          this.inputArray.push(params);
          console.log('inputStudentDetails', this.inputStudentDetails);
          // this.InputArray.push(params);
          // console.log('inputStudentDetails', this.InputArray);
        }
      })
    );
  }
  getMonthSubscribe() {
    this.subscriptions.push(
      this.studentManagementSandbox.monthList$.subscribe(details => {
        if (details) {
          console.log('llll', this.previousMonth);

          if (this.previousMonth.length === 0) {
            this.feeMonthDetails = details;
            console.log('notworking');
          } else {
            console.log('working', this.isChecked);

            details = details.map(element => {
              this.previousMonth.forEach(data => {
                if (element.monthId === data.monthId) {
                  this.isChecked[element.id] = true;
                  element.isSelected = true;
                  console.log('working', this.isChecked);
                }
              });
              return element;
            });
            this.feeMonthDetails = details;

          }
        }
      })
    );
    this.studentManagementSandbox.getMonthList({});

  }
  setStudentDetail(details) {
    if (get(details, 'residentalAddress') ||
      get(details, 'residentalCity') ||
      get(details, 'residentalState') ||
      get(details, 'residentalCountry') ||
      get(details, 'residentalPincode') ||
      get(details, 'permanentAddress') ||
      get(details, 'permanentCity') ||
      get(details, 'permanentState') ||
      get(details, 'permanentCountry') ||
      get(details, 'permanentPincode')) {
      if (
        get(details, 'residentalAddress') === get(details, 'permanentAddress') &&
        get(details, 'residentalCity') ===
        get(details, 'permanentCity') &&
        get(details, 'residentalState') === get(details, 'permanentState') &&
        get(details, 'residentalCountry') === get(details, 'permanentCountry') &&
        get(details, 'residentalPincode') === get(details, 'permanentPincode')
      ) {
        this.isSameAddress = true;
        this.createStudentForm.controls['permanentAddress'].disable();
        this.createStudentForm.controls['permanentCity'].disable();
        this.createStudentForm.controls['permanentState'].disable();
        this.createStudentForm.controls['permanentCountry'].disable();
        this.createStudentForm.controls['permanentPincode'].disable();
      } else {
        this.isSameAddress = false;
        this.createStudentForm.controls['permanentAddress'].enable();
        this.createStudentForm.controls['permanentCity'].enable();
        this.createStudentForm.controls['permanentState'].enable();
        this.createStudentForm.controls['permanentCountry'].enable();
        this.createStudentForm.controls['permanentPincode'].enable();
      }
    }
    if (details.photoPath !== null) {
      this.postUrl = details.photoPath + "?i="+ moment().format('yyyy-mm-dd hh:mm:ss');
    }
    // if (details.studentName) {
    //   this.createStudentForm.controls['studentName'].disable({onlySelf: true, emitEvent: true});
    // }
    this.createStudentForm.controls['studentName'].setValue(details.studentName);

    this.createStudentForm.controls['standard'].disable({onlySelf: true, emitEvent: true});
    if (details.classId) {
      this.createStudentForm.controls['standard'].setValue(details.class);
      
      // const params: any = {};
      // params.standardId = details.classId;
      // this.studentManagementSandbox.sectionList(params);
    }
    this.createStudentForm.controls['admissionNo'].disable({onlySelf: true, emitEvent: true});
    if (details.admissionNo) {
      this.createStudentForm.controls['admissionNo'].setValue(details.admissionNo);
    }
    this.createStudentForm.controls['admissionDate'].disable({onlySelf: true, emitEvent: true});
    // if (details.admissionDate) {
     
    // }
    this.createStudentForm.controls['admissionDate'].setValue(details.admissionDate);

    // if(details.gender) {
    //   this.createStudentForm.controls['gender'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['gender'].setValue(details.gender);
    this.createStudentForm.controls['section'].disable({onlySelf: true, emitEvent: true});
    if (details.sectionId) {
      this.createStudentForm.controls['section'].setValue(details.section);
    }

    if (details.studentType) {
      this.createStudentForm.controls['studentType'].disable({onlySelf: true, emitEvent: true});
    }

    if (details.studentType === 'Old') {
      this.createStudentForm.controls['studentType'].setValue({
        id: '1',
        name: 'Old'
      });
    }
    if (details.studentType === 'New') {
      this.createStudentForm.controls['studentType'].setValue({
        id: '2',
        name: 'New'
      });
    }
    this.createStudentForm.controls['medium'].disable({onlySelf: true, emitEvent: true});
    // if(details.medium) {
      
    // }

    this.createStudentForm.controls['medium'].setValue(details.medium);

    // if (details.dob) {
    //   // this.createStudentForm.controls['dateOfBirth'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['dateOfBirth'].setValue(details.dob);
    this.createStudentForm.controls['dateOfJoining'].disable({onlySelf: true, emitEvent: true});
    // if (details.doj) {
     
    // }

    this.createStudentForm.controls['dateOfJoining'].setValue(details.doj);

    // if (details.primaryMobile) {
    //   this.createStudentForm.controls['primaryMobileNo'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['primaryMobileNo'].setValue(
      details.primaryMobile
    );

    // if (details.secondaryMobile) {
    //   this.createStudentForm.controls['secondaryMobileNo'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['secondaryMobileNo'].setValue(
      details.secondaryMobile
    );

    // if (details.whatsappNumber) {
    //   this.createStudentForm.controls['whatsappNumber'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['whatsappNumber'].setValue(
      details.whatsappNumber
    );

    // if (details.email) {
    //   this.createStudentForm.controls['email'].disable({onlySelf: true, emitEvent: true});
    // }
    this.createStudentForm.controls['email'].setValue(details.email);
    this.createStudentForm.controls['emisNumber'].disable({onlySelf: true, emitEvent: true});
    // if (details.emisNumber) {
      
    // }

    this.createStudentForm.controls['emisNumber'].setValue(details.emisNumber);

    // if (details.studentAdhaarNumber) {
    //   this.createStudentForm.controls['studentAadharNo'].disable({onlySelf: true, emitEvent: true});
    // }
    this.createStudentForm.controls['studentAadharNo'].setValue(
      details.studentAdhaarNumber
    );
    this.createStudentForm.controls['rteNumber'].disable({onlySelf: true, emitEvent: true});
    // if (details.rteNumber) {
      
    // }

    this.createStudentForm.controls['rteNumber'].setValue(details.rteNumber);
    this.createStudentForm.controls['bhavishyaJyothiNo'].disable({onlySelf: true, emitEvent: true});
    // if (details.bhavishyaJyothiNumber) {
      
    // }

    this.createStudentForm.controls['bhavishyaJyothiNo'].setValue(
      details.bhavishyaJyothiNumber
    );
    this.createStudentForm.controls['schoolDiseNumber'].disable({onlySelf: true, emitEvent: true});
    // if (details.schoolDiseNumber) {
     
    // }

    this.createStudentForm.controls['schoolDiseNumber'].setValue(
      details.schoolDiseNumber
    );

    // if (details.aplBplCardNumber) {
    //   this.createStudentForm.controls['aplNumber'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['aplNumber'].setValue(
      details.aplBplCardNumber
    );

    // if (details.scStFlg) {
    //   this.createStudentForm.controls['scSt'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['scSt'].setValue(details.scStFlg);

    // if (details.nccScoutGuide) {
    //   this.createStudentForm.controls['nccScoutGuide'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['nccScoutGuide'].setValue(
      details.nccScoutGuide
    );

    // if (details.fatherName) {
    //   this.createStudentForm.controls['fatherName'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['fatherName'].setValue(details.fatherName);

    // if (details.motherName) {
    //   this.createStudentForm.controls['motherName'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['motherName'].setValue(details.motherName);

    // if (details.religion) {
    //   this.createStudentForm.controls['religion'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['religion'].setValue(details.religion);

    // if (details.community) {
    //   this.createStudentForm.controls['community'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['community'].setValue(details.community);
    console.log('asdfe', details.isBusStudent);

    
    if (details.isBusStudent === 1) {
      console.log('enterstudent');
      this.IsTransportChecked = true;
      this.createStudentForm.controls['routeId'].enable();
      this.createStudentForm.controls['routeId'].setValue(
        details.routeMasterDetails
      );
      this.createStudentForm.controls['stopId'].enable();
      this.createStudentForm.controls['stopId'].setValue(
        details.busStopsDetails
      );
      this.createStudentForm.controls['transportFeeType'].enable();
      this.createStudentForm.controls['transportFeeType'].setValue(
        details.instituteRouteFeeTypeDetails
      );

      this.createStudentForm.controls['routeId'].disable({onlySelf: true, emitEvent: true});
      this.createStudentForm.controls['stopId'].disable({onlySelf: true, emitEvent: true});
      this.createStudentForm.controls['transportFeeType'].disable({onlySelf: true, emitEvent: true});

    }
    if (details.community) {
      if (details.community.communityId === 5 || details.community.communityId === 6) {
        this.scStudent = true;
        this.nonScStudent = false;
      }
      if (details.community.communityId !== 5 && details.community.communityId !== 6) {
        this.scStudent = false;
        this.nonScStudent = true;
      }
      
    }

    // if (details.communityCertificateNumber) {
    //   this.createStudentForm.controls['communityCertificateNo'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['communityCertificateNo'].setValue(
      details.communityCertificateNumber
    );

    // if (details.nationality) {
    //   this.createStudentForm.controls['nationality'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['nationality'].setValue(
      details.nationality
    );

    // if (details.caste) {
    //   this.createStudentForm.controls['caste'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['caste'].setValue(details.caste);

    // if (details.subCaste) {
    //   this.createStudentForm.controls['subCaste'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['subCaste'].setValue(details.subCaste);

    // if (details.residentalAddress) {
    //   this.createStudentForm.controls['residentialAddress'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['residentialAddress'].setValue(
      details.residentalAddress
    );

    // if (details.residentalCity) {
    //   this.createStudentForm.controls['residentialCity'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['residentialCity'].setValue(
      details.residentalCity
    );

    // if (details.residentalState) {
    //   this.createStudentForm.controls['residentialState'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['residentialState'].setValue(
      details.residentalState
    );

    // if (details.residentalCountry) {
    //   this.createStudentForm.controls['residentialCountry'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['residentialCountry'].setValue(
      details.residentalCountry
    );

    // if (details.residentalPincode) {
    //   this.createStudentForm.controls['residentialPincode'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['residentialPincode'].setValue(
      details.residentalPincode
    );

    // if (details.permanentAddress) {
    //   this.createStudentForm.controls['permanentAddress'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['permanentAddress'].setValue(
      details.permanentAddress
    );

    // if (details.permanentCity) {
    //   this.createStudentForm.controls['permanentCity'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['permanentCity'].setValue(
      details.permanentCity
    );

    // if (details.permanentState) {
    //   this.createStudentForm.controls['permanentState'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['permanentState'].setValue(
      details.permanentState
    );

    // if (details.permanentCountry) {
    //   this.createStudentForm.controls['permanentCountry'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['permanentCountry'].setValue(
      details.permanentCountry
    );

    // if (details.permanentPincode) {
    //   this.createStudentForm.controls['permanentPincode'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['permanentPincode'].setValue(
      details.permanentPincode
    );

    // if (details.bloodGroup) {
    //   this.createStudentForm.controls['bloodGroup'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['bloodGroup'].setValue(details.bloodGroup);

    // if (details.height) {
    //   this.createStudentForm.controls['height'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['height'].setValue(details.height);

    // if (details.weight) {
    //   this.createStudentForm.controls['weight'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['weight'].setValue(details.weight);

    // if (details.markIdentificationA) {
    //   this.createStudentForm.controls['markIdentity1'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['markIdentity1'].setValue(
      details.markIdentificationA
    );

    // if (details.markIdentificationB) {
    //   this.createStudentForm.controls['markIdentity2'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['markIdentity2'].setValue(
      details.markIdentificationB
    );

    // if (details.medicalInspection) {
    //   this.createStudentForm.controls['medicalInspection'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['medicalInspection'].setValue(
      details.medicalInspection
    );

    // if (details.fatherOccupation) {
    //   this.createStudentForm.controls['fatherOccupation'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['fatherOccupation'].setValue(
      details.fatherOccupation
    );

    // if (details.fatherAnnualIncome) {
    //   this.createStudentForm.controls['fatherIncome'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['fatherIncome'].setValue(
      details.fatherAnnualIncome
    );

    // if (details.fatherAdhaarNumber) {
    //   this.createStudentForm.controls['fatherAadharNo'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['fatherAadharNo'].setValue(
      details.fatherAdhaarNumber
    );
    this.createStudentForm.controls['stsNumber'].disable({onlySelf: true, emitEvent: true});
    // if (details.stsNumber) {
     
    // }

    this.createStudentForm.controls['stsNumber'].setValue(
      details.stsNumber
    );

    // if (details.motherOccupation) {
    //   this.createStudentForm.controls['motherOccupation'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['motherOccupation'].setValue(
      details.motherOccupation
    );

    // if (details.motherAnnualIncome) {
    //   this.createStudentForm.controls['motherIncome'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['motherIncome'].setValue(
      details.motherAnnualIncome
    );

    // if (details.motherAdhaarNumber) {
    //   this.createStudentForm.controls['motherAadharNo'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['motherAadharNo'].setValue(
      details.motherAdhaarNumber
    );

    if (details.bankAccountNumber) {
      this.createStudentForm.controls['bankAccountNo'].disable({onlySelf: true, emitEvent: true});
    }

    this.createStudentForm.controls['bankAccountNo'].setValue(
      details.bankAccountNumber
    );

    if (details.bankName) {
      this.createStudentForm.controls['bankName'].disable({onlySelf: true, emitEvent: true});
    }

    this.createStudentForm.controls['bankName'].setValue(details.bankName);

    if (details.ifscCode) {
      this.createStudentForm.controls['ifscCode'].disable({onlySelf: true, emitEvent: true});
    }

    this.createStudentForm.controls['ifscCode'].setValue(details.ifscCode);

    if (details.studentHostel) {
      this.createStudentForm.controls['studentHostel'].disable({onlySelf: true, emitEvent: true});
    }

    this.createStudentForm.controls['studentHostel'].setValue(
      details.studentHostel
    );

    if (details.feesPaymentType) {
      this.createStudentForm.controls['feesPaymentType'].disable({onlySelf: true, emitEvent: true});
    }

    this.createStudentForm.controls['feesPaymentType'].setValue(
      details.feesPaymentType
    );

    if (details.scholarship) {
      this.createStudentForm.controls['scholorship'].disable({onlySelf: true, emitEvent: true});
    }

    this.createStudentForm.controls['scholorship'].setValue(
      details.scholarship
    );

    // if (details.incomeCertificateNumber) {
    //   this.createStudentForm.controls['incomeCertificateNo'].disable({onlySelf: true, emitEvent: true});
    // }

    this.createStudentForm.controls['incomeCertificateNo'].setValue(details.incomeCertificateNumber);
    
    if (details.remarks) {
      this.createStudentForm.controls['remarks'].disable({onlySelf: true, emitEvent: true});
    }
    
    this.createStudentForm.controls['remarks'].setValue(
      details.remarks);
    console.log('outstudent');
    // this.studentManagementSandbox.sectionList({ standardId: get(details, 'class.id') });
  }
  resetStudent() {
    this.studentManagementSandbox.resetDocument();
    this.submitted = false;
    $('html,body').animate({ scrollTop: window.top }, 'slow');
    if (this.studentId) {
      this.setStudentDetail(this.studentDetails);
      return;
    }
    this.createStudentForm.reset();
    console.log(this.createStudentForm);
  }
  removeDocument(document) {
    this.documentName = document.documentDisplayName;
    console.log('documentName', document);
    this.studentManagementSandbox.removeDocument(document.documentName);
  }

  choosePermanentAddress(event) {
    if (event.target.checked === true) {
      this.createStudentForm.controls['permanentAddress'].disable();
      this.createStudentForm.controls['permanentCity'].disable();
      this.createStudentForm.controls['permanentState'].disable();
      this.createStudentForm.controls['permanentCountry'].disable();
      this.createStudentForm.controls['permanentPincode'].disable();
      debugger;
      //this.isSameAddress = event.target.checked;
      if(!this.createStudentForm.value.residentialAddress && !this.createStudentForm.value.residentialCity && !this.createStudentForm.value.residentialState
          && !this.createStudentForm.value.residentialCountry && !this.createStudentForm.value.residentialPincode){
            this.isSameAddress = false;
            $("#same").prop("checked", false);
      } 
      else {
        this.isSameAddress = event.target.checked;
      }
      this.createStudentForm.controls['permanentAddress'].setValue(
        this.createStudentForm.value.residentialAddress
      );
      this.createStudentForm.controls['permanentCity'].setValue(
        this.createStudentForm.value.residentialCity
      );
      this.createStudentForm.controls['permanentState'].setValue(
        this.createStudentForm.value.residentialState
      );
      this.createStudentForm.controls['permanentCountry'].setValue(
        this.createStudentForm.value.residentialCountry
      );
      this.createStudentForm.controls['permanentPincode'].setValue(
        this.createStudentForm.value.residentialPincode
      );
    } else {
      this.isSameAddress = event.target.checked;
      this.createStudentForm.controls['permanentAddress'].enable();
      this.createStudentForm.controls['permanentCity'].enable();
      this.createStudentForm.controls['permanentState'].enable();
      this.createStudentForm.controls['permanentCountry'].enable();
      this.createStudentForm.controls['permanentPincode'].enable();

      this.createStudentForm.controls['permanentAddress'].setValue('');
      this.createStudentForm.controls['permanentCity'].setValue('');
      this.createStudentForm.controls['permanentState'].setValue('');
      this.createStudentForm.controls['permanentCountry'].setValue('');
      this.createStudentForm.controls['permanentPincode'].setValue('');
    }
  }
  isBusFee() {
    if (this.feeMonthDetails.length == 0) {
      this.toastr.error('Please Configure the Months in Fee Term Setup');
    }
  }
  changeBusStudent(event) {
    if (event.target.checked) {
      console.log('checkfeemonth', this.feeMonthDetails);
      this.isBusStudent = 1;
      this.IsTransportChecked = true;
      this.createStudentForm.controls['routeId'].enable();
      this.createStudentForm.controls['stopId'].enable();
      this.createStudentForm.controls['transportFeeType'].enable();
    } else {
      this.isBusStudent = 0;
      this.IsTransportChecked = false;
      this.createStudentForm.controls['routeId'].disable();
      this.createStudentForm.controls['stopId'].disable();
      this.createStudentForm.controls['transportFeeType'].disable();
    }
  }

  selectSibling(event) {
    if (event.value) {
      this.studentManagementSandbox.getSiblingDetails(event.value.studentId);
      this.subscriptions.push(this.studentManagementSandbox.getSiblingDetails$.subscribe(details => {
        if (details) {
          this.createStudentForm.controls.fatherName.setValue(
            details.fatherName
          );
          this.createStudentForm.controls.motherName.setValue(
            details.motherName
          );
          this.createStudentForm.controls.religion.setValue(
            details.religion
          );
          this.createStudentForm.controls.address.setValue(details.residentalAddress);
          // this.preAdmissionForm.controls.city.setValue(details.residentalCity);
          this.createStudentForm.controls.state.setValue(details.residentalState);
          this.createStudentForm.controls.country.setValue(details.residentalCountry);
          this.createStudentForm.controls.pincode.setValue(details.residentalPincode);
          this.createStudentForm.controls.mobileNo.setValue(details.primaryMobile);
          this.createStudentForm.controls.alternateMobileNo1.setValue(
            details.secondaryMobile
          );
          this.createStudentForm.controls.alternateMobileNo2.setValue(
            details.whatsappNumber
          );
        }
      }));
    }
  }

  masterRouteList() {
    const params: any = {};
    params.limit = '';
    params.offset = '';
    params.count = '';
    params.search = '';
    params.orderBy = '';
    params.isActive = 1;
    this.studentManagementSandbox.masterRouteList(params);
  }

  changeRoute(event) {
    console.log('event', event);
    this.createStudentForm.controls.stopId.reset();
    if (event.value) {
      const params: any = {};
      params.routeId = event.value.id;
      this.studentManagementSandbox.stopingPointList(params);
    }
  }
  selectMonth(item, event) {
    console.log('itemm', item);
    if (event.target.checked == true) {
      this.feemonth.push({ id: item.monthId, monthName: item.monthName, order: item.order });
      this.isChecked[item.id] = true;
      this.selectedMonth = false;
      this.feeMonthDetails.forEach(element => {
        if (element.monthId === item.monthId) {
          element.isSelected = true;
        }
      });
    } else {
      this.isChecked[item.id] = false;
      this.allChecked = false;
      this.feeMonthDetails.forEach(element => {
        if (element.monthId === item.monthId) {
          element.isSelected = false;
        }
      });
      this.feemonth = this.feemonth.filter(val => {
        if (val.id == item.monthId) {
          return false;
        } else {
          return true;
        }
      });
    }
    console.log('monthyyy', this.feemonth);
  }
  allMonth(event) {
    if (event.target.checked) {
      this.allChecked = true;
      this.feeMonthDetails.forEach(element => {
        this.isChecked[element.id] = true;
        element.isSelected = true;
      });
    } else {
      this.allChecked = false;
      this.feeMonthDetails.forEach(element => {
        this.isChecked[element.id] = false;
        element.isSelected = false;
      });
      this.selectedMonth = true;
    }
  }
  lateJoin(event) {
    console.log('nowdata', event);
    if (event.target.checked === true) {
      this.isLateFee = true;
    } else
      if (event.target.checked === false) {
        this.isLateFee = false;
      }
  }
  changeCummunity(event) {
    console.log('eaea', event);
    if (event.value.communityId === 5 || event.value.communityId === 6) {
      console.log('scStudent');
      this.scStudent = true;
      this.nonScStudent = false;
    }
    if (event.value.communityId !== 5 && event.value.communityId !== 6) {
      console.log('nonscStudent');
      this.scStudent = false;
      this.nonScStudent = true;
    }
  }

  getDocuments(){
    this.Demosubscriptions.push(
      this.studentManagementSandbox.uploadedDocument$.subscribe(details => {
        if (details) {
          console.log('Documentdetails', details);
          for(let data of details) {
            let list:any = {};
            list = data;
            if(data.documentPath.includes("uploads/studentDocument/")){
              list.isViewChange=0;
            } else {
              list.isViewChange=1;
            }
            this.UploadDocumentFiles.push(list);

          }
          console.log('UploadDocumentFiles', this.UploadDocumentFiles);
        }
      })
    );
  }

  //  unSubscribing data
  ngOnDestroy(): void {
    this.subscriptions.forEach(each => each.unsubscribe());
  }


}
