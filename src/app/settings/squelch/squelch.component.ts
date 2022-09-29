import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatSliderChange} from "@angular/material/slider";
import {Subscription} from "rxjs";
import {RadioDetailsService} from "../../radio-details/radio-details.service";

@Component({
  selector: 'squelch-component',
  templateUrl: './squelch.component.html',
  styleUrls: ['./squelch.component.sass']
})
export class SquelchComponent implements OnInit, OnDestroy {

  squelchValue: number | undefined
  subscription: Subscription | undefined

  constructor(private radioDetailsService: RadioDetailsService) {
  }

  ngOnInit(): void {
    this.subscription = this.radioDetailsService.radioDetailsObservable
      .subscribe(radioDetails => this.squelchValue = radioDetails.settings.squelch)
  }

  onSquelchChange(event: MatSliderChange) {
    // TODO: make squelch change command to tuner
    //this.squelchValue = event.value || 0
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

}
