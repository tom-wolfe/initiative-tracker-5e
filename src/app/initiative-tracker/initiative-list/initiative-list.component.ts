import { Component, ElementRef, Input, ViewChild } from '@angular/core';

import * as _ from 'lodash';

import { CreatureInitiative } from '../models/creature-initiative';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-initiative-list',
  templateUrl: './initiative-list.component.html',
  styleUrls: ['./initiative-list.component.scss']
})
export class InitiativeListComponent {
  displayedColumns = ['name', 'initiative', 'hp', 'remove'];
  @Input() creatures: CreatureInitiative[];
  @Input() currentInitiative: number;
  @ViewChild('count') countInput: ElementRef;
  newCreature: CreatureInitiative = new CreatureInitiative();
  newCreatureCount = 1;

  get dataSource(): MatTableDataSource<CreatureInitiative> {
    return new MatTableDataSource(_.orderBy(this.creatures, ['initiative'], 'desc'));
  }

  onAddToInitiativeClick(e): void {
    const init = this.newCreature.initiative || '1d20';
    for (let x = 1; x <= this.newCreatureCount; x++) {
      const creature = new CreatureInitiative(this.newCreature);
      if (this.newCreatureCount > 1) {
        creature.name += ` (#${x})`;
      }
      creature.currentHp = creature.maximumHp;
      // TODO: Fix dice plz.
      // creature.initiative = this.dice.roll(init).total;
      this.creatures.push(creature);
    }
    this.newCreature = new CreatureInitiative();
    this.newCreatureCount = 1;
    this.countInput.nativeElement.focus();
    if (e) { e.preventDefault(); }
  }

  onRemoveClick(e, creature) {
    e.preventDefault();
    const index = this.creatures.indexOf(creature);
    this.creatures.splice(index, 1);
  }
}
