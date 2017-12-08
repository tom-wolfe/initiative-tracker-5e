import { createCreature } from 'app/tracker/helpers';
import { Creature } from 'app/tracker/models';

import * as PlayersActions from './players.actions';

export const initialState: Creature[] = [
  createCreature('Fred'),
  createCreature('George'),
];

export function playersReducer(state: Creature[] = initialState, action: PlayersActions.Action): Creature[] {
  if (!action) { return state || initialState; }
  switch (action.type) {
    case PlayersActions.ADD_PLAYER: {
      return [...state, action.creature];
    }
    case PlayersActions.REMOVE_PLAYER: {
      return state.filter(c => c !== action.creature);
    }
    default: {
      return state;
    }
  }
}
