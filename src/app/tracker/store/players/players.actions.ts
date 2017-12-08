import { Action } from '@ngrx/store';
import { Creature } from 'app/tracker/models';

export const ADD_PLAYER = '[Players] Add Player';
export const REMOVE_PLAYER = '[Players] Remove Player';

export class AddPlayer implements Action {
  readonly type = ADD_PLAYER;
  constructor(public creature: Creature) { }
}

export class RemovePlayer implements Action {
  readonly type = REMOVE_PLAYER;
  constructor(public creature: Creature) { }
}

export type Action = AddPlayer | RemovePlayer;
