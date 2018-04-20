import { Action } from '@ngrx/store';

import * as Monsters from './monsters.actions';
import { MonstersState } from './monsters.state';

export const initialState: MonstersState = [];

export function monstersReducer(state: MonstersState = initialState, action: Monsters.Action): MonstersState {
  switch (action.type) {
    case Monsters.SetMonsters.TYPE: {
      return action.data;
    }
    default: {
      return state;
    }
  }
}
