import {gql} from 'apollo-angular';

export const NEW_RADIO_DETAILS_SUBSCRIPTION = gql`
  subscription OnNewRadioDetails {
    onNewRadioDetails {
      radioId,
      settings {
        squelch,
        stereo
      },
      data {
        signalStrength
      }
    }
  }`
