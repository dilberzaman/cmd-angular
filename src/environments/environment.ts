// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseApi1:"https://patientapiservice20220509181756.azurewebsites.net/api",
  baseApi:"https://localhost:7179/api/ChatHistory",
  // baseApi:"https://localhost:7212/api",
  azure_login:"http://localhost:4200/viewallappointments", //azure redirectUri
  //azure_login:"https://cmd.learn.skillassure.com/viewallappointments", //azure redirectUri
  azure_logout:"http://localhost:4200" , //azure postLogoutRedirectUri
  //azure_logout:"https://cmd.learn.skillassure.com" , //azure postLogoutRedirectUri
  azure_webApi: "https://azure.get2aha.pratian.com/azure" , //web api
  baseApi3:"https://localhost:7223/api/Vital/1",
  baseApi2:"https://localhost:7179/api/MedicinePrescriptionAssociation"

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
