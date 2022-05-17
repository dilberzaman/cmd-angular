import { Component, OnInit } from '@angular/core';
import { ViewappointmentService } from '../../Services/viewappointment.service';
@Component({
  selector: 'app-view-all-prescription',
  templateUrl: './view-all-prescription.component.html',
  styleUrls: ['./view-all-prescription.component.scss']
})
export class ViewAllPrescriptionComponent implements OnInit {
  Medicine: any[]= [];
  constructor(private  ViewappointmentService:ViewappointmentService) { }

  ngOnInit(): void {
    this.ViewappointmentService.getmedicine()

    .subscribe(Medicine=>this.medicine=Medicine);
  }
medicine:any[]=
[
  {tablet:"crocine"},
  {tablet:"crocine"},
  {tablet:"crocine"},
  {tablet:"crocine"},
  {tablet:"crocine"}
];
}
