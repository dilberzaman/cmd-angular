import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-view-edit-account-setting',
  templateUrl: './view-edit-account-setting.component.html',
  styleUrls: ['./view-edit-account-setting.component.scss']
})
export class ViewEditAccountSettingComponent implements OnInit {

  getdoctors: any[] = [];
  doctorform: FormGroup;
  
  apiurl: string;
  // step:any=1;
  // confirm(){
  //   this.step +=1;
  // }
  // confirmp(){
  //   this.step -=1;
  // }
  constructor (
    private doctordata: DoctorService, 
    private formBuilder: FormBuilder,
    private service: DoctorService
  ) { }
  ngOnInit(): void {
    this.getdoctordata();

  }

  getdoctordata(){
    this.doctordata.getdoctordata().subscribe((res) => {

      for(let r of res){

        this.getdoctors.push(r)
      }

    })
  

  // ngOnInit(): void {
  //   this.doctorform = this.formBuilder.group({
  //     id: new FormControl(),
  //     doctorName: new FormControl(),
  //     doctorPicture: new FormControl(),
  //     npinumber: new FormControl(),
  //     practiseLocation: new FormControl(),
  //     spaciality: new FormControl(),
  //     createdAt: new FormControl(),
  //     contactDetailId: new FormControl(),
  //     email: new FormControl(),
  //     phonenumber: new FormControl(),
  //   })

    // this.service.getDoctorProfile(1).subscribe({
    //   next:res => this.doctordata=res,
    //   complete:() => this.doctorform.patchValue({
    //     id:this.doctordata.id,
    //     doctorName:"Jhon Doe",
    //     doctorPicture:this.doctordata.doctorPicture,
    //     npinumber:this.doctordata.npinumber,
    //     practiseLocation:this.doctordata.practiseLocation,
    //     spaciality:this.doctordata.spaciality,
    //     createdAt:this.doctordata.createdAt,
    //     contactDetailId:this.doctordata.contactDetail.Id,
    //     email:this.doctordata.contactDetail.email,
    //     phonenumber:this.doctordata.contactDetail.phoneNumber,
        
    //   })
    // })
  }
  Edit:boolean = true

  onclickEdit(){
 
    this.Edit = !this.Edit
 
  }
  onclickSave(){
    

    var data = {
      id:this.doctorform.get('id').value,
      doctorPicture:this.doctorform.get('doctorPicture').value,
      npinumber:this.doctorform.get('npinumber').value,
      practiseLocation:this.doctorform.get('practiseLocation').value,
      spaciality: this.doctorform.get('spaciality').value,
      createdAt: this.doctorform.get('createdAt').value,
      contactDetail: {
        id: this.doctorform.get('contactDetailId').value,
        email: this.doctorform.get('contactDetailemail').value,
        phoneNumber: this.doctorform.get('contactDetailphoneNumber').value
      }
    }
    console.log(data)
    // this.service.updateDoctorProfile(this.doctorform.get('id').value,data).subscribe({
    //   next:res => console.log(res),
    //   error:err => console.log(err)
    // })
    // this.Edit = !this.Edit 
  }
}
