import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAvailibiltySettingComponent } from './components/view-availibilty-setting/view-availibilty-setting.component';
import { ViewEditAccountSettingComponent } from './components/view-edit-account-setting/view-edit-account-setting.component';
import { SettingsModule } from './settings.module';

const routes: Routes = [
  {
    path:"ViewEditAccountSetting",
    component:ViewEditAccountSettingComponent
  },
  {
    path:"ViewAvailibiltySetting",
    component:ViewAvailibiltySettingComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
