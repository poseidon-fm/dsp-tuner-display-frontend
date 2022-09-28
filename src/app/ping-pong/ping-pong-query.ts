import {Injectable} from '@angular/core'
import {gql, Query} from 'apollo-angular'

export type Pong = {
  name: string
}

export interface Response {
  ping: Pong
}

@Injectable({
  providedIn: 'root',
})
export class PongGQL extends Query<Response> {
  override document = gql`
    query PingPong($pongVersion: Int!) {
      ping(pongVersion: $pongVersion) {
        name
      }
    }`
}
