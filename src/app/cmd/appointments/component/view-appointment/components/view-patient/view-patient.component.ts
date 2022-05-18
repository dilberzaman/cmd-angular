import { Component, OnInit } from '@angular/core';
import { ViewappointmentService } from '../../Services/viewappointment.service';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.scss']
})
export class ViewPatientComponent implements OnInit {
  patients: any[]= [];
  mobileno:any[]=[];
  
  constructor(private  ViewappointmentService:ViewappointmentService) { }
  ngOnInit(): void {

    this.ViewappointmentService.getViewAllPatients()
    .subscribe(patients=>this.patients=patients);
    
    this.ViewappointmentService.getContact()
    .subscribe(patients=>this.mobileno=patients);

  }
}
