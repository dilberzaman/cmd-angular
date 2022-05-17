import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewAllAppointmentComponent } from '../appointments/component/view-all-appointment/view-all-appointment.component';
import { AddPrescriptionComponent } from '../chat/components/view-suggest-prescription/components/add-prescription/add-prescription.component';
import { AppointmentHistoryComponent } from './components/patient-info/components/appointment-history/appointment-history.component';
import { ViewPrescriptionDetailsComponent } from './components/patient-info/components/prescription-history/components/view-prescription-details/view-prescription-details.component';
import { PrescriptionHistoryComponent } from './components/patient-info/components/prescription-history/prescription-history.component';
import { AddEditSymptonHistoryComponent } from './components/patient-info/components/view-symptons-history/components/add-edit-sympton-history/add-edit-sympton-history.component';
import { ViewSymptonsHistoryComponent } from './components/patient-info/components/view-symptons-history/view-symptons-history.component';
import { PatientInfoComponent } from './components/patient-info/patient-info.component';
import { ViewAllPatientComponent } from './components/view-all-patient/view-all-patient.component';


const routes: Routes = [
 {
  path:"patientinfo",
 component:PatientInfoComponent
},
{
  path:"viewallpatients",
 component:ViewAllPatientComponent
},

  {
    path:"add-edit-sympton-history",
    component:AddEditSymptonHistoryComponent
},
{
  path:"viewprescription",
  component:ViewPrescriptionDetailsComponent
},
{
  path:"dashboard",
  component: ViewAllAppointmentComponent
},
{
  path:"confirm",
  component: PatientInfoComponent
},
{
  path:"prescription",
  component: PatientInfoComponent
},
{
  path:"remove",
  component: PatientInfoComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
