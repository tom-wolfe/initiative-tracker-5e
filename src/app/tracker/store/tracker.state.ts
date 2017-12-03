import { CreaturesState } from './creatures';
import { EncounterState } from './encounter';

export interface TrackerState {
  tracker: {
    creatures: CreaturesState;
    encounter: EncounterState;
  };
}
