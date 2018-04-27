import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import * as Encounter from './encounter.actions';
import { ConcentrationDialogComponent } from '../../concentration-dialog';

@Injectable()
export class EncounterEffects {
  @Effect() concentrationChecks = this.actions$
    .ofType<Encounter.HarmCreature>(Encounter.HarmCreature.TYPE)
    .flatMap((action) => {
      if (action.creature.concentrating) {
        const [creature, amount] = [action.creature, action.amount];
        this.dialog.open(ConcentrationDialogComponent, { width: '600px', data: { creature, amount } });
      }
      return [];
    });

  constructor(private actions$: Actions<Action>, private dialog: MatDialog) { }
}
