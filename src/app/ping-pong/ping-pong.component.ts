import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Apollo, gql} from 'apollo-angular';

const GET_PING_PONG = gql`
  query PingPong($pongVersion: Int!) {
    ping(pongVersion: $pongVersion) {
      name
    }
  }
`;

@Component({
  selector: 'ping-pong-component',
  template: `
    <div *ngIf="pong">
      <p>PingPong: {{ pong.name }}</p>
    </div>
  `,
})

export class PingPongComponent implements OnInit, OnDestroy {
  pong: any;

  private querySubscription: Subscription | undefined;

  constructor(private apollo: Apollo) {
  }

  ngOnInit() {
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: GET_PING_PONG,
        variables: {
          pongVersion: 1
        }
      })
      .valueChanges
      .subscribe(({data}) => {
        this.pong = data.ping;
      });
  }

  ngOnDestroy() {
    this.querySubscription?.unsubscribe();
  }
}
