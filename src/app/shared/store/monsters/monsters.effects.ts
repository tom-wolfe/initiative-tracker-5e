import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as Monsters from './monsters.actions';

@Injectable()
export class DataEffects {
  @Effect() loadMonsters = this.actions$
    .ofType<Monsters.LoadMonsters>(Monsters.LoadMonsters.TYPE)
    .flatMap((action) => {
      let monsterData: Observable<any> = this.http
        .get('assets/monsters.json', { responseType: 'json' })
        .map(data => new Monsters.SetMonsters(<any[]>data));
      return monsterData;
    });

  constructor(private actions$: Actions<Action>, private http: HttpClient) { }
}