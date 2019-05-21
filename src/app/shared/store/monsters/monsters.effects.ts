import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { AddCreaturesQS } from '../../../initiative-tracker/store/encounter';
import * as Monsters from './monsters.actions';

@Injectable()
export class MonstersEffects {
  initializeParams: ParamMap;
  loadedMonsters = false;

  constructor(private actions$: Actions<Action>, private http: HttpClient, private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(params => {
      this.initializeParams = params;
    });
  }

  @Effect() loadMonsters = this.actions$
    .ofType<Monsters.LoadMonsters>(Monsters.LoadMonsters.TYPE)
    .flatMap(() => {
      return this.http
        .get('https://twolfe.co.uk/dnd/data/monsters.json', { responseType: 'json' })
        .map(data => new Monsters.SetMonsters(<any[]>data));
    });

  @Effect() monstersLoaded = this.actions$
    .ofType<Monsters.SetMonsters>(Monsters.SetMonsters.TYPE)
    .flatMap(() => {
      this.loadedMonsters = true;
      return this.initializeParams ? this.initializeEncounter() : [];
    });

  initializeEncounter(): Action[] {
    return this.initializeParams.getAll('creature').map(creature => new AddCreaturesQS(creature));
  }
}
