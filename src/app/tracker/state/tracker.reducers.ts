import { Action, ActionReducer, MetaReducer } from '@ngrx/store';
import { random } from 'lodash';
import { localStorageSync } from 'ngrx-store-localstorage';

import { TrackerState } from './tracker.state';

export function localStorageSyncReducer(reducer: ActionReducer<TrackerState>): ActionReducer<TrackerState> {
  return localStorageSync({ keys: ['creatures'], rehydrate: true, removeOnUndefined: true })(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

export const reducers = {
  
};
