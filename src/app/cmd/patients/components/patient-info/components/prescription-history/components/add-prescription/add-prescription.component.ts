import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PatientsService } from '../../../../../../Services/patients.service';

@Component({
  selector: 'app-add-prescription',
  templateUrl: './add-prescription.component.html',
  styleUrls: ['./add-prescription.component.scss']
})
export class AddPrescriptionComponent implements OnInit {
  MedicineForm :FormGroup;
  constructor(private formBuilder:FormBuilder,private patientsService:PatientsService) { }

  ngOnInit(): void {
    this.MedicineForm=this.formBuilder.group({
      // id: new FormControl(),
      medicineName: new FormControl(),
      medicineDuration: new FormControl(),
      medicineCycle: new FormControl(),
      medicineDescription: new FormControl()
     })
  }
  onsubmit(){
    // console.log(this.MedicineForm.value);
    this.patientsService.addMedicine(this.MedicineForm.value).subscribe({
      next:(res)=>console.log(res)
    })
  }
}
