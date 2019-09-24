import { Action } from '../models';
import * as actionTypes from './actionTypes';

export function ustawMinuty(payload: number): Action {
	return {
		type: actionTypes.SETTINGS_USTAW_MINUTY,
		payload
	};
}

export function ustawSekundy(payload: number): Action {
	return {
		type: actionTypes.SETTINGS_USTAW_SEKUNDY,
		payload
	};
}
export function ustawRundy(payload: number): Action {
	return {
		type: actionTypes.SETTINGS_USTAW_RUNDY,
		payload
	};
}
export function ustawPrzerwa(payload: number): Action {
	return {
		type: actionTypes.SETTINGS_USTAW_PRZERWA,
		payload
	};
}
export function ustawCooldown(payload: number): Action {
	return {
		type: actionTypes.SETTINGS_USTAW_COLDOWN,
		payload
	};
}
export function ustawSygnalCoMinute(payload: boolean): Action {
	return {
		type: actionTypes.SETTINGS_USTAW_SYGNALCOMINUTE,
		payload
	};
}
export function ustawSoundPack(payload: number): Action {
	return {
		type: actionTypes.SETTINGS_USTAW_SOUNDPACK,
		payload
	};
}
export function ustawClockRed(payload: number): Action {
	return {
		type: actionTypes.SETTINGS_USTAW_CLOCKRED,
		payload
	};
}
export function ustawClockBlue(payload: number): Action {
	return {
		type: actionTypes.SETTINGS_USTAW_CLOCKBLUE,
		payload
	};
}
export function ustawClockGreen(payload: number): Action {
	return {
		type: actionTypes.SETTINGS_USTAW_CLOCKGREEN,
		payload
	};
}
export function ustawisCountDown(payload: boolean): Action {
	return {
		type: actionTypes.SETTINGS_USTAW_ISCOUNTDOWN,
		payload
	};
}
