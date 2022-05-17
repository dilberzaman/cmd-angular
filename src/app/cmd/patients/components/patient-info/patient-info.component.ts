import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../../Services/patients.service';


@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.scss']
})
export class PatientInfoComponent implements OnInit {
  patients: any[]= [];
  bloodGroup: any[] = [];
  constructor(private patientsService:PatientsService) { }

  ngOnInit(): void {
    this.patientsService.getViewAllPatients()
    .subscribe(patients=>this.patients=patients  
    );
    // this.PatientsService.getBloodGroup()
    // .subscribe(patients=>this.bloodGroup=patients  
    // );
  }

}
