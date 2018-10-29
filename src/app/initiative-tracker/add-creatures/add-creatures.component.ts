import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../store';
import { AddCreatures } from '../store/encounter';

@Component({
  selector: 'app-add-creatures',
  templateUrl: './add-creatures.component.html'
})
export class AddCreaturesComponent {
  @ViewChild('countInput') countInput: ElementRef;

  monsters: any[];
  name: string;
  initiative: string;
  hp: string;
  count = '1';

  constructor(private store: Store<AppState>) {
    this.store.select(s => s.shared.monsters).subscribe(m => this.monsters = m);
  }

  onNameFocusOut(e): void {
    const name = e.target.value;
    const monster = this.monsters.find(c => c.name.toUpperCase() === name.toUpperCase());
    if (monster) {
      this.name = monster.name;
      const dexMod = Math.floor((monster.abilities.dex - 10) / 2);
      if (dexMod >= 0) {
        this.initiative = `1d20 + ${dexMod}`;
      } else {
        this.initiative = `1d20 ${dexMod}`;
      }
      this.hp = monster.hp.formula;
    }
  }

  onAddToInitiativeClick(e): void {
    const action = new AddCreatures(this.count, this.name, this.initiative, this.hp);
    console.log(action);
    this.store.dispatch(action);
    this.count = '1';
    this.name = '';
    this.initiative = '';
    this.hp = '';
    this.countInput.nativeElement.focus();
    if (e) { e.preventDefault(); }
  }
}
