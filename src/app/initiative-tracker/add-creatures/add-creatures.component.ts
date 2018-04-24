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
  creatures: any[];
  newCreature: CreatureInitiative = new CreatureInitiative();
  newCreatureCount = 1;

  constructor(private store: Store<AppState>) {
    this.store.select(s => s.shared.monsters).subscribe(s => this.creatures = s);
  }

  onNameFocusOut(e): void {
    const name = e.target.value;
    const matches = this.creatures.filter(c => c.name.toUpperCase() === name.toUpperCase());
    this.newCreature.existsOnDDB = matches.length > 0;
    if (matches.length > 0) {
      const dexMod = Math.floor((matches[0].abilities.dex - 10) / 2);
      this.newCreature.initiative = <any>`1d20 + ${dexMod}`;
      this.newCreature.maximumHp = matches[0].hp.formula;
    }
  }

  onAddToInitiativeClick(e): void {
    const init = (this.newCreature.initiative || '1d20').toString();
    this.store.dispatch(new AddCreatures(this.newCreature, this.newCreatureCount, init));
    this.newCreature = new CreatureInitiative();
    this.newCreatureCount = 1;
    this.countInput.nativeElement.focus();
    if (e) { e.preventDefault(); }
  }
}
