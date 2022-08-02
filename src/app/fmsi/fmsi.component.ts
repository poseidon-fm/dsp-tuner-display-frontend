import {Component, OnInit} from '@angular/core';
import {MatSliderChange} from "@angular/material/slider";

@Component({
  selector: 'app-fmsi',
  templateUrl: './fmsi.component.html',
  styleUrls: ['./fmsi.component.sass']
})
export class FmsiComponent implements OnInit {

  volumeValue = 0

  constructor() {
  }

  ngOnInit(): void {
  }

  onVolumeChange(event: MatSliderChange) {
    this.volumeValue = event.value || 0
  }

}
