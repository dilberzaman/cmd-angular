import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-your-schudule',
  templateUrl: './view-your-schudule.component.html',
  styleUrls: ['./view-your-schudule.component.scss']
})
export class ViewYourSchuduleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  doctor:any[]=[
    {
      pic:"A",name:"Ajay",date:"Today"
    },
    {
      pic:"C",name:"Arya",date:"Today"
    },
    {
      pic:"D",name:"Arna",date:"Today"
    },
   
  ]
}
