import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatService } from '../../services/chat.service';

  

@Component({
  selector: 'app-view-all-chat-details',
  templateUrl: './view-all-chat-details.component.html',
  styleUrls: ['./view-all-chat-details.component.scss']
})
export class ViewAllChatDetailsComponent implements OnInit {
  // @ViewChild('ViewAllChatDetailsComponent') symptomdata: any
  
  Patient:any[]=[];
  // Symptom:any[]=[];
  constructor(private chatService:ChatService) { }

  ngOnInit(): void {

    this.chatService.getPatient().subscribe(data=>this.Patient=data)
    
  }
  // GetDetails(data:any){

  //   this.chatService.getSymptomById(data.id).subscribe(data=>this.Symptom=data);
  //   // this.chatService.getSymptom().subscribe(data=>this.ChatHistory=data)

  // }
  

}
