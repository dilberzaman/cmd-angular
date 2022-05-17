import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppointmentHistoryComponent } from './cmd/patients/components/patient-info/components/appointment-history/appointment-history.component';
import { PrescriptionHistoryComponent } from './cmd/patients/components/patient-info/components/prescription-history/prescription-history.component';
import { ViewSymptonsHistoryComponent } from './cmd/patients/components/patient-info/components/view-symptons-history/view-symptons-history.component';
import { PatientInfoComponent } from './cmd/patients/components/patient-info/patient-info.component';
import { ViewAllPatientComponent } from './cmd/patients/components/view-all-patient/view-all-patient.component';
import { LandingScreenComponent } from './shared/components/landing-screen/landing-screen.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { TopHeaderComponent } from './shared/components/top-header/top-header.component';
import { ViewAllChatDetailsComponent } from './cmd/chat/components/view-all-chat-details/view-all-chat-details.component';
import { ViewAllAppointmentComponent } from './cmd/appointments/component/view-all-appointment/view-all-appointment.component';
import { ViewFeedbackComponent } from './cmd/appointments/component/view-feedback/view-feedback.component';
import { GiveFeedbackComponent } from './cmd/appointments/component/give-feedback/give-feedback/give-feedback.component';
import { ViewEditAccountSettingComponent } from './cmd/settings/components/view-edit-account-setting/view-edit-account-setting.component';
import { ViewAvailibiltySettingComponent } from './cmd/settings/components/view-availibilty-setting/view-availibilty-setting.component';
import { ViewAppointmentComponent } from './cmd/appointments/component/view-appointment/view-appointment.component';
const routes: Routes = [
  {
    path: '',
    component: LandingScreenComponent,
    pathMatch: 'full',
  },
  {
    path: 'viewallappointments',
    component: ViewAllAppointmentComponent,
  },
  {
    path: '',
    component: ViewAllAppointmentComponent,
    pathMatch: 'full',
  },
  {
    path: 'ViewFeedbackComponent',
    component: ViewFeedbackComponent,
  },
  {
    path: '',
    component: ViewFeedbackComponent,
    pathMatch: 'full',
  },
  {
    path: 'GiveFeedbackComponent',
    component: GiveFeedbackComponent,
  },
  {
    path: '',
    component: GiveFeedbackComponent,
    pathMatch: 'full',
  },
  {
    path: 'ViewEditAccountSettingComponent',
    component: ViewEditAccountSettingComponent,
  },

  {
    path: '',
    component: ViewEditAccountSettingComponent,
    pathMatch: 'full',
  },
  {
    path: 'ViewAvailibiltySettingComponent',
    component: ViewAvailibiltySettingComponent,
  },
  {
    path: '',
    component: ViewAvailibiltySettingComponent,
    pathMatch: 'full',
  },
  {
    path: 'cmd',
    loadChildren: () => import('./cmd/cmd.module').then((m) => m.CmdModule),
  },
 
{ 
   path:"ViewAppointment",
    component:ViewAppointmentComponent,
 },
{
    path:"",
   component:ViewAppointmentComponent,
   pathMatch: "full" 
 },
];


const config: ExtraOptions = {
  useHash : false
}

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash : false})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
