import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../../store';
import { CreatureInitiative } from '../models/creature-initiative';
import { AddCreatures, creaturesInInitiativeOrder, RemoveCreature } from '../store/encounter';

@Component({
  selector: 'app-initiative-list',
  templateUrl: './initiative-list.component.html',
  styleUrls: ['./initiative-list.component.scss']
})
export class InitiativeListComponent {
  displayedColumns = ['name', 'initiative', 'hp', 'remove'];
  creatures: Observable<CreatureInitiative[]>;
  initiative: number;
  @ViewChild('count') countInput: ElementRef;
  newCreature: CreatureInitiative = new CreatureInitiative();
  newCreatureCount = 1;

  constructor(private store: Store<AppState>) {
    const encounter = this.store.select(s => s.tracker.encounter);
    encounter.select(e => e.initiative).subscribe(i => this.initiative = i);
    this.creatures = encounter.select(creaturesInInitiativeOrder);
  }

  onAddToInitiativeClick(e): void {
    const init = this.newCreature.initiative .toString() || '1d20';
    this.store.dispatch(new AddCreatures(this.newCreature, this.newCreatureCount, init));
    this.newCreature = new CreatureInitiative();
    this.newCreatureCount = 1;
    this.countInput.nativeElement.focus();
    if (e) { e.preventDefault(); }
  }

  onRemoveClick(e, creature) {
    e.preventDefault();
    this.store.dispatch(new RemoveCreature(creature));
  }
}
