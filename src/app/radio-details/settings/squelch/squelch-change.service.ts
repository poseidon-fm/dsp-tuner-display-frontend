import {Injectable} from '@angular/core';
import {ChangeSetting, SettingType} from "../../../change-settings-dispatcher/change-settings-dispatcher.interface";
import {ChangeSettingsDispatcherService} from "../../../change-settings-dispatcher/change-settings-dispatcher.service";

@Injectable({
  providedIn: 'root'
})
export class SquelchChangeService {

  private commandId: number = -1

  constructor(private changeSettingsDispatcherService: ChangeSettingsDispatcherService) {
  }

  addChange(changeSetting: ChangeSetting) {
    this.changeSettingsDispatcherService.updateChange({
      radioId: "3",
      type: SettingType.SQUELCH,
      val: changeSetting.val,
      commandId: this.getNextCommandId()
    })
  }

  getNextCommandId(): number {
    if (this.commandId <= 255) {
      this.commandId++
    } else {
      this.commandId = 0
    }
    return this.commandId
  }

}
