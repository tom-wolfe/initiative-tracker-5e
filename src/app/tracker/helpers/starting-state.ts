import { TrackerState } from '../store';
import { createCreature } from './create-creature.function';

export const startingState: TrackerState = {
  tracker: {
    players: [
      createCreature('Fred'),
      createCreature('George'),
    ],
    encounters: [
      {
        name: 'Test Encounter',
        creatures: [
          createCreature('Goblin'),
          createCreature('Orc'),
        ],
      }
    ],
    currentEncounter: {
      initiative: 20,
      round: 4,
      secondsPassed: 32,
      encounter: {
        name: 'Test Encounter',
        creatures: [
          createCreature('Goblin'),
          createCreature('Orc'),
        ],
      }
    }
  }
};
