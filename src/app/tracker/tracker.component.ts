import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import { CreatureListComponent } from './creature/creature-list.component';
import { EncounterComponent } from './encounter/encounter.component';
import { TrackerState } from './store';
import { CreaturesState } from './store/creatures';
import { EncounterState } from './store/encounter';

@Component({
  selector: 'app-tracker',
  templateUrl: 'tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent {
  creatures: CreaturesState;
  encounter: EncounterState;

  @ViewChild('creatureList') creatureList: CreatureListComponent;
  @ViewChild('encounterDisplay') encounterDisplay: EncounterComponent;

  constructor(private store: Store<TrackerState>) {
    store.select(s => s.tracker.creatures).subscribe(c => this.creatures = c);
    store.select(s => s.tracker.encounter).subscribe(e => this.encounter = e);
  }
}
