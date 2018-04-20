import { Action } from '@ngrx/store';

export class LoadMonsters implements Action {
  public static readonly TYPE = '[Monsters] Load Monsters';
  readonly type = LoadMonsters.TYPE;
  constructor() { }
}

export class SetMonsters implements Action {
  public static readonly TYPE = '[Monsters] Set Monsters';
  readonly type = SetMonsters.TYPE;
  constructor(public data: any[]) { }
}

export type Action = LoadMonsters | SetMonsters;