import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {RadioDetails} from "./radio-details.interface";
import {NEW_RADIO_DETAILS_SUBSCRIPTION} from "./radio-details.subscription";
import {Apollo} from "apollo-angular";

@Injectable({
  providedIn: 'root',
})
export class RadioDetailsService {

  private radioDetailsSubject = new Subject<RadioDetails>()
  radioDetailsObservable = this.radioDetailsSubject.asObservable()

  constructor(private apollo: Apollo) {
  }

  subscribeToNewRadioDetails(radioDetails: RadioDetails | undefined) {
    this.apollo.subscribe({
      query: NEW_RADIO_DETAILS_SUBSCRIPTION,
      // variables: {},
      /*
        accepts options like `errorPolicy` and `fetchPolicy`
      */
    }).subscribe({
      next: (result) => {
        // @ts-ignore
        radioDetails = result.data?.onNewRadioDetails
        // @ts-ignore
        this.updateRadioDetails(result.data?.onNewRadioDetails)
      },
      error: (e) => console.log(e)
    });
  }

  updateRadioDetails(radioDetails: RadioDetails) {
    this.radioDetailsSubject.next(radioDetails)
  }
}

