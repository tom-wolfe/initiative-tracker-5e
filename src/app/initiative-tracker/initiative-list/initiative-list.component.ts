import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../../store';
import { CreatureInitiative } from '../models/creature-initiative';
import { creaturesInInitiativeOrder, RemoveCreature } from '../store/encounter';

@Component({
  selector: 'app-initiative-list',
  templateUrl: './initiative-list.component.html',
  styleUrls: ['./initiative-list.component.scss']
})
export class InitiativeListComponent {
  displayedColumns = ['name', 'initiative', 'hp', 'remove'];
  creatures: Observable<CreatureInitiative[]>;
  initiative: number;

  constructor(private store: Store<AppState>) {
    const encounter = this.store.select(s => s.tracker.encounter);
    encounter.select(e => e.initiative).subscribe(i => this.initiative = i);
    this.creatures = encounter.select(creaturesInInitiativeOrder);
  }

  onRemoveClick(e, creature) {
    e.preventDefault();
    this.store.dispatch(new RemoveCreature(creature));
  }
}
