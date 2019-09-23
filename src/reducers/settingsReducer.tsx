import { Action } from "../models";

import * as actionTypes from "../actions/actionTypes";

export interface SettingsState {
  minuty: Number;
  sekundy: number;
}

export const initialState: SettingsState = {
  minuty: 3,
  sekundy: 45
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

    case actionTypes.SETTINGS_GET_MINUTY:
      return {
        ...state,
        minuty: action.payload
      };

    default:
      return state;
  }
}
