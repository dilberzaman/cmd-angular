import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllPatientComponent } from '../patients/components/view-all-patient/view-all-patient.component';
import { AddAppointmentComponent } from './component/add-appointment/add-appointment.component';
import { AppointmentConfirmationComponent } from './component/add-appointment/components/appointment-confirmation/appointment-confirmation.component';
import { ViewAllAppointmentComponent } from './component/view-all-appointment/view-all-appointment.component';
import { ViewCloseAppointmentComponent } from './component/view-appointment/components/close-appointment/view-close-appointment/view-close-appointment.component';
import { AddEditPrescriptionComponent } from './component/view-appointment/components/view-all-prescription/component/add-edit-prescription/add-edit-prescription.component';
import { ViewAppointmentComponent } from './component/view-appointment/view-appointment.component';
import { ViewCloseComponent } from './component/view-appointment/components/close-appointment/view-close/view-close.component';
const routes: Routes = [
  {
    path: 'AddEditPrescriptionComponent',
    component: AddEditPrescriptionComponent,
  },
  {
    path:"ViewCloseappointment",
    component:ViewCloseAppointmentComponent,
  },

  {
    path: 'viewappointment',
    component: ViewAppointmentComponent,
  },
  {
    path: 'viewallappointment',
    component: ViewAllAppointmentComponent,
  },
  {
    path: 'AddAppoinments',
    component: AddAppointmentComponent,
  },
  {
    path: 'AppointmentConfirmation',
    component: AppointmentConfirmationComponent,
  },
  {
    path: 'viewappointment',
    component: ViewAllAppointmentComponent,
  },
  {
    path: 'AddAppoinments',
    component: AddAppointmentComponent,
  },
  {
    path: '',
    component: AddAppointmentComponent,
    pathMatch: 'full',
  },

  {
    path: 'AppointmentConfirmation',
    component: AppointmentConfirmationComponent,
  },
  {
    path: 'viewallappointment',

    component: ViewAllAppointmentComponent,
  },
  {
    path: 'patients',
    component: ViewAllPatientComponent,
  },
  {
    path: 'AddAppoinments',
    component: AddAppointmentComponent,
  },
  {
    path: '',
    component: AddAppointmentComponent,
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentsRoutingModule {}
