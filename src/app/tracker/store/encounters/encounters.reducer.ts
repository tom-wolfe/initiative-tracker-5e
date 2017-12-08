import { Encounter } from 'app/tracker/models';

import * as EncountersActions from './encounters.actions';

export const initialState: Encounter[] = [];

export function encountersReducer(state: Encounter[] = initialState, action: EncountersActions.Action): Encounter[] {
  switch (action.type) {
    case EncountersActions.ADD_OR_UPDATE_ENCOUNTER: {
      // TODO: Implement.
      return state;
    }
    default: {
      return state;
    }
  }
}
