import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  apiurl: string;



  //5.Class Constructor

  //      Inject the services needed for backend services

  //      Inject Router to navigate to other pages

  constructor(private http:HttpClient) {

    //6. Assign backend api to the local variables

    this.apiurl = `https://cmddoctor20220518111744.azurewebsites.net/api/doctor`

   }
   getdoctordata(){

    return this.http.get<any[]>(`${this.apiurl}`)

  }

  // getDoctorProfile(id:number){
  //   return this.http.get("https://cmddoctor20220512222633.azurewebsites.net/api/Doctor" + id)
  // }

  // updateDoctorProfile(id:number,data:any){
  //   return this.http.put("https://localhost:7222/api/Doctor/" + id, data)
  // }
  
}
