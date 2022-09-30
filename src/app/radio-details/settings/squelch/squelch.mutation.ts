import {Injectable} from "@angular/core";
import {gql, Mutation} from "apollo-angular";

@Injectable({
  providedIn: 'root',
})
export class SetSquelchGQL extends Mutation<void> {
  override document = gql`
    mutation SetSquelch($val: Int!, $commandId: ID!) {
      setSquelch(val: $val, commandId: $commandId)
    }`
}
