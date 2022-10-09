import {Injectable} from '@angular/core';
import {v4 as uuid} from "uuid";
import {SetSettingsDispatcherGQL} from "./change-settings-dispatcher.mutation";
import {ChangeSetting, SettingType} from "./change-settings-dispatcher.interface";

@Injectable({
  providedIn: 'root'
})
export class ChangeSettingsDispatcherService {

  private changes: ChangeSetting[] = []

  //private mutexWithTimeout = withTimeout(new Mutex(), 100)

  constructor(private setSettingsDispatcherGQL: SetSettingsDispatcherGQL) {

    let commandId = 0;

    //setInterval(() => {
    commandId++

    this.addChange({
      radioId: uuid(),
      type: SettingType.SQUELCH,
      val: "A value " + uuid(),
      commandId: commandId
    } as ChangeSetting)

    this.setSettingsDispatcherGQL.mutate(
      {
        changeSettings: this.changes
      }
    ).subscribe()

    //}, 10000)

  }

  addChange(changeSetting: ChangeSetting) {
    this.changes.push(changeSetting)
  }

}
