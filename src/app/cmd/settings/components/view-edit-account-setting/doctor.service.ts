import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  constructor(
    private http:HttpClient
  ) { }

  getDoctorProfile(id:number){
    return this.http.get("https://localhost:7222/api/Doctor/" + id)
  }

  updateDoctorProfile(id:number,data:any){
    return this.http.put("https://localhost:7222/api/Doctor/" + id, data)
  }
  
}
