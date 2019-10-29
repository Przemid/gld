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
  isCooldown: boolean;
  isStarting: boolean;
  isPrzerwa: boolean;
  czasDoStartu: number;
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
  isCountdown: false,
  isCooldown: false,
  isStarting: false,
  isPrzerwa: false,
  czasDoStartu: 10
};

export default function reducer(
  state: SettingsState = initialState,
  action: Action
): SettingsState {
  switch (action.type) {
    case actionTypes.SETTINGS_USTAW_RUNDY:
      return {
        ...state,
        rundy: action.payload
      };
    case actionTypes.SETTINGS_USTAW_MINUTY:
      return {
        ...state,
        minuty: action.payload
      };
    case actionTypes.SETTINGS_USTAW_SEKUNDY:
      return {
        ...state,
        sekundy: action.payload
      };

    case actionTypes.SETTINGS_USTAW_PRZERWA:
      return {
        ...state,
        przerwa: action.payload
      };

    case actionTypes.SETTINGS_USTAW_COLDOWN:
      return {
        ...state,
        cooldown: action.payload
      };

    case actionTypes.SETTINGS_USTAW_SYGNALCOMINUTE:
      return {
        ...state,
        sygnalCoMinute: action.payload
      };

    case actionTypes.SETTINGS_USTAW_SOUNDPACK:
      return {
        ...state,
        soundPack: action.payload
      };

    case actionTypes.SETTINGS_USTAW_CLOCKRED:
      return {
        ...state,
        clockColorRed: action.payload
      };

    case actionTypes.SETTINGS_USTAW_CLOCKGREEN:
      return {
        ...state,
        clockColorGreen: action.payload
      };

    case actionTypes.SETTINGS_USTAW_CLOCKBLUE:
      return {
        ...state,
        clockColorBlue: action.payload
      };

    case actionTypes.SETTINGS_USTAW_ISCOUNTDOWN:
      return {
        ...state,
        isCountdown: action.payload
      };

    case actionTypes.SETTINGS_USTAW_ISCOOLDOWN:
      return {
        ...state,
        isCooldown: action.payload
      };

    case actionTypes.SETTINGS_USTAW_ISSTARTING:
      return {
        ...state,
        isStarting: action.payload
      };

    case actionTypes.SETTINGS_USTAW_ISPRZERWA:
      return {
        ...state,
        isPrzerwa: action.payload
      };

    case actionTypes.SETTINGS_USTAW_CZASDOSTARTU:
      return {
        ...state,
        czasDoStartu: action.payload
      };

    default:
      return state;
  }
}
