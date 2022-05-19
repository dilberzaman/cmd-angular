import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ViewappointmentService {

  readonly APIUrl = "https://viewappointmentapi20220518091635.azurewebsites.net";Â  
  constructor(private _http: HttpClient) { }
///vital////
  getvieweditvitals(){
    return this._http.get<any[]>("https://viewappointmentapi20220518091635.azurewebsites.net/api/Vital")
}
createVitals(data: any){
  return this._http.post<any[]>("https://viewappointmentapi20220518091635.azurewebsites.net/api/Vital", data)
}
/////patient////
    getViewAllPatients() {
     return this._http.get<any[]>("https://patientapiservice20220517183434.azurewebsites.net/api/Patient")
   }
   getContact(){
    return this._http.get<any[]>("https://patientapiservice20220517183434.azurewebsites.net/api/ContactDetail")
   }
   ///////comment/////
   getViewAllComments(){
      return this._http.get<any[]>("https://cmddoctor20220512222633.azurewebsites.net/api/Appointment")
   }
  ///////test////
   getTestlist(){
     return this._http.get<any[]>("https://viewappointmentapi20220518091635.azurewebsites.net/api/Test")
   }
  //////recommendation//////
  getViewAllDoctors(){
    return this._http.get<any[]>("https://cmddoctor20220518111744.azurewebsites.net/api/doctor")
  }
  /////doctor///
  getDoctorData(){
    return this._http.get<any[]>("https://cmddoctor20220518111744.azurewebsites.net/api/doctor")
  }
  /////////prescription//////
  getmedicine(){
    return this._http.get<any[]>("https://patientapiservice20220517183434.azurewebsites.net/api/patient")
  }
  getMedicinePrescriptionAssociation(){
    return this._http.get<any[]>("https://cmdapiservice20220510121748.azurewebsites.net/api/MedicinePrescriptionAssociation")
  }
//////////add medicinebutton////////
addMedicine(data: any) {
  return this._http.post("https://cmdapiservice20220510121748.azurewebsites.net/api/MedicinePrescriptionAssociation", data)
}

}