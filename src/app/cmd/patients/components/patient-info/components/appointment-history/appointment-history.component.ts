import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../../../../Services/patients.service';
@Component({
  selector: 'app-appointment-history',
  templateUrl: './appointment-history.component.html',
  styleUrls: ['./appointment-history.component.scss']
})
export class AppointmentHistoryComponent implements OnInit {
  doctor :any[]=[];
    constructor(private patientsService:PatientsService) { }
  ngOnInit(): void {
    this.patientsService.getDoctorName()
    .subscribe(patients=>this.doctor=patients  
    );
  
  }
  card2:string="col-md-8 col-sm-8 col-xs-8 Header1";
  card3:string="col-md-2 col-sm-2 col-xs-2";
  card4:string="col-md-7 col-sm-7col-xs-7";
  card5:string="col-md-3 col-sm-3 col-xs-3 cls";
  card6:string="col-md-12 col-sm-12 col-xs-12";

}