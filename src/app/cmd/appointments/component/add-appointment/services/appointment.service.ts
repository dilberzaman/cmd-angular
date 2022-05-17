import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  confirmationData: any;
  readonly APIUrl = "https://cmdapiservice20220509151334.azurewebsites.net/api/Appointment";
  constructor(private _http: HttpClient) { }

    getAppointmentList() {  
      //return this._http.get < any[] > ("https://localhost:7010/api/Appointment"); 
      return this._http.get < any[] > ("https://cmdapiservice20220509151334.azurewebsites.net/api/Appointment"); 
    } 
    getAppointment(id: number){
      return this._http.get<any[]>(this.APIUrl+"/"+id)
    }
  createAppointment(obj: any){
    return this._http.post<any[]>("https://cmdapiservice20220509151334.azurewebsites.net/api/Appointment", obj)
  }

  getPatientDetail(){
    return this._http.get("https://cmdapiservice20220509151334.azurewebsites.net/patients")
  }

  SetAppointmentConfirmationData(data: any) {
    this.confirmationData = data;
  }

  GetAppointmentConfirmationData() {
    return this.confirmationData;
  }
}
