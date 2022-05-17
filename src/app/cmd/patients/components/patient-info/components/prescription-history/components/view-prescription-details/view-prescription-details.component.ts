import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PatientsService } from '../../../../../../Services/patients.service';
import { Prescription } from '../../../../Models/Prescription';

@Component({
  selector: 'app-view-prescription-details',
  templateUrl: './view-prescription-details.component.html',
  styleUrls: ['./view-prescription-details.component.scss']
})

export class ViewPrescriptionDetailsComponent implements OnInit {
   Medicine:Prescription[]=[];

  //price : any[]=[{id:1,price:40,medicine:"crocine"},{id:2,price:40,medicine:"crocine"}];


  constructor(private patientsService:PatientsService) { }

  ngOnInit(): void {
    this.patientsService.getMedicinePrescriptionAssociation().subscribe({
      next:(data)=>{
        console.log("MedicinePrescriptionAssociation:",data);
        this.Medicine=data;
      }
  });
}

// totalPrice():number{
//   var count = 0
//   for(let a of this.Medicine){
  
//    if(a.medicineName == "dolo" ){
//    count++;
//    }
//   }
//   return count
// }

}
