import { CreaturesState } from './creatures';
import { InitiativeState } from './initiative';

export interface TrackerState {
  creatures: CreaturesState;
  initiative: InitiativeState;
}
