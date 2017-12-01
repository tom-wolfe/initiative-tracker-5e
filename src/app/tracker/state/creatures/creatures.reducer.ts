import * as CreaturesActions from './creatures.actions';
import { CreaturesState } from './creatures.state';
import { merge } from 'lodash';

export const initialState: CreaturesState = [];

export function creaturesReducer(state: CreaturesState = initialState, action: CreaturesActions.Action): CreaturesState {
  if (!action) { return state || initialState; }
  switch (action.type) {
    case CreaturesActions.ADD_CREATURE: {
      // TODO: Implement.
      return state;
    }
    case CreaturesActions.REMOVE_CREATURE: {
      // TODO: Implement.
      return state;
    }
    default: {
      return state;
    }
  }
}
