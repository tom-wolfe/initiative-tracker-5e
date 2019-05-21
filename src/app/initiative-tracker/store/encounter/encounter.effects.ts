import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/withLatestFrom';

import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Dice } from 'dice-typescript';

import { AppState } from '../../../store';
import { ConcentrationDialogComponent } from '../../concentration-dialog';
import { ConcentrationFailedDialogComponent } from '../../concentration-failed-dialog';
import { CreatureInitiative } from '../../models';
import * as Encounter from './encounter.actions';

@Injectable()
export class EncounterEffects {
  constructor(private actions$: Actions<Action>, private dialog: MatDialog, private store: Store<AppState>) { }

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

  @Effect() addCreatures = this.actions$
    .ofType<Encounter.AddCreatures>(Encounter.AddCreatures.TYPE)
    .withLatestFrom(this.store.select(s => s.shared.monsters))
    .flatMap(([action, monsters]) => {
      const newCreatures: Encounter.AddCreature[] = [];
      const dice = new Dice();

      const count = dice.roll(action.count || '1').total;
      const monster = monsters.find(f => f.name.toUpperCase() === action.name.toUpperCase());
      for (let x = 0; x < count; x++) {
        const creature: CreatureInitiative = new CreatureInitiative();
        creature.name = action.name;
        creature.initiative = dice.roll(action.initiative || '1d20').total;
        creature.maximumHp = 10;
        creature.statBlock = monster;
        creature.existsOnDDB = !!monster;

        if (monster) {
          creature.name = monster.name;
          const dexMod = Math.floor((monster.abilities.dexterity - 10) / 2);
          creature.initiative = dice.roll(action.initiative || `1d20 + ${dexMod}`).total;
          creature.maximumHp = dice.roll(action.hp || monster.hp.formula).total;
        }

        newCreatures.push(new Encounter.AddCreature(creature));
      }

      return newCreatures;
    });

  @Effect() addCreaturesQS = this.actions$
    .ofType<Encounter.AddCreaturesQS>(Encounter.AddCreaturesQS.TYPE)
    .map(action => {
      const [name, qty, initiative, hp] = action.creatureDef.split(',');
      return new Encounter.AddCreatures(qty, name, initiative, hp);
    });
}
