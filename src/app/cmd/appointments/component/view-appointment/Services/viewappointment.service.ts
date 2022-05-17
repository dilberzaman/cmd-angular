import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ViewappointmentService {

  readonly APIUrl = "http://106.51.36.182:8093/api";Â  
  constructor(private _http: HttpClient) { }

  getvieweditvitals(){
    return this._http.get<any[]>("http://106.51.36.182:8093/api/Vitals")
}
    getViewAllPatients() {
     return this._http.get<any[]>("http://106.51.36.182:8090/api/Patient")
   }
   getContact(){
    return this._http.get<any[]>("http://106.51.36.182:8090/api/ContactDetail")
   }
   getViewAllComments(){
      return this._http.get<any[]>("https://cmddoctor20220512222633.azurewebsites.net/api/Appointment")
   }
   getMedicine(){
     return this._http.get<any[]>("http://106.51.36.182:8091/api/MedicinePrescriptionAssociation")
   }
   getTestlist(){
     return this._http.get<any[]>("http://106.51.36.182:8093/api/Test")
   }
   getTest(){
     return this._http.get<any[]>("http://106.51.36.182:8093/api/Test")
   }
  //  getTestList(): Observable < any[] > {  

  //   return this._http.get < any > ("http://106.51.36.182:8093/api/Test" );  

  // }
  getRecommendation(){
    return this._http.get<any[]>("http://106.51.36.182:8093/api/recommendation")
  }
  getViewAllDoctors(){
    return this._http.get<any[]>("https://cmddoctor20220512222633.azurewebsites.net/api/Appointment")
  }
  getDoctorData(){
    return this._http.get<any[]>("https://cmddoctor20220512222633.azurewebsites.net/api/Doctor")
  }
  getmedicine(){
    return this._http.get<any[]>("106.51.36.182:8091/api/MedicinePrescriptionAssociation")
  }
  
  
}