import { Action } from '@ngrx/store';
import { Encounter } from 'app/tracker/models';

export const ADD_OR_UPDATE_ENCOUNTER = '[Encounters] Add or Update Encounter';

export class AddOrUpdateEncounter implements Action {
  readonly type = ADD_OR_UPDATE_ENCOUNTER;
  constructor(public encounter: Encounter) { }
}

export type Actions = AddOrUpdateEncounter;
