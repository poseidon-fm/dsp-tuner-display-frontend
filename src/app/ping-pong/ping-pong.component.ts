import {Component, OnInit} from '@angular/core'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {Pong, PongGQL} from "./ping-pong-query"

@Component({
  selector: 'ping-pong-component',
  template: `
    <div *ngIf="pong">
      <p>Ping: {{ (pong|async)?.name }}</p>
    </div>
  `
})

export class PingPongComponent implements OnInit {
  pong: Observable<Pong> | undefined

  constructor(private pongGQL: PongGQL) {
  }

  ngOnInit() {
    this.pong = this.pongGQL
      .watch({
        pongVersion: 1
      })
      .valueChanges
      .pipe(
        map(result => result.data.ping)
      )
  }

}
