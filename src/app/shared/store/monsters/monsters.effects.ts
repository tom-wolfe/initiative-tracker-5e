import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as Monsters from './monsters.actions';

@Injectable()
export class MonstersEffects {
  @Effect() loadMonsters = this.actions$
    .ofType<Monsters.LoadMonsters>(Monsters.LoadMonsters.TYPE)
    .flatMap((action) => {
      return this.http
        .get('assets/monsters.json', { responseType: 'json' })
        .map(data => new Monsters.SetMonsters(<any[]>data));
    });

  constructor(private actions$: Actions<Action>, private http: HttpClient) { }
}
