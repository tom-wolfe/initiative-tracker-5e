import { LinksState } from './links';
import { MonstersState } from './monsters';

export interface SharedState {
  links: LinksState;
  monsters: MonstersState;
}
