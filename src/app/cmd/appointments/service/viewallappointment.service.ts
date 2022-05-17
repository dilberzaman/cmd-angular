import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ViewallappointmentService {
  apiurl: string;

  //5.Class Constructor

  //      Inject the services needed for backend services

  //      Inject Router to navigate to other pages

  constructor(private http: HttpClient) {
    //6. Assign backend api to the local variables

    this.apiurl = `https://cmdapiservice20220509151334.azurewebsites.net/api/Appointment?doctorid=1`;
  }
  getAllAppointments() {
    return this.http.get<any[]>(`${this.apiurl}`);
  }

  getappointment() {
    return this.http.get<any[]>(
      'https://cmdapiservice20220509151334.azurewebsites.net/api/Appointment?doctorid=1 '
    );
  }
}
