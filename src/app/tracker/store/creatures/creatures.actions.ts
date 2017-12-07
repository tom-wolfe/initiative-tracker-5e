import { Action } from '@ngrx/store';
import { Creature } from 'app/tracker/models';

export const ADD_CREATURE = '[Creatures] Add Creature';
export const REMOVE_CREATURE = '[Creatures] Remove Creature';

export class AddCreature implements Action {
  readonly type = ADD_CREATURE;
  constructor(public creature: Creature) { }
}

export class RemoveCreature implements Action {
  readonly type = REMOVE_CREATURE;
  constructor(public creature: Creature) { }
}

export type Action = AddCreature | RemoveCreature;
