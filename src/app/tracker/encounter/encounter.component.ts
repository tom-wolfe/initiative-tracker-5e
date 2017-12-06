import { Component, Input } from '@angular/core';
import * as Time from 'app/utils/time';

import { EncounterState } from '../store/encounter';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html'
})
export class EncounterComponent {
  @Input() encounter: EncounterState;

  get timePassed(): string {
    return Time.secondsToTime(this.encounter.secondsPassed);
  }

  constructor() { }
}
