import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../store';
import { CreatureInitiative } from '../models/creature-initiative';
import { AddCreatures } from '../store/encounter';

@Component({
  selector: 'app-add-creatures',
  templateUrl: './add-creatures.component.html'
})
export class AddCreaturesComponent {
  @ViewChild('count') countInput: ElementRef;
  newCreature: CreatureInitiative = new CreatureInitiative();
  newCreatureCount = 1;

  constructor(private store: Store<AppState>) { }

  onAddToInitiativeClick(e): void {
    const init = (this.newCreature.initiative || '1d20').toString();
    this.store.dispatch(new AddCreatures(this.newCreature, this.newCreatureCount, init));
    this.newCreature = new CreatureInitiative();
    this.newCreatureCount = 1;
    this.countInput.nativeElement.focus();
    if (e) { e.preventDefault(); }
  }
}
