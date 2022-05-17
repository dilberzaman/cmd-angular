import { Component, OnInit } from '@angular/core';
import { PatientsService } from 'src/app/cmd/patients/Services/patients.service';

@Component({
  selector: 'app-view-symptons-history',
  templateUrl: './view-symptons-history.component.html',
  styleUrls: ['./view-symptons-history.component.scss']
})
export class ViewSymptonsHistoryComponent implements OnInit {
  showme: boolean = true;
  showme1: boolean = false;
  showme2: boolean = false;
  showme3: boolean = false;
  showme4: boolean = false;
symptons: any[] = [];
doctor: any []=[]
  constructor(private patientsService:PatientsService) { }

  ngOnInit(): void {
    this.patientsService.getSymptom()
    .subscribe(data=>this.symptons = data);
    this.patientsService.getDoctorName()
    .subscribe(patients=>this.doctor=patients  
    );
  }
  toggleTag(){
    this.showme =! this.showme;
  }
  toggleTag1(){
    this.showme1 =! this.showme1;
  }
  toggleTag2(){
    this.showme2 =! this.showme2;
  }
  toggleTag3(){
    this.showme3 =! this.showme3;
  }
  toggleTag4(){
    this.showme4 =! this.showme4;
  }

}
