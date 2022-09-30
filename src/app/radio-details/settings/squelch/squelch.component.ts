import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatSliderChange} from "@angular/material/slider";
import {Subscription} from "rxjs";
import {RadioDetailsService} from "../../radio-details.service";
import {SetSquelchGQL} from "./squelch.mutation";
import {v4 as uuid} from 'uuid'

@Component({
  selector: 'squelch-component',
  templateUrl: './squelch.component.html',
  styleUrls: ['./squelch.component.sass']
})
export class SquelchComponent implements OnInit, OnDestroy {

  squelchValue: number | undefined
  subscription: Subscription | undefined

  constructor(private radioDetailsService: RadioDetailsService, private setSquelchGQL: SetSquelchGQL) {
  }

  ngOnInit(): void {
    this.subscription = this.radioDetailsService.radioDetailsObservable
      .subscribe(radioDetails => {
        if (this.squelchValue !== radioDetails.settings.squelch) {
          this.squelchValue = radioDetails.settings.squelch
        }
      })
  }

  onSquelchChange(event: MatSliderChange) {
    this.squelchValue = event.value || 0

    this.setSquelchGQL.mutate(
      {
        val: event.value,
        commandId: uuid()
      }
    ).subscribe()

  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

}
