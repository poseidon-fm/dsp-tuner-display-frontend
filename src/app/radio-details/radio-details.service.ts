import {Injectable, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Subject} from "rxjs";
import {RadioDetails} from "./radio-details.interface";

@NgModule({
  imports: [
    CommonModule
  ]
})

@Injectable()
export class RadioDetailsService {

  private radioDetailsSubject = new Subject<RadioDetails>()
  radioDetailsObservable = this.radioDetailsSubject.asObservable()

  constructor() {
  }

  updateRadioDetails(radioDetails: RadioDetails) {
    this.radioDetailsSubject.next(radioDetails)
  }
}

