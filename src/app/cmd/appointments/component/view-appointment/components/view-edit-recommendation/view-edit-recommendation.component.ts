import { Component, OnInit } from '@angular/core';
import { ViewappointmentService } from '../../Services/viewappointment.service';

@Component({
  selector: 'app-view-edit-recommendation',
  templateUrl: './view-edit-recommendation.component.html',
  styleUrls: ['./view-edit-recommendation.component.scss']
})
export class ViewEditRecommendationComponent implements OnInit {
 Doctor: any[]=[];

  constructor(private ViewappointmentService:ViewappointmentService) { }

  ngOnInit(): void {
    this.ViewappointmentService.getViewAllDoctors()
    .subscribe(recommendation=>recommendation=recommendation);
  }
  selected: string = '';

  //event handler for the select element's change event
  Doctors (event: any) {
  //update the ui
  this.selected = event.target.value;
  }
}
