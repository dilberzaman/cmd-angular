import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-view-prescription-history',
  templateUrl: './view-prescription-history.component.html',
  styleUrls: ['./view-prescription-history.component.scss']
})
export class ViewPrescriptionHistoryComponent implements OnInit {
  id=1;
  Symptom:any[]=[];
  constructor(private chatService:ChatService) { }

  ngOnInit(): void {
    this.chatService.getSymptom().subscribe({
      next:(data)=>{
        console.log("Symptom:",data);
        this.Symptom=data;
      }
  })

  }
}
