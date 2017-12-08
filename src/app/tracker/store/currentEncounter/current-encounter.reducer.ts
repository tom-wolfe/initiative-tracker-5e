import { CurrentEncounter } from 'app/tracker/models';

import * as CurrentEncounterActions from './current-encounter.actions';

export const initialState: CurrentEncounter = {
  initiative: 0,
  round: 0,
  secondsPassed: 0,
  encounter: {
    name: '',
    creatures: []
  }
};

export function currentEncounterReducer(state: CurrentEncounter = initialState, action: CurrentEncounterActions.Action): CurrentEncounter {
  switch (action.type) {
    case CurrentEncounterActions.NEXT_INITIATIVE: {
      // TODO: Implement.
      return state;
    }
    default: {
      return state;
    }
  }
}
