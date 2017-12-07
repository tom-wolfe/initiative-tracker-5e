import { Creature, Encounter } from 'app/tracker/models';
import * as Time from 'app/utils/time';
import * as _ from 'lodash';

import { TrackerState } from './tracker.state';

export namespace Selectors {
  export function creaturesInInitiativeOrder(state: TrackerState): Creature[] {
    const creatures = [...state.tracker.creatures, ...state.tracker.players];
    return _.sortBy(creatures, c => c.initiative).reverse();
  }

  export function encounter(state: TrackerState): Encounter {
    return state.tracker.encounter;
  }

  export function timePassed(state: TrackerState): string {
    return Time.secondsToTime(state.tracker.encounter.secondsPassed);
  }
}
