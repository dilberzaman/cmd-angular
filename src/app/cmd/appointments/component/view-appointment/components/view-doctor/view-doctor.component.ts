import { Component, OnInit } from '@angular/core';
import { ViewappointmentService } from '../../Services/viewappointment.service';
@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.scss']
})
export class ViewDoctorComponent implements OnInit {
  doctors: any[]= [];
  data:any[]=[];
  constructor(private  ViewappointmentService:ViewappointmentService) { }

  ngOnInit(): void {
    this.ViewappointmentService.getViewAllDoctors()

    .subscribe(doctors=>this.doctors=doctors);

    this.ViewappointmentService.getDoctorData()
    .subscribe(data=>this.data=data);
  }

}
