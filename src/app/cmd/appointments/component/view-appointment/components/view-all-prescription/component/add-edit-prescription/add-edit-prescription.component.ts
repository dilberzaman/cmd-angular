import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AddPrescriptionComponent } from 'src/app/cmd/chat/components/view-suggest-prescription/components/add-prescription/add-prescription.component';
import { ViewappointmentService } from '../../../../Services/viewappointment.service';


@Component({
  selector: 'app-add-edit-prescription',
  templateUrl: './add-edit-prescription.component.html',
  styleUrls: ['./add-edit-prescription.component.scss']
})
export class AddEditPrescriptionComponent implements OnInit {
ChatHistory:any[]=[];
id=1;
MedicinePrescriptionAssociation:any[]=[];
MedicineForm :FormGroup;
Medicine: any;
formBuilder: any;
constructor(private _viewappointmentservice:ViewappointmentService, formBuilder:FormBuilder) { }
@Output() event =new EventEmitter<string>()
ngOnInit(): void {

//   this._viewappointmentservice.getMedicinePrescriptionAssociation()
//   .subscribe(data=>{this.MedicinePrescriptionAssociation=data,

//      console.log("ChatHistory :", data)}
// )
//  this.MedicineForm=this.formBuilder.group({
//   // id: new FormControl(),
//   medicineName: new FormControl(),
//   medicineDuration: new FormControl(),
//   medicineCycle: new FormControl(),
//   medicineDescription: new FormControl()
//  }),
//  this._viewappointmentservice.getMedicinePrescriptionAssociation().subscribe({
//   next:(data)=>{
//     console.log("MedicinePrescriptionAssociation:",data);
//     this.MedicinePrescriptionAssociation=data;
//   }
//   // console.log("MedicinePrescriptionAssociation:")
// }) 
}
onsubmit(){
  // console.log(this.MedicineForm.value);
 
  }
}


