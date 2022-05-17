// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-view-close',
//   templateUrl: './view-close.component.html',
//   styleUrls: ['./view-close.component.scss']
// })
// export class ViewCloseComponent implements OnInit {
//   step:any=1;
//   SelectedValue:string='ViewAppointment'
//   constructor() { }

//   ngOnInit(): void {
//   }
//   confirm(){
//     this.step=this.step +1;
//   }
//   value(event:any){
//     this.SelectedValue=event.target.value;
//   }

// }
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-close',
  templateUrl: './view-close.component.html',
  styleUrls: ['./view-close.component.scss']
})
export class ViewCloseComponent implements OnInit {
  step:any=1;
  SelectedValue:string='ViewAppointment'
  constructor() { }

  ngOnInit(): void {
  }
  confirm(){
    this.step=this.step +1;
  }
  value(event:any){
    this.SelectedValue=event.target.value;
  }

}
