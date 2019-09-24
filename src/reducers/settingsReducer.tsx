import { Action } from "../models";

import * as actionTypes from "../actions/actionTypes";

export interface SettingsState {
  minuty: number;
  sekundy: number;
  rundy: number;
  przerwa: number;
  cooldown: number;
  sygnalCoMinute: boolean;
  soundPack: number;
  clockColorRed: number;
  clockColorBlue: number;
  clockColorGreen: number;
  isCountdown: boolean;
}

export const initialState: SettingsState = {
  minuty: 3,
  sekundy: 0,
  rundy: 3,
  przerwa: 60,
  cooldown: 60,
  sygnalCoMinute: true,
  soundPack: 1,
  clockColorRed: 255,
  clockColorBlue: 255,
  clockColorGreen: 255,
  isCountdown: false
};

export default function reducer(
  state: SettingsState = initialState,
  action: Action
): SettingsState {
  switch (action.type) {
    // SETTINGS_USTAW_MINUTY
    case actionTypes.SETTINGS_USTAW_MINUTY:
      return {
        ...state,
        minuty: action.payload
      };

// SETTINGS_USTAW_SEKUNDY
    case actionTypes.SETTINGS_USTAW_SEKUNDY:
      return {
        ...state,
        sekundy: action.payload
      };

    default:
      return state;
  }
}
