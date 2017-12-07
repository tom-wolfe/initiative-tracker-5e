import { createCreature } from 'app/tracker/helpers';
import { Creature } from 'app/tracker/models';

import * as CreaturesActions from './creatures.actions';

export const initialState: Creature[] = [
  createCreature('Goblin'),
  createCreature('Orc'),
];

export function creaturesReducer(state: Creature[] = initialState, action: CreaturesActions.Action): Creature[] {
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
