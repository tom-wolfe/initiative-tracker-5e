import { CreaturesState } from './creatures';
import { EncounterState } from './encounter';

export interface TrackerState {
  creatures: CreaturesState;
  encounter: EncounterState;
}
