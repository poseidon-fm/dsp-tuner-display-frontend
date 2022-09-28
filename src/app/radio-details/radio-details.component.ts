import {Component} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';

const NEW_RADIO_DETAILS_SUBSCRIPTION = gql`
  subscription OnNewRadioDetails {
    onNewRadioDetails {
      radioId,
      settings {
        squelch,
        stereo
      },
      data {
        signalStrength
      }
    }
  }
`

@Component({
  selector: 'radio-details-component',
  template: `
    <div *ngIf="radioDetails">
      <p>RadioId: {{ radioDetails.radioId }}</p>
      <p>Settings:</p>
      <p>Squelch: {{ radioDetails.settings.squelch }}</p>
      <p>Stereo: {{ radioDetails.settings.stereo === true ? 'ja' : 'nee'}}</p>
      <p>Data:</p>
      <p>Signaalsterkte: {{ radioDetails.data.signalStrength }}</p>
    </div>
  `
})

export class RadioDetailsComponent { // implements OnInit, OnDestroy
  radioDetails: any

  constructor(private apollo: Apollo) {
    apollo.subscribe({
      query: NEW_RADIO_DETAILS_SUBSCRIPTION,
      // variables: {},
      /*
        accepts options like `errorPolicy` and `fetchPolicy`
      */
    }).subscribe((result) => {
      console.log(result)
      // @ts-ignore
      if (result.data?.onNewRadioDetails) {
        // @ts-ignore
        this.radioDetails = result.data?.onNewRadioDetails
      }
    });
  }

  // ngOnInit() {
  // }

  // ngOnDestroy() {
  // }

}
