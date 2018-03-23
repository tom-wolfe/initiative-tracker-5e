import { TrackerState } from '../initiative-tracker/store';
import { SharedState } from '../shared/store';

export interface AppState {
  shared: SharedState;
  tracker: TrackerState;
}
