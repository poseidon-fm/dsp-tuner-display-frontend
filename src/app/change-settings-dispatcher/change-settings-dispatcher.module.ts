import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChangeSettingsDispatcherService} from "./change-settings-dispatcher.service";

@NgModule({
  imports: [
    CommonModule
  ]
})
export class ChangeSettingsDispatcherModule {

  constructor(private changeSettingsDispatcherService: ChangeSettingsDispatcherService) {

  }


}
