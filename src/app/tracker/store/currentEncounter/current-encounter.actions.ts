import { Action } from '@ngrx/store';

export const SET_ENCOUNTER = '[Current Encounter] Set Encounter';
export const RESET = '[Current Encounter] Reset';
export const NEXT_INITIATIVE = '[Current Encounter] Next Initiative';

export class SetEncounter implements Action {
  readonly type = RESET;
  constructor(public name: string) { }
}

export class Reset implements Action {
  readonly type = RESET;
  constructor() { }
}

export class NextInitiative implements Action {
  readonly type = NEXT_INITIATIVE;
  constructor() { }
}

export type Action = SetEncounter | Reset | NextInitiative;
