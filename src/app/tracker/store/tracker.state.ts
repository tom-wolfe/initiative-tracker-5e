import { Creature, Encounter } from '../models';

export interface TrackerState {
  tracker: {
    creatures: Creature[];
    players: Creature[];
    encounter: Encounter;
  };
}
