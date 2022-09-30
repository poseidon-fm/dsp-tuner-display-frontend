import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Apollo} from "apollo-angular";
import {NEW_RADIO_DETAILS_SUBSCRIPTION} from "./radio-details.subscription";
import {RadioDetails} from "./radio-details.interface";
import {RadioDetailsService} from "./radio-details.service";

@NgModule({
  imports: [
    CommonModule
  ]
})
export class RadioDetailsModule {

  radioDetails: RadioDetails | undefined

  constructor(private apollo: Apollo, private radioDetailsService: RadioDetailsService) {

    this.apollo.subscribe({
      query: NEW_RADIO_DETAILS_SUBSCRIPTION,
      // variables: {},
      /*
        accepts options like `errorPolicy` and `fetchPolicy`
      */
    }).subscribe({
      next: (result) => {
        // @ts-ignore
        this.radioDetails = result.data?.onNewRadioDetails
        // @ts-ignore
        radioDetailsService.updateRadioDetails(result.data?.onNewRadioDetails)
      },
      error: (e) => console.log(e)
    });
  }
}
