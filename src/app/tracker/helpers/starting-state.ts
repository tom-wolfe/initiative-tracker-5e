import { TrackerState } from '../store';
import { createCreature } from './create-creature.function';

export const startingState: TrackerState = {
  tracker: {
    creatures: [
      createCreature('Goblin'),
      createCreature('Orc'),
    ],
    players: [
      createCreature('Fred'),
      createCreature('George'),
    ],
    encounter: {
      initiative: 20,
      round: 4,
      secondsPassed: 32,
    }
  }
};