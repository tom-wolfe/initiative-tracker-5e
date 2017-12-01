import { Action } from '@ngrx/store';
import { merge } from 'lodash';

import { SharedState } from './app.state';
import * as SharedActions from './shared.actions';

const initialState: SharedState = {
  title: 'Initiative'
};

export function sharedReducer(state: SharedState = initialState, action: SharedActions.Action): SharedState {
  switch (action.type) {
    case SharedActions.SET_TITLE: {
      return merge({}, state, {
        title: action.title
      });
    }
    default: {
      return state;
    }
  }
}
