import { Component, ViewChildren } from '@angular/core';
import { Store } from '@ngrx/store';

import { Creature } from '../models';
import { TrackerState, Selectors } from '../store';
import { CreatureComponent } from './creature.component';

@Component({
  selector: 'app-creature-list',
  templateUrl: './creature-list.component.html',
  styleUrls: ['./creature-list.component.scss']
})
export class CreatureListComponent {
  creatures: Creature[];

  @ViewChildren('creature') creatureComponents: CreatureComponent[];

  constructor(private store: Store<TrackerState>) {
    store.select(Selectors.creaturesInInitiativeOrder).subscribe(c => this.creatures = c);
  }
}
