import { TrackerState } from '../tracker/state/tracker.state';

export interface AppState {
  shared: SharedState;
  tracker: TrackerState;
}

export interface SharedState {
  title: string;
}
