import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
// import { Console } from 'console';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-view-suggest-prescription',
  templateUrl: './view-suggest-prescription.component.html',
  styleUrls: ['./view-suggest-prescription.component.scss']
})
export class ViewSuggestPrescriptionComponent implements OnInit {
  ChatHistory:any[]=[];
  id=1;
  datarefresh:any;
  MedicinePrescriptionAssociation:any[]=[];
  MedicineForm :FormGroup;
  constructor(private chatService:ChatService,private formBuilder:FormBuilder) { }
  
  ngOnInit(): void {
    this.chatService.getPatient().subscribe(data=>this.ChatHistory=data

      // console.log("ChatHistory :", data)
  )
   this.MedicineForm=this.formBuilder.group({
    // id: new FormControl(),
    medicineName: new FormControl(),
    medicineDuration: new FormControl(),
    medicineCycle: new FormControl(),
    medicineDescription: new FormControl()
   })
   //this.chatService.getMedicinePrescriptionAssociation().subscribe({
    //next:(data)=>{
      //console.log("MedicinePrescriptionAssociation:",data);
      //this.MedicinePrescriptionAssociation=data;
    //}
    // console.log("MedicinePrescriptionAssociation:")
  //})
  this.getdata(true);
  this.refreshData();

    
  }
  getdata(setflag:boolean){this.chatService.getMedicinePrescriptionAssociation().subscribe({
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
       
      }, 10000);}
  onsubmit(){
    // console.log(this.MedicineForm.value);
    this.chatService.addMedicine(this.MedicineForm.value).subscribe({
      next:(res)=>console.log(res)
    })
  }

}