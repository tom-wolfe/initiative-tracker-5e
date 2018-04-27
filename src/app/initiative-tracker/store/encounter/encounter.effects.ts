import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { ConcentrationDialogComponent } from '../../concentration-dialog';
import { ConcentrationFailedDialogComponent } from '../../concentration-failed-dialog';
import * as Encounter from './encounter.actions';

@Injectable()
export class EncounterEffects {
  @Effect() concentrationChecks = this.actions$
    .ofType<Encounter.HarmCreature>(Encounter.HarmCreature.TYPE)
    .flatMap((action) => {
      if (action.creature.concentrating) {
        const [creature, amount] = [action.creature, action.amount];
        if (action.creature.currentHp > action.amount) {
          this.dialog.open(ConcentrationDialogComponent, { width: '600px', data: { creature, amount } });
        } else {
          this.dialog.open(ConcentrationFailedDialogComponent, { width: '600px', data: { creature } });
        }
      }
      return [];
    });

  constructor(private actions$: Actions<Action>, private dialog: MatDialog) { }
}
