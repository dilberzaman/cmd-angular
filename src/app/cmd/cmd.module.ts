import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CmdRoutingModule } from './cmd-routing.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { ChatModule } from './chat/chat.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PatientsModule } from './patients/patients.module';
import { SettingsModule } from './settings/settings.module';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CmdRoutingModule,
    AppointmentsModule,
    ChatModule,
    DashboardModule,
    PatientsModule,
    SettingsModule,
    FullCalendarModule
  ],
  providers: []
})
export class CmdModule {}
