import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RadioDetails} from "./radio-details.interface";
import {RadioDetailsService} from "./radio-details.service";

@NgModule({
  imports: [
    CommonModule
  ]
})
export class RadioDetailsModule {

  radioDetails: RadioDetails | undefined

  constructor(private radioDetailsService: RadioDetailsService) {
    radioDetailsService.subscribeToNewRadioDetails(this.radioDetails)
  }

}
