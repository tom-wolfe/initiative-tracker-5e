import { ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

import { creaturesReducer } from './creatures';
import { encounterReducer } from './encounter';
import { TrackerState } from './tracker.state';

export function localStorageSyncReducer(reducer: ActionReducer<TrackerState>): ActionReducer<TrackerState> {
  return localStorageSync({ keys: ['creatures', 'players', 'encounter'], rehydrate: true, removeOnUndefined: true })(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

export const reducers = {
  creatures: creaturesReducer,
  players: creaturesReducer,
  encounter: encounterReducer,
};
