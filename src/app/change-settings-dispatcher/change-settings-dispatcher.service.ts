import {Injectable} from '@angular/core';
import {SetSettingsDispatcherGQL} from "./change-settings-dispatcher.mutation";
import {ChangeSetting} from "./change-settings-dispatcher.interface";

@Injectable({
  providedIn: 'root'
})
export class ChangeSettingsDispatcherService {

  private changes: ChangeSetting[] = []

  //private mutexWithTimeout = withTimeout(new Mutex(), 100)

  constructor(private setSettingsDispatcherGQL: SetSettingsDispatcherGQL) {

    let commandId = 0;

    setInterval(() => {
      commandId++
      if (this.changes.length > 0) {
        this.setSettingsDispatcherGQL.mutate(
          {
            changeSettings: [...this.changes]
          }
        ).subscribe()
        this.changes = []
      }
    }, 100)

  }

  updateChange(changeSetting: ChangeSetting) {
    let existingChangeForTypeFound = false;
    this.changes.forEach((change) => {
      if (change.type === changeSetting.type) {

        // TODO: commandId moet hier uitegerekend worden ipv in Squelch Change Service

        change.val = changeSetting.val
        existingChangeForTypeFound = true
        return
      }
    })
    if (!existingChangeForTypeFound) {

      // TODO: commandId moet hier uitegerekend worden ipv in Squelch Change Service

      this.changes.push(changeSetting)
    }

  }

}
