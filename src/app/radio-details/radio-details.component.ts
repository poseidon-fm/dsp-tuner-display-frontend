import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Apollo, gql} from 'apollo-angular';

const GET_PING_PONG = gql`
  query PingPong($pongVersion: Int!) {
    ping(pongVersion: $pongVersion) {
      pong
    }
  }
`;

@Component({
  selector: 'radio-details-component',
  template: `
    <div *ngIf="pong">
      <p>Ping: {{ pong }}</p>
    </div>
  `,
})

export class RadioDetailsComponent implements OnInit, OnDestroy {
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
        this.pong = data.ping.pong;
      });
  }

  ngOnDestroy() {
    this.querySubscription?.unsubscribe();
  }
}
