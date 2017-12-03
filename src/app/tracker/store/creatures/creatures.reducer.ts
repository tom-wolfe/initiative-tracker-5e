import { createCreature } from '../../helpers/index';
import * as CreaturesActions from './creatures.actions';
import { CreaturesState } from './creatures.state';

export const initialState: CreaturesState = [
  createCreature('Goblin'),
  createCreature('Orc'),
];

export function creaturesReducer(state: CreaturesState = initialState, action: CreaturesActions.Action): CreaturesState {
  if (!action) { return state || initialState; }
  switch (action.type) {
    case CreaturesActions.ADD_CREATURE: {
      return [...state, action.creature];
    }
    case CreaturesActions.REMOVE_CREATURE: {
      return state.filter(c => c !== action.creature);
    }
    default: {
      return state;
    }
  }
}
