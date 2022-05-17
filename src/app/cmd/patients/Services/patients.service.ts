import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()  
export class PatientsService {

  constructor(private http: HttpClient) {

  }
  getViewAllPatients() {
    return this.http.get<any[]>("https://patientapiservice20220517183434.azurewebsites.net/api/Patient")
  }
  getMobileNumber() {
    return this.http.get<any[]>("https://patientapiservice20220517183434.azurewebsites.net/api/ContactDetail")
  }
  addMedicine(data:any)  
  {
    return this.http.post("https://cmdapiservice20220510121748.azurewebsites.net/api/MedicinePrescriptionAssociation",data)
  }
  getMedicinePrescriptionAssociation(){
    return this.http.get<any[]>("https://cmdapiservice20220510121748.azurewebsites.net/api/MedicinePrescriptionAssociation")
  }
  getSymptom(){
    return this.http.get<any[]>("https://cmdapiservice20220510121748.azurewebsites.net/api/Symptom")
  }
  getDoctorName() {
    return this.http.get<any[]>("https://cmddoctor20220512222633.azurewebsites.net/api/Doctor")
  }
  
  
}
