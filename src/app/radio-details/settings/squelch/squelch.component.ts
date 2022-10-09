import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatSliderChange} from "@angular/material/slider";
import {Subscription} from "rxjs";
import {RadioDetailsService} from "../../radio-details.service";
import {SquelchChangeService} from "./squelch-change.service";
import {ChangeSetting} from "../../../change-settings-dispatcher/change-settings-dispatcher.interface";

@Component({
  selector: 'squelch-component',
  templateUrl: './squelch.component.html',
  styleUrls: ['./squelch.component.sass']
})
export class SquelchComponent implements OnInit, OnDestroy {

  squelchValue: number | undefined
  squelchDirty: boolean = true
  subscription: Subscription | undefined

  constructor(private radioDetailsService: RadioDetailsService, private squelchChangeService: SquelchChangeService) {
  }

  ngOnInit(): void {
    this.subscription = this.radioDetailsService.radioDetailsObservable
      .subscribe(radioDetails => {
        if (this.squelchValue !== radioDetails.settings.squelch) {
          this.squelchValue = radioDetails.settings.squelch
          this.squelchDirty = false
        }
      })
  }

  onSquelchChange(event: MatSliderChange) {
    this.squelchValue = event.value || 0
    this.squelchDirty = true

    if (event.value) {
      this.squelchChangeService.addChange({
        radioId: "3",
        val: event.value.toString()
      } as ChangeSetting)
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

}
