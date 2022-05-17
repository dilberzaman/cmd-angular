import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { ViewallappointmentService } from '../../service/viewallappointment.service';

@Component({
  selector: 'app-view-all-appointment',
  templateUrl: './view-all-appointment.component.html',
  styleUrls: ['./view-all-appointment.component.scss'],
})
export class ViewAllAppointmentComponent implements OnInit {
  getallappointments: any[] = [];
  appointments: any[] = [];
  countConfirm;
  confirmlist: any[] = [];
  confirmcount;
  openlist: any[] = [];
  opencount;
  count = 0;

  issuedata: any;

  constructor(private allappointments: ViewallappointmentService) {}

  ngOnInit(): void {
    this.getallappointment();
    this.getallappointment();

    console.log(this.getallappointments);
    localStorage.setItem('doctorId', JSON.stringify(1));
    this.TotalAppointments();

    this.allappointments
      .getappointment()
      .subscribe((appointments) => (this.appointments = appointments));
    this.confirmlist = this.getallappointments.filter(
      (a) => a.status == 'Confirm'
    );
    console.log(this.confirmlist);
    this.confirmcount = this.confirmlist.length;
    console.log(this.confirmcount);
  }

  getallappointment() {
    this.allappointments.getAllAppointments().subscribe((res) => {
      for (let r of res) {
        this.getallappointments.push(r);
      }
    });
  }
  TotalAppointments(): number {
    var count = 4;
    for (let a of this.appointments) {
      if (a.status == 'Open' || a.status == 'Confirm') {
        count++;
      }
    }
    return count;
  }
  AcceptedAppointments(): number {
    var count = 0;
    for (let b of this.appointments) {
      if (b.status == 'Open' || b.status == 'Confirm') {
        count++;
      }
    }
    return count;
  }

  // TotalAppointments():number{
  //   var count;
  //     //  for(let a of this.appointments){
  //   if(this.appointments[0].status == "Open")
  //   {
  //   count= count + 1;
  //   }
  //   else{
  //     "not found"
  //   }
  // //  }
  //   return count;
  //   }

  //totalcount = this.TotalAppointments()

  //totalcount = this.TotalAppointments()
  cal: boolean = false;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay',
    },
    initialView: 'dayGridMonth',
    events: [
      { title: 'jhon fever appointment', date: '2022-03-21' },
      { title: 'riya body checkup appointment', date: '2022-03-17' },
      { title: 'kavya headache appointment', date: '2022-03-12' },
    ],
  };
  calendar() {
    this.cal = !this.cal;
  }
}
