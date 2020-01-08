import { Action } from '@ngrx/store';
import { User } from './../model/app.model';
import * as UserActions from './../actions/app.actions';

const initialState: User = {
	name: 'Anu',
	lastScore: 7
}

export function reducer(state: User = initialState, action: UserActions.Actions) {
	switch (action.type) {
		case UserActions.CHANGE_USER_NAME:
			return [state, action.payload];
		
		default:
			return state;
	}
}