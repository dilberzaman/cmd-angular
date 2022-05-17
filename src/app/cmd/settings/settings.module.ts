import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingDashboardComponent } from './components/setting-dashboard/setting-dashboard.component';
import { ViewAvailibiltySettingComponent } from './components/view-availibilty-setting/view-availibilty-setting.component';
import { ViewEditAccountSettingComponent } from './components/view-edit-account-setting/view-edit-account-setting.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SettingDashboardComponent,
    ViewAvailibiltySettingComponent,
    ViewEditAccountSettingComponent,

  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class SettingsModule { }
