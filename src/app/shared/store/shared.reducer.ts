import { linksReducer } from './links';
import { monstersReducer } from './monsters';
import { uiReducer } from './ui';

export const reducers = {
  links: linksReducer,
  monsters: monstersReducer,
  ui: uiReducer
};
