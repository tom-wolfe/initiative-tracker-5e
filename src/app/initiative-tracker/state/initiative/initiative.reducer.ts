import { Action } from '@ngrx/store';

import { InitiativeState } from './initiative.state';

export const initialState: InitiativeState = {
  maxHP: false,
  tempHP: false,
  tempMaxHP: false,
  name: false,
  concentration: false,
  unconscious: false,
  characterMenu: false,
};

export function initiativeReducer(state: InitiativeState = initialState, action: Action): InitiativeState {
  return state;
}