import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatDashboardComponent } from './components/chat-dashboard/chat-dashboard.component';
import { ViewAllChatDetailsComponent } from './components/view-all-chat-details/view-all-chat-details.component';
import { ViewChatComponent } from './components/view-chat/view-chat.component';
import { ViewHistoryComponent } from './components/view-history/view-history.component';
import { ViewSuggestPrescriptionComponent } from './components/view-suggest-prescription/view-suggest-prescription.component';
import { AddPrescriptionComponent } from './components/view-suggest-prescription/components/add-prescription/add-prescription.component';
import { PrescriptionDetailsComponent } from './components/view-suggest-prescription/components/prescription-details/prescription-details.component';
import { AddFollowUpComponent } from './components/add-follow-up/add-follow-up.component';
import { ViewYourSchuduleComponent } from './components/add-follow-up/components/view-your-schudule/view-your-schudule.component';
import { ViewIssuesHistoryComponent } from './components/view-issues-history/view-issues-history.component';
import { AudiocallComponent } from './components/audiocall/audiocall.component';
import { VideocallComponent } from './components/videocall/videocall.component';
import { ViewissueshistoryComponent } from './components/viewissueshistory/viewissueshistory.component';
import { ViewvitalsComponent } from './components/viewvitals/viewvitals.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewPrescriptionHistoryComponent } from './components/view-prescription-history/view-prescription-history.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatService } from './services/chat.service';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FullCalendarModule } from '@fullcalendar/angular';
import {MatCardModule} from '@angular/material/card';

const COMPONENT = [
  ChatDashboardComponent,
  ViewAllChatDetailsComponent,
  ViewChatComponent,
  ViewHistoryComponent,
  ViewSuggestPrescriptionComponent,
  AddPrescriptionComponent,
  PrescriptionDetailsComponent,
  AddFollowUpComponent,
  ViewYourSchuduleComponent,
  ViewIssuesHistoryComponent,
  AudiocallComponent,
  ViewPrescriptionHistoryComponent
];

@NgModule({
  declarations: [
    ...COMPONENT,
    VideocallComponent,
    ViewissueshistoryComponent,
    ViewvitalsComponent,
    ViewPrescriptionHistoryComponent,
   // DatePipe
  ],
  imports: [
    CommonModule, 
    ChatRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatCardModule
  ],
  exports: [...COMPONENT],
  providers:[
    
    ChatService

  ]
})
export class ChatModule {}
