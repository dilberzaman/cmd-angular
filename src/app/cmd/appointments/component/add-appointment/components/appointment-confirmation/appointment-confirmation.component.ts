import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-appointment-confirmation',
  templateUrl: './appointment-confirmation.component.html',
  styleUrls: ['./appointment-confirmation.component.scss'],
})
export class AppointmentConfirmationComponent implements OnInit {
  type = 'Appointment';
  PreviousPrescription = 'Click here to open';
  path = '../../../../../../../assets/pic.png';
  alttext: string = 'first image';
  path1 = '../../../../../../../assets/left.png';
  alttext1: string = 'second image';
  alttext2: string = 'calender';
  nameofthedr = 'JohnDoe';
  specialist = 'Leg Specialist';

  confirmationData: any;
  constructor(private service: AppointmentService) {}

  ngOnInit(): void {
    this.confirmationData = this.service.GetAppointmentConfirmationData();
    console.log('Confirmation Component', this.confirmationData);
  }
  formatTime(time: string) {
    return time.slice(0, 5);
  }
  setActivePage(pageName: string) {
    localStorage.setItem('activePageName', pageName);
  }
  activePageName: any;
}
