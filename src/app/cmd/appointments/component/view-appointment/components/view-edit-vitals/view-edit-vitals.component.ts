// import { Component, OnInit } from '@angular/core';
// //import { ViewEditVitalsComponent } from '../view-edit-vitals/view-edit-vitals.component.spec';
// import { ViewappointmentService } from '../../Services/viewappointment.service';
// import { VitalsModule } from '../../Models/vitals/vitals.module';
// @Component({
//   selector: 'app-view-edit-vitals',
//   templateUrl: './view-edit-vitals.component.html',
//   styleUrls: ['./view-edit-vitals.component.scss'],
// })
// export class ViewEditVitalsComponent implements OnInit {
//   // vitals: VitalsModule[]=[];
//   // Check=[

//   // ];
//   // vital:any
//   //   constructor(private ViewappointmentService:ViewappointmentService) { }

//   //   ngOnInit(): void {
//   //     this.ViewappointmentService.getvieweditvitals()
//   //     .subscribe({
//   //       next:(res)=>this.vital=res
//   //     }
//   //     );
//   //   }

//   //   Edit:boolean = true

//   //   onclick(){

//   //     this.Edit = !this.Edit
//   // }
//   // }
//   constructor(private ViewappointmentService: ViewappointmentService) {}

//   Vitals!: any;
//   isDisabled: boolean = true;
//   ans: string = 'Edit';

//   ngOnInit(): void {
//     this.ViewappointmentService.getvieweditvitals().subscribe({
//       next: (res) => (this.Vitals = res),
//     });
//   }

//   check(a = this.ans) {
//     if (a === 'Edit') {
//       this.Edit();
//     } else {
//       this.Save();
//     }
//   }

//   Edit() {
//     this.isDisabled = false;
//     this.ans = 'Save';
//   }

//   Save() {
//     var num1 = parseFloat(
//       (<HTMLInputElement>document.getElementById('ecg')).value
//     );
//     this.Vitals.ecg = num1;

//     var num2 = parseFloat(
//       (<HTMLInputElement>document.getElementById('temp')).value
//     );
//     this.Vitals.temperature = num2;

//     var num3 = parseFloat(
//       (<HTMLInputElement>document.getElementById('diabetes')).value
//     );
//     this.Vitals.diabetes = num3;

//     var num4 = parseFloat(
//       (<HTMLInputElement>document.getElementById('respiration')).value
//     );
//     // this.Vitals.respirationRate = num4;
//     // this.ViewappointmentService.updatevitaldata(
//     //   this.Vitals.id,
//     //   this.Vitals
//     // ).subscribe({
//     //   next: (res) => console.log(res),
//     // });
//     // this.isDisabled = true;
//     // this.ans = 'Edit';
//   }
// }
import { Component, OnInit } from '@angular/core';

import { ViewappointmentService } from '../../Services/viewappointment.service';
import { VitalsModule } from '../../Models/vitals/vitals.module';
@Component({
  selector: 'app-view-edit-vitals',
  templateUrl: './view-edit-vitals.component.html',
  styleUrls: ['./view-edit-vitals.component.scss']
})
export class ViewEditVitalsComponent implements OnInit {
  // vitals: VitalsModule[]=[];
  // Check=[

  // ];
  // vital:any 
  //   constructor(private ViewappointmentService:ViewappointmentService) { }

  //   ngOnInit(): void {
  //     this.ViewappointmentService.getvieweditvitals()
  //     .subscribe({
  //       next:(res)=>this.vital=res
  //     }  
  //     );
  //   }

  //   Edit:boolean = true

  //   onclick(){

  //     this.Edit = !this.Edit
  // }
  // }
  constructor(private ViewappointmentService: ViewappointmentService) { }

  Vitals!: any;
  isDisabled: boolean = true;
  ans: string = 'Edit';

  ngOnInit(): void {
    this.ViewappointmentService.getvieweditvitals()
      .subscribe({
        next: (res) => this.Vitals = res
      })
  }

  check(a = this.ans) {
    if (a === 'Edit') {
      this.Edit();
    } else {
      this.Save();
    }
  }

  Edit() {
    this.isDisabled = false;
    this.ans = 'Save';
  }

  Save() {
    var num1 = parseFloat(
      (<HTMLInputElement>document.getElementById('ecg')).value
    );
    this.Vitals.ecg = num1;

    var num2 = parseFloat(
      (<HTMLInputElement>document.getElementById('temp')).value
    );
    this.Vitals.temperature = num2;

    var num3 = parseFloat(
      (<HTMLInputElement>document.getElementById('diabetes')).value
    );
    this.Vitals.diabetes = num3;

    var num4 = parseFloat(
      (<HTMLInputElement>document.getElementById('respiration')).value
    );
    this.Vitals.respirationRate = num4;
    this.ViewappointmentService.updatevitaldata(this.Vitals.id,this.Vitals).subscribe({
      next:(res)=>console.log(res)
    })
    this.isDisabled = true;
    this.ans = 'Edit';
  }
}

