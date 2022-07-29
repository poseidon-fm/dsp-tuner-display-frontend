import {Component, OnInit} from '@angular/core';

export enum MonoStereoToggle {
  mono, stereo
}

@Component({
  selector: 'app-mono-stereo',
  templateUrl: './mono-stereo.component.html',
  styleUrls: ['./mono-stereo.component.sass']
})

export class MonoStereoComponent implements OnInit {

  get monoStereoToggleEnum(): typeof MonoStereoToggle {
    return MonoStereoToggle
  }

  monoStereoToggle: MonoStereoToggle

  constructor() {

    // TODO: fetch the real value from the tuner
    this.monoStereoToggle = MonoStereoToggle.mono

  }

  ngOnInit(): void {
  }


  toggleMonoStereo() {
    this.monoStereoToggle = this.monoStereoToggle == MonoStereoToggle.stereo ? MonoStereoToggle.mono : MonoStereoToggle.stereo

    // TODO: send new value to the tuner
  }

}
