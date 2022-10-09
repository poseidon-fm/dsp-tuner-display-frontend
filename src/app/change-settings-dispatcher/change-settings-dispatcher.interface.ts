export interface ChangeSetting {
  radioId: string
  type: SettingType
  val: string
  commandId: number
}

export enum SettingType {
  SQUELCH = "SQUELCH"
}
