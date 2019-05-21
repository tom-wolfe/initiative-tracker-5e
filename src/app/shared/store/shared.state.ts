import { MonstersState } from './monsters';
import { UIState } from './ui';

export interface SharedState {
  ui: UIState;
  monsters: MonstersState;
}
