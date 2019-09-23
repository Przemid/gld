import { Action } from '../models';
import * as actionTypes from './actionTypes';

export function ustawMinuty(payload: number): Action {
	return {
		type: actionTypes.SETTINGS_USTAW_MINUTY,
		payload
	};
}
