import { Creature, CurrentEncounter, Encounter } from 'app/tracker/models';
import * as Time from 'app/utils/time';
import * as _ from 'lodash';

import { TrackerState } from './tracker.state';

export namespace Selectors {
  export function creaturesInInitiativeOrder(state: TrackerState): Creature[] {
    const creatures = [...state.tracker.currentEncounter.encounter.creatures, ...state.tracker.players];
    return _.sortBy(creatures, c => c.initiative).reverse();
  }

  export function currentEncounter(state: TrackerState): CurrentEncounter {
    return state.tracker.currentEncounter;
  }

  export function encounters(state: TrackerState, name: string): Encounter[] {
    return state.tracker.encounters;
  }

  export function encounterNames(state: TrackerState, name: string): string[] {
    return state.tracker.encounters.map(e => e.name);
  }

  export function encounter(state: TrackerState, name: string): Encounter {
    return state.tracker.encounters.find(e => e.name === name);
  }

  export function timePassed(state: TrackerState): string {
    return Time.secondsToTime(state.tracker.currentEncounter.secondsPassed);
  }
}
