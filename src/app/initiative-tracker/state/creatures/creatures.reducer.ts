import { Action } from '@ngrx/store';

import { CreaturesState } from './creatures.state';

export const initialState: CreaturesState = {
  maxHP: false,
  tempHP: false,
  tempMaxHP: false,
  name: false,
  concentration: false,
  unconscious: false,
  characterMenu: false,
};

export function creaturesReducer(state: CreaturesState = initialState, action: Action): CreaturesState {
  return state;
}