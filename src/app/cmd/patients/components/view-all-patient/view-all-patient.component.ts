import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../../Services/patients.service';
import { ContactDetail, Patients } from '../Models/viewAllPatients';

@Component({
  selector: 'app-view-all-patient',
  templateUrl: './view-all-patient.component.html',
  styleUrls: ['./view-all-patient.component.scss']
})
export class ViewAllPatientComponent implements OnInit {

  patients: Patients[]= [];
  mobileNumbers: ContactDetail[] = [];
  constructor(private patientsService:PatientsService) { }

  ngOnInit(): void {
    this.patientsService.getViewAllPatients()
    .subscribe(patients=>this.patients=patients  
    );
    this.patientsService.getMobileNumber()
    .subscribe(patients=>this.mobileNumbers=patients  
    );
  }
   searchText: string="";
   card3:string="col-md-3 col-sm-3 col-xs-3 col-3";
   pencil: string="pencil glyphicon glyphicon-pencil";
   card4: string="col-md-4 col-sm-4 col-xs-4 col-4";
   card5: string="col-md-5 col-sm-5 col-xs-5 col-5";
   photo =["../assets/images/patient1.jpg","../assets/images/patient2.jpg","../assets/images/patient3.jpg",
   "../assets/images/patient4.jpg","../assets/images/patient5.png","../assets/images/patient6.jpg",
   "../assets/images/patient7.png","../assets/images/patient8.jpg","../assets/images/patient9.png",
   "../assets/images/patient10.jpg","../assets/images/patient11.jpg","../assets/images/patient12.jpg"
  
   ];
}
