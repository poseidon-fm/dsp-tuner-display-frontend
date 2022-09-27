import {Component, OnInit} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';

@Component({
  selector: 'radio-details-component',
  template: `
    <div *ngIf="loading">
      Loading...
    </div>
    <div *ngIf="error">
      Error :(
    </div>
    <div *ngIf="pong">
      <p>Ping: {{ pong }}</p>
    </div>
  `,
})
export class RadioDetailsComponent implements OnInit {
  pong: string | undefined;
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {
  }

  ngOnInit() {
    this.apollo
    .watchQuery({
      query: gql`
        {
          ping {
            pong
          }
        }
      `,
    })
    .valueChanges.subscribe((result: any) => {
      this.pong = result?.data?.ping?.pong;
      this.loading = result.loading;
      this.error = result.error;
    });
  }
}
