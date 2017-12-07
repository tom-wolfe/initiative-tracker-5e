import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import { CreatureListComponent } from './creature/creature-list.component';
import { EncounterComponent } from './encounter/encounter.component';
import { TrackerState } from './store';
import { Creature, Encounter } from './models';

@Component({
  selector: 'app-tracker',
  templateUrl: 'tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent { }
