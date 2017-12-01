import * as EncounterActions from './encounter.actions';
import { EncounterState } from './encounter.state';
import { merge } from 'lodash';

export const initialState: EncounterState = {
  initiative: 0,
  round: 0,
  secondsPassed: 0,
};

export function encounterReducer(state: EncounterState = initialState, action: EncounterActions.Action): EncounterState {
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