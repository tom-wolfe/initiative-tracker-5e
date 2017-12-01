import { Action } from '@ngrx/store';
import { Creature } from '../../models';

export const NEXT_INITIATIVE = '[Encounter] Next Initiative';

export class NextInitiative implements Action {
  readonly type = NEXT_INITIATIVE;
  constructor() { }
}

export type Action = NextInitiative;
