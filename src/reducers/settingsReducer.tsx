import { Action } from "../models";

import * as actionTypes from "../actions/actionTypes";

export interface SettingsState {
  minuty: number;
  sekundy: number;
}

export const initialState: SettingsState = {
  minuty: 0,
  sekundy: 0
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
