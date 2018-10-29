import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { LoadMonsters } from '../shared/store/monsters';
import { AppState } from '../store';
import { CreatureInitiative } from './models/creature-initiative';
import { AddCreatures, AddCreaturesQS } from './store/encounter';

@Component({
  selector: 'app-initiative-tracker',
  templateUrl: './initiative-tracker.component.html'
})
export class InitiativeTrackerComponent {
  creatures: CreatureInitiative[];
  initiative: number;
  round: number;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.store.dispatch(new LoadMonsters());

    const encounter = this.store.select(s => s.tracker.encounter);
    encounter.select(e => e.round).subscribe(r => this.round = r);
    encounter.select(e => e.initiative).subscribe(i => this.initiative = i);
    encounter.select(e => e.creatures).subscribe(c => this.creatures = c);

    this.route.queryParamMap.subscribe(params => {
      params.getAll('creature').forEach(creature => {
        this.store.dispatch(new AddCreaturesQS(creature));
      });
    });
  }
}
