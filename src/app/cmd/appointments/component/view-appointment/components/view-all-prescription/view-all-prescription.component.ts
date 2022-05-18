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
// import { Component, OnInit ,Input} from '@angular/core';
// import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
// import { ViewappointmentService } from '../../Services/viewappointment.service';

// @Component({
//   selector: 'app-view-all-prescription',
//   templateUrl: './view-all-prescription.component.html',
//   styleUrls:  ['./view-all-prescription.component.scss']
// })
// export class ViewAllPrescriptionComponent implements OnInit {
  
//   ChatHistory:any[]=[];
//   id=1;
//   MedicinePrescriptionAssociation:any[]=[];
//   MedicineForm :FormGroup;
//   Medicine: any;
//   formBuilder: any;
//   constructor(private _ViewappointmentService:ViewappointmentService, formBuilder:FormBuilder) { }
  
//   ngOnInit(): void {
//     this._ViewappointmentService.getpatient()
//     .subscribe(data=>this.ChatHistory=data

//       // console.log("ChatHistory :", data)
//   )
//    this.MedicineForm=this.formBuilder.group({
//     // id: new FormControl(),
//     medicineName: new FormControl(),
//     medicineDuration: new FormControl(),
//     medicineCycle: new FormControl(),
//     medicineDescription: new FormControl()
//    }),
  
    
//     // console.log("MedicinePrescriptionAssociation:")
  

    
//   }}
 
