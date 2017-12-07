import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Encounter } from '../models';
import { Selectors, TrackerState } from '../store';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.scss']
})
export class EncounterComponent {
  encounter: Encounter;
  timePassed: string;

  constructor(private store: Store<TrackerState>) {
    this.store.select(Selectors.encounter).subscribe(e => this.encounter = e);
    this.store.select(Selectors.timePassed).subscribe(t => this.timePassed = t);
  }
}
