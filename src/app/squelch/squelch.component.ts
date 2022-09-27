import {Component, OnInit} from '@angular/core';
import {MatSliderChange} from "@angular/material/slider";

@Component({
  selector: 'squelch-component',
  templateUrl: './squelch.component.html',
  styleUrls: ['./squelch.component.sass']
})
export class SquelchComponent implements OnInit {

  squelchValue = 0

  constructor() {

  }

  ngOnInit(): void {

    // TODO: get squelch value from tuner instead
    this.squelchValue = 90

  }

  onSquelchChange(event: MatSliderChange) {
    this.squelchValue = event.value || 0
  }

}
