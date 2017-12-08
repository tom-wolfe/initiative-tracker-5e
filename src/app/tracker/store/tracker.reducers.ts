import { ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

import { playersReducer } from './players';
import { encountersReducer } from './encounters';
import { currentEncounterReducer } from './currentEncounter';
import { TrackerState } from './tracker.state';

export function localStorageSyncReducer(reducer: ActionReducer<TrackerState>): ActionReducer<TrackerState> {
  return localStorageSync({ keys: ['players', 'encounter', 'currentEncounter'], rehydrate: true, removeOnUndefined: true })(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

export const reducers = {
  players: playersReducer,
  encounters: encountersReducer,
  currentEncounter: currentEncounterReducer,
};
