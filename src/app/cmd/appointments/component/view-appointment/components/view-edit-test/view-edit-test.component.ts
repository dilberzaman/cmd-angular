import { Component, OnInit } from '@angular/core';
import { test } from '../../Models//test.model';
import { ViewappointmentService } from '../../Services/viewappointment.service';
import { FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-edit-test',
  templateUrl: './view-edit-test.component.html',
  styleUrls: ['./view-edit-test.component.scss']
})
export class ViewEditTestComponent implements OnInit {
 testDetails: any[] = [];
 Test:any[]=[];
  constructor(
    private formbuilder: FormBuilder,
    private datepipe: DatePipe,
    private router: Router,
    private ViewappointmentService: ViewappointmentService) { }

  ngOnInit(): void {
  this.Test=[
    {Id:1,Name:"HEART"},
    {Id:2,Name:"BRAIN"},
    {Id:3,Name:"LIVER"},
    {Id:4,Name:"KIDNEY"},
    {Id:5,Name:"LUNGS"}
  ]

    this.ViewappointmentService.getTestlist()
    .subscribe(testDetails=>this.testDetails=testDetails);
    this.ViewappointmentService.getTestlist()
    .subscribe(Test=>this.Test=Test)
  }
  displayFnForTest(patient: test) {
    return patient && patient.name ? patient.name : '';
  }
        result: string = 'Heart';
        //event handler for the select element's change event
        test (event: any) {
         //update the ui
          this.result = event.target.value;
   } 
 }
     
  
   
  