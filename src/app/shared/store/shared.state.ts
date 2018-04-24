import { LinksState } from './links';
import { MonstersState } from './monsters';
import { UIState } from './ui';

export interface SharedState {
  links: LinksState;
  ui: UIState;
  monsters: MonstersState;
}
