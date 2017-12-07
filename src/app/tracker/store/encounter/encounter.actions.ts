import { Action } from '@ngrx/store';

export const RESET = '[Encounter] Reset';
export const NEXT_INITIATIVE = '[Encounter] Next Initiative';

export class Reset implements Action {
  readonly type = RESET;
  constructor() { }
}

export class NextInitiative implements Action {
  readonly type = NEXT_INITIATIVE;
  constructor() { }
}

export type Action = NextInitiative;
