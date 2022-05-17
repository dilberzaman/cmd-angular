import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChatService } from '../../services/chat.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-view-history',
  templateUrl: './view-history.component.html',
  styleUrls: ['./view-history.component.scss']
})
export class ViewHistoryComponent implements OnInit {
  // datepipe: any;
  // updateFormDate(event: any) {
  //   var date = this.datepipe.transform(event, 'yyyy-MM-dd');
    // this.appointmentForm.get('date').setValue(date);
    selected: Date | null;
    doctor:any[]=[];
    saverange(){
      var latest_date =this.datepipe.transform(this.selected, 'yyyy-dd-MM')+'T'+'00:00:00';
    console.log(latest_date)

    this.doctor=this.doctor.filter(t=>t.appointmentDate==latest_date) 
      console.warn("working")
    }
  

 constructor(private chatService:ChatService,public datepipe: DatePipe) { }
  ngOnInit(): void {
    //date: new FormControl(),
     this.chatService.getAppointment().subscribe(data=>this.doctor=data)
  }
  // doctor:any[]=[
  //   {
  //     pic:"A",name:"Ajay",date:"Today"
  //   },
  //   {
  //     pic:"C",name:"Arya",date:"Today"
  //   },
  //   {
  //     pic:"D",name:"Arnav",date:"Today"
  //   },
   
  // ]
}
