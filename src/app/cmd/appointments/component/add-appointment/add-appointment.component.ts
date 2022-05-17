import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PatientDetail } from './Models/patientDetail.model';
import { AppointmentService } from './services/appointment.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss'],
})
export class AddAppointmentComponent implements OnInit {
  step: any = 1;
  appointmentForm: FormGroup;
  doctorId: number;

  patientDetails: PatientDetail[] = [];
  timeArray = [
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
  ];
  constructor(
    private formbuilder: FormBuilder,
    private datepipe: DatePipe,
    private _service: AppointmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.doctorId = JSON.parse(localStorage.getItem('doctorId'));
    this.appointmentForm = this.formbuilder.group({
      patientDetail: new FormControl(),
      patientIssue: new FormControl('', [Validators.required]),
      reason: new FormControl(),
      date: new FormControl([Validators.required]),
      time: new FormControl('', [Validators.required]),
    });

    this._service.getPatientDetail().subscribe({
      next: (response: any[]) => {
        response.forEach((item) => {
          this.patientDetails.push(
            new PatientDetail(item.id, item.patientName, item.phoneNumber)
          );
        });
      },
      error: (err) => console.log(err),
      complete: () => console.log(this.patientDetails),
    });
  }
  displayFnForPatient(patient: PatientDetail) {
    return patient && patient.patientName ? patient.patientName : '';
  }
  updateFormDate(event: any) {
    var date = this.datepipe.transform(event, 'yyyy-MM-dd');
    this.appointmentForm.get('date').setValue(date);
  }
  confirm() {
    this.step = this.step + 1;
  }
  updateFormTime(item) {
    this.appointmentForm.get('time').setValue(item);
  }
  onsubmit() {
    var data = {
      appointmentDate: this.appointmentForm.get('date').value,
      appointmentTime: this.appointmentForm.get('time').value,
      patientId: this.appointmentForm.get('patientDetail').value.id,
      doctorId: this.doctorId,
      issue: this.appointmentForm.get('patientIssue').value,
      reason: this.appointmentForm.get('reason').value,
      patientName: this.appointmentForm.get('patientDetail').value.patientName,
    };
    this._service.createAppointment(data).subscribe({
      next: (response) => {
        console.log(response);
        this._service.SetAppointmentConfirmationData(response);
      },
      complete: () => this.router.navigate(['AppointmentConfirmation']),
    });
  }
  setActivePage(pageName: string) {
    localStorage.setItem('activePageName', pageName);
  }
  activePageName: any;
}
