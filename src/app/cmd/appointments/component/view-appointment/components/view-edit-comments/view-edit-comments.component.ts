import { Component, OnInit } from '@angular/core';
import { ViewappointmentService } from '../../Services/viewappointment.service';
@Component({
  selector: 'app-view-edit-comments',
  templateUrl: './view-edit-comments.component.html',
  styleUrls: ['./view-edit-comments.component.scss']
})
export class ViewEditCommentsComponent implements OnInit {
  comment:any[]=[];
 
  constructor(private ViewappointmentService:ViewappointmentService) { }
  
  ngOnInit(): void {
      this.ViewappointmentService.getViewAllComments()
      .subscribe(Comments=>this.comment=Comments);
  }
  step: any = 1;
  confirm() {
    this.step = this.step + 1;
  }
  confirmp(){
    this.step = this.step - 1;
  }
  

}
