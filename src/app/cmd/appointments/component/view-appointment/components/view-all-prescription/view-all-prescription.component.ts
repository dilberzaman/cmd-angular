// import { Component, OnInit } from '@angular/core';
// import { ViewappointmentService } from '../../Services/viewappointment.service';
// @Component({
//   selector: 'app-view-all-prescription',
//   templateUrl: './view-all-prescription.component.html',
//   styleUrls: ['./view-all-prescription.component.scss']
// })
// export class ViewAllPrescriptionComponent implements OnInit {
//   Medicine: any[]= [];
//   constructor(private  ViewappointmentService:ViewappointmentService) { }

//   ngOnInit(): void {
  
//   }
// medicine:any[]=
// [
//   {tablet:"crocine"},
//   {tablet:"crocine"},
//   {tablet:"crocine"},
//   {tablet:"crocine"},
//   {tablet:"crocine"}
// ];
// }
import { Component, OnInit ,Input} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ViewappointmentService } from '../../Services/viewappointment.service';

@Component({
  selector: 'app-view-all-prescription',
  templateUrl: './view-all-prescription.component.html',
  styleUrls:  ['./view-all-prescription.component.scss']
})
export class ViewAllPrescriptionComponent implements OnInit {
  
  ChatHistory:any[]=[];
  id=1;
  datarefresh:any;
  MedicinePrescriptionAssociation:any[]=[];
  MedicineForm :FormGroup;
  constructor(private viewappointmentservice:ViewappointmentService,private formBuilder:FormBuilder) { }
  
  ngOnInit(): void {
    this.viewappointmentservice.getmedicine().subscribe(data=>this.MedicinePrescriptionAssociation=data

      // console.log("ChatHistory :", data)
  )
   this.MedicineForm=this.formBuilder.group({
    // id: new FormControl(),
    medicineName: new FormControl(),
    medicineDuration: new FormControl(),
    medicineCycle: new FormControl(),
    medicineDescription: new FormControl()
   })
  this.getdata(true);
  this.refreshData();

    
  }
  getdata(setflag:boolean){this.viewappointmentservice.getMedicinePrescriptionAssociation().subscribe({
    next:(data)=>{
      console.log("MedicinePrescriptionAssociation:",data);
      this.MedicinePrescriptionAssociation=data;
    }
    // console.log("MedicinePrescriptionAssociation:")
  })}
  refreshData(){
    this.datarefresh =
      setInterval(() => {
        this.getdata(false);
       
      }, 0);}
  onsubmit(){
    // console.log(this.MedicineForm.value);
    this.viewappointmentservice.addMedicine(this.MedicineForm.value).subscribe({
      next:(res)=>console.log(res)
    })
  }

}
