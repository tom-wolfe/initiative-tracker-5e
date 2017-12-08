import { Creature, CurrentEncounter, Encounter } from '../models';

export interface TrackerState {
  tracker: {
    players: Creature[];
    encounters: Encounter[];
    currentEncounter: CurrentEncounter;
  };
}
