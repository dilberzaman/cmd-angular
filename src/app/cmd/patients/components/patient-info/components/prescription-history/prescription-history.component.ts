import { Component, OnInit } from '@angular/core';
import { PatientsService } from 'src/app/cmd/patients/Services/patients.service';
@Component({
  selector: 'app-prescription-history',
  templateUrl: './prescription-history.component.html',
  styleUrls: ['./prescription-history.component.scss']
})
export class PrescriptionHistoryComponent implements OnInit {
  symptoms: any[] = [];
  constructor(private patientsService:PatientsService) { }

  ngOnInit(): void {
    this.patientsService.getSymptom()
    .subscribe(data=>this.symptoms = data);
  }

}
