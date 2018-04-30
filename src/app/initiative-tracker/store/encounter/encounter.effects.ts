import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/withLatestFrom';

import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';

import { AppState } from '../../../store';
import { ConcentrationDialogComponent } from '../../concentration-dialog';
import { ConcentrationFailedDialogComponent } from '../../concentration-failed-dialog';
import * as Encounter from './encounter.actions';

@Injectable()
export class EncounterEffects {
  @Effect() concentrationChecks = this.actions$
    .ofType<Encounter.HarmCreature>(Encounter.HarmCreature.TYPE)
    .withLatestFrom(this.store.select(s => s.tracker.encounter.creatures))
    .flatMap(([action, creatures]) => {
      const creature = creatures.filter(c => c.id === action.creatureId)[0];
      if (creature && creature.concentrating) {
        if (creature.currentHp > 0) {
          this.dialog.open(ConcentrationDialogComponent, { width: '600px', data: { creature, amount: action.amount } });
        } else {
          this.dialog.open(ConcentrationFailedDialogComponent, { width: '600px', data: { creature } });
        }
      }
      return [];
    });

  constructor(private actions$: Actions<Action>, private dialog: MatDialog, private store: Store<AppState>) { }
}
