import { Action } from '@ngrx/store';

import { CreaturesState } from './creatures.state';

export const initialState: CreaturesState = {
  creatures: []
};

export function creaturesReducer(state: CreaturesState = initialState, action: Action): CreaturesState {
  return state;
}
