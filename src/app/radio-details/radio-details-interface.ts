export interface RadioDetails {
  radioId: string
  settings: RadioSettings
  data: RadioData
}

export interface RadioSettings {
  squelch: number
  stereo: boolean
}

export interface RadioData {
  signalStrength: number
}
