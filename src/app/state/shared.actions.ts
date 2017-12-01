import { Action } from '@ngrx/store';

export const SET_TITLE = '[Shared] Set Title';

export class SetTitle implements Action {
  readonly type = SET_TITLE;
  constructor(public title: string) { }
}

export type Action = SetTitle;
