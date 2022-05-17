// import { Component, OnInit } from '@angular/core';
// import { ViewappointmentService } from '../../Services/viewappointment.service';
// @Component({
//   selector: 'app-view-edit-comments',
//   templateUrl: './view-edit-comments.component.html',
//   styleUrls: ['./view-edit-comments.component.scss']
// })
// export class ViewEditCommentsComponent implements OnInit {
//   comment:any[]=[];
 
//   constructor(private ViewappointmentService:ViewappointmentService) { }
  
//   ngOnInit(): void {
//       this.ViewappointmentService.getViewAllComments()
//       .subscribe(Comments=>this.comment=Comments);
//   }
//   step: any = 1;
//   confirm() {
//     this.step = this.step + 1;
//   }
//   confirmp(){
//     this.step = this.step - 1;
//   }
  

// }
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-view-edit-comments',
//   templateUrl: './view-edit-comments.component.html',
//   styleUrls: ['./view-edit-comments.component.scss']
// })
// export class ViewEditCommentsComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }
//   step: any = 1;
//   confirm() {
//     this.step = this.step + 1;
//   }
//   confirmp(){
//     this.step = this.step - 1;
//   }
  

// }
import { Component, OnInit } from '@angular/core';
//import { ViewEditVitalsComponent } from '../view-edit-vitals/view-edit-vitals.component.spec';
import { ViewappointmentService } from '../../Services/viewappointment.service';
@Component({
  selector: 'app-view-edit-comments',
  templateUrl: './view-edit-comments.component.html',
  styleUrls: ['./view-edit-comments.component.scss'],
})
export class ViewEditCommentsComponent implements OnInit {
  constructor(private ViewappointmentService: ViewappointmentService) {}
  Comments!: any;
  isDisabled: boolean = true;
  ans: string = 'Edit';
 
  ngOnInit(): void {
    this.ViewappointmentService.getvieweditcomments().subscribe({
      next: (res) => (this.Comments = res),
    });
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
      (<HTMLInputElement>document.getElementById('comment')).value
    );
    this.Comments.Comment= num1;
    
    this.ViewappointmentService.updatecommentdata(
      this.Comments.Comment,
      this.Comments
    ).subscribe({
      next: (res) => console.log(res),
    });
    this.isDisabled = true;
    this.ans = 'Edit';
  }
  }
 

