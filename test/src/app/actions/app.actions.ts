import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { User } from './../model/app.model';

export const CHANGE_USER_NAME = '[USER] name';
export const CHANGE_LAST_SCORE = '[USER] last_score';

export class ChangeUserName implements Action {
	readonly type = CHANGE_USER_NAME;

	constructor(public payload: User) {}
}

export class ChangeLastScore implements Action {
	readonly type = CHANGE_LAST_SCORE;

	constructor(public payload: number) {}
}

export type Actions = ChangeUserName | ChangeLastScore