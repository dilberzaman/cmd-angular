import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewSuggestPrescriptionComponent } from './components/view-suggest-prescription/view-suggest-prescription.component';
import { AddFollowUpComponent } from './components/add-follow-up/add-follow-up.component';
import { AudiocallComponent } from './components/audiocall/audiocall.component';
import { VideocallComponent } from './components/videocall/videocall.component';
import { ViewAllChatDetailsComponent } from './components/view-all-chat-details/view-all-chat-details.component';
import { ViewChatComponent } from './components/view-chat/view-chat.component';
import { ViewHistoryComponent } from './components/view-history/view-history.component';
import { ViewissueshistoryComponent } from './components/viewissueshistory/viewissueshistory.component';
import { ViewvitalsComponent } from './components/viewvitals/viewvitals.component';
import { ViewPrescriptionHistoryComponent } from './components/view-prescription-history/view-prescription-history.component';

const routes: Routes = [
  {
    path: 'chat',
    component: ViewSuggestPrescriptionComponent,
  },
  {
    path: '',
    component: ViewSuggestPrescriptionComponent,
    pathMatch: 'full',
  },

  { path: 'videocall', component: VideocallComponent },

  { path: 'viewallchat', component: ViewAllChatDetailsComponent },

  { path: 'viewissueshistory', component: ViewissueshistoryComponent },

  { path: 'addfollowups', component: AddFollowUpComponent },

  { path: 'viewhistory', component: ViewHistoryComponent },

  { path: 'audiocall', component: AudiocallComponent },

  {
    path: 'viewsuggestprescription',
    component: ViewSuggestPrescriptionComponent,
  },

  { path: 'viewvitals', component: ViewvitalsComponent },

  { path: 'viewchat', component: ViewChatComponent },
  { path: '', component: ViewChatComponent, pathMatch: 'full' },
  {path:'viewprescriptionhistory',component:ViewPrescriptionHistoryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}
