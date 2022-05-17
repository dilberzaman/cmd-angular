import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-view-chat',
  templateUrl: './view-chat.component.html',
  styleUrls: ['./view-chat.component.scss']
})
export class ViewChatComponent implements OnInit {
  ChatHistory:any[]=[];
  constructor(private chatService:ChatService) { }

  ngOnInit(): void {
    this.chatService.getPatient().subscribe(data=>this.ChatHistory=data

      // console.log("ChatHistory :", data)
  )
}

}
