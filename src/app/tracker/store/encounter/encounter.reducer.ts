import * as EncounterActions from './encounter.actions';
import { Encounter } from 'app/tracker/models';
import { merge } from 'lodash';

export const initialState: Encounter = {
  initiative: 0,
  round: 0,
  secondsPassed: 0,
};

export function encounterReducer(state: Encounter = initialState, action: EncounterActions.Action): Encounter {
  switch (action.type) {
    case EncounterActions.NEXT_INITIATIVE: {
      // TODO: Implement.
      return state;
    }
    default: {
      return state;
    }
  }
}
