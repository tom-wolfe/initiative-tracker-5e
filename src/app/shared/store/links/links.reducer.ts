import { LinksState } from './links.state';
import { Action } from '@ngrx/store';

export const initialState: LinksState = {
  conditions: 'https://www.dndbeyond.com/compendium/rules/basic-rules/appendix-a-conditions#{condition}',
  creatures: 'https://www.dndbeyond.com/monsters/{creature}'
};

export function linksReducer(state: LinksState = initialState, action: Action): LinksState {
  return state;
}
