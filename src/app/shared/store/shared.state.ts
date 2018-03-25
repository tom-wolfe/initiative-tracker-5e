import { LinksState } from './links';
import { UIState } from './ui';

export interface SharedState {
  links: LinksState;
  ui: UIState;
}
