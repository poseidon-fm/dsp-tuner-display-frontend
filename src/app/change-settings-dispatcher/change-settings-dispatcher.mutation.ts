import {Injectable} from "@angular/core";
import {gql, Mutation} from "apollo-angular";

@Injectable({
  providedIn: 'root',
})
export class SetSettingsDispatcherGQL extends Mutation<void> {

  override document = gql`
    mutation SetSettings($changeSettings: [ChangeSettingInput!]!) {
      changeSettings(changeSettings: $changeSettings)
    }`
}
