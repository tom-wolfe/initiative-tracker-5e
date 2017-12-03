import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import { TrackerState } from './store';
import { CreaturesState } from './store/creatures';
import { CreatureListComponent } from './creature/creature-list.component';

@Component({
  selector: 'app-tracker',
  templateUrl: 'tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent {
  creatures: CreaturesState;

  @ViewChild('creatureList') creatureList: CreatureListComponent;

  constructor(private store: Store<TrackerState>) {
    store.select(s => s.tracker.creatures).subscribe(c => this.creatures = c);
  }
}
