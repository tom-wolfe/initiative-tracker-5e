import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../store';
import { NextInitiative, ResetInitiative, timePassed } from '../store/encounter';

@Component({
  selector: 'app-initiative-header',
  templateUrl: './initiative-header.component.html',
  styleUrls: ['./initiative-header.component.scss']
})
export class InitiativeHeaderComponent {
  initiative: number;
  round: number;
  timePassed: string;

  constructor(private store: Store<AppState>) {
    const encounter = this.store.select(s => s.tracker.encounter);
    encounter.select(e => e.round).subscribe(r => this.round = r);
    encounter.select(e => e.initiative).subscribe(i => this.initiative = i);
    encounter.select(timePassed).subscribe(t => this.timePassed = t);
  }

  onResetClick() {
    this.store.dispatch(new ResetInitiative());
  }

  onNextClick() {
    this.store.dispatch(new NextInitiative());
  }
}
