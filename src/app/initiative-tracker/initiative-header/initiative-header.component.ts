import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { TrackerState } from '../state';
import { NextInitiative, ResetInitiative } from '../state/encounter';

@Component({
  selector: 'app-initiative-header',
  templateUrl: './initiative-header.component.html',
  styleUrls: ['./initiative-header.component.scss']
})
export class InitiativeHeaderComponent {
  initiative: number;
  round: number;

  constructor(private store: Store<TrackerState>) {
    const encounter = this.store.select(s => s.encounter);
    encounter.select(e => e.round).subscribe(r => this.round = r);
    encounter.select(e => e.initiative).subscribe(i => this.initiative = i);
  }

  onResetClick() {
    this.store.dispatch(new ResetInitiative());
  }

  onNextClick() {
    this.store.dispatch(new NextInitiative());
  }

  get timePast(): string {
    // TODO: Make selector.
    let round = this.round || 0;
    round = Math.max(round - 1, 0);
    let secs = round * 6;
    const mins = Math.floor(secs / 60);
    secs %= 60;
    const strMin = (mins < 10 ? '0' : '') + mins.toString();
    const strSec = (secs < 10 ? '0' : '') + secs.toString();
    return `${strMin}:${strSec}`;
  }
}
