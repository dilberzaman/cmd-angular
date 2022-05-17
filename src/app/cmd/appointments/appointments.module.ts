import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentTilesComponent } from './component/appointment-tiles/appointment-tiles.component';
import { ViewAllAppointmentComponent } from './component/view-all-appointment/view-all-appointment.component';
import { ViewAppointmentComponent } from './component/view-appointment/view-appointment.component';
import { ViewPatientComponent } from './component/view-appointment/components/view-patient/view-patient.component';
import { ViewDoctorComponent } from './component/view-appointment/components/view-doctor/view-doctor.component';
import { ViewEditCommentsComponent } from './component/view-appointment/components/view-edit-comments/view-edit-comments.component';
import { ViewEditRecommendationComponent } from './component/view-appointment/components/view-edit-recommendation/view-edit-recommendation.component';
import { ViewEditVitalsComponent } from './component/view-appointment/components/view-edit-vitals/view-edit-vitals.component';
import { ViewAllPrescriptionComponent } from './component/view-appointment/components/view-all-prescription/view-all-prescription.component';
import { AddEditPrescriptionComponent } from './component/view-appointment/components/view-all-prescription/component/add-edit-prescription/add-edit-prescription.component';
import { ViewEditTestComponent } from './component/view-appointment/components/view-edit-test/view-edit-test.component';
import { AddAppointmentComponent } from './component/add-appointment/add-appointment.component';
import { AppointmentSchudleComponent } from './component/add-appointment/components/appointment-schudle/appointment-schudle.component';
import { AppointmentConfirmationComponent } from './component/add-appointment/components/appointment-confirmation/appointment-confirmation.component';
import { ViewFeedbackComponent } from './component/view-feedback/view-feedback.component';
import { ViewCloseComponent } from './component/view-appointment/components/close-appointment/view-close/view-close.component';
import { ViewCloseAppointmentComponent } from './component/view-appointment/components/close-appointment/view-close-appointment/view-close-appointment.component';
import { GiveFeedbackComponent } from './component/give-feedback/give-feedback/give-feedback.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppointmentService } from './component/add-appointment/services/appointment.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { FilterPatient } from './component/add-appointment/Models/filterPatient.pipe';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { SharedModule } from 'src/app/shared/shared.module';
FullCalendarModule.registerPlugins([interactionPlugin, dayGridPlugin]);

const COMPONENT = [
  AppointmentTilesComponent,
  ViewAllAppointmentComponent,
  ViewAppointmentComponent,
  ViewPatientComponent,
  ViewDoctorComponent,
  ViewEditCommentsComponent,
  ViewEditRecommendationComponent,
  ViewEditVitalsComponent,
  ViewAllPrescriptionComponent,
  AddEditPrescriptionComponent,
  ViewEditTestComponent,
  AddAppointmentComponent,
  AppointmentSchudleComponent,
  AppointmentConfirmationComponent,
  ViewFeedbackComponent,
];

@NgModule({
  declarations: [
    ...COMPONENT,
    ViewCloseComponent,
    ViewCloseAppointmentComponent,
    GiveFeedbackComponent,
    FilterPatient,
    ViewAppointmentComponent
    
    
  ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    FullCalendarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatCardModule,
    MatButtonToggleModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatInputModule,
    SharedModule
  ],
  exports: [...COMPONENT],
  providers: [AppointmentService ],
})
export class AppointmentsModule {}
