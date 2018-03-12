import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { CreatureInitiative } from './models/creature-initiative';
import { TrackerState } from './state';
import { NextInitiative, ResetInitiative } from './state/encounter';

@Component({
  selector: 'app-initiative-tracker',
  templateUrl: './initiative-tracker.component.html'
})
export class InitiativeTrackerComponent {
  creatures: CreatureInitiative[];
  initiative: number;
  round: number;

  constructor(private store: Store<TrackerState>) {
    const encounter = this.store.select(s => s.encounter);
    encounter.select(e => e.round).subscribe(r => this.round = r);
    encounter.select(e => e.initiative).subscribe(i => this.initiative = i);
    encounter.select(e => e.creatures).subscribe(c => this.creatures = c);
  }
}
