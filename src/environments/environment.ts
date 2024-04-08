// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  sampleUrl: "http://localhost:8009/csv",
  fileUrl: "http://localhost:8009/api/file-report/file-download",
  baseUrl: "http://localhost:8009/api",
  url: "http://localhost:4201",
  downloadTemplateUrl: "http://localhost:8009/api/exam/download-exam-template",

  // sampleUrl: 'http://vstest3.voicesnapforschools.com/nodejs/csv',
  // fileUrl: 'http://vstest3.voicesnapforschools.com/nodejs/api/file-report/file-download',
  // baseUrl: 'http://vstest3.voicesnapforschools.com/nodejs/api/',
  // url: 'http://vstest1.voicesnapforschools.com',
  // downloadTemplateUrl: 'http://vstest3.voicesnapforschools.com/nodejs/api/exam/download-exam-template',

  // sampleUrl: "https://vs5.voicesnapforschools.com/nodejs/csv",
  // fileUrl: "https://vs5.voicesnapforschools.com/nodejs/api/file-report/file-download",
  // baseUrl: "https://vs5.voicesnapforschools.com/nodejs/api",
  // url: "http://vs7.voicesnapforschools.com",
  // downloadTemplateUrl: "https://vs5.voicesnapforschools.com/nodejs/api/exam/download-exam-template",
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
