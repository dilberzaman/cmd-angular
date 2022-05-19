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
  
}
getdata(setflag:boolean){this._viewappointmentservice.getMedicinePrescriptionAssociation().subscribe({
  next:(data)=>{
    console.log("MedicinePrescriptionAssociation:",data);
    this.MedicinePrescriptionAssociation=data;
   }
    // console.log("MedicinePrescriptionAssociation:")
  })}

onsubmit(){
  
  this._viewappointmentservice.addMedicine(this.MedicineForm.value).subscribe({
    next:(res)=>console.log(res)
  })
}
}


