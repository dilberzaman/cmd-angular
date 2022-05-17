import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
@Injectable()
export class ChatService {

  constructor(private http: HttpClient) { }
  getPatient() {
    return this.http.get<any[]>("https://patientapiservice20220517183434.azurewebsites.net/api/patient")
  }
  addMedicine(data: any) {
    return this.http.post("https://cmdapiservice20220510121748.azurewebsites.net/api/MedicinePrescriptionAssociation", data)
  }
  getMedicinePrescriptionAssociation() {
    return this.http.get<any[]>("https://cmdapiservice20220510121748.azurewebsites.net/api/MedicinePrescriptionAssociation")
  }
  getSymptom() {
    return this.http.get<any[]>("https://cmdapiservice20220510121748.azurewebsites.net/api/Symptom")
  }
  getAppointment() {
    return this.http.get<any[]>("https://cmddoctor20220512222633.azurewebsites.net/api/Appointment")
  }

}
