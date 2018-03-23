import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../../store';
import { CreatureInitiative } from '../models/creature-initiative';
import { creaturesInInitiativeOrder, RemoveCreature } from '../store/encounter';
import { MatDialog } from '@angular/material';
import { HealHarmDialogComponent } from '../heal-harm-dialog';

@Component({
  selector: 'app-initiative-list',
  templateUrl: './initiative-list.component.html',
  styleUrls: ['./initiative-list.component.scss']
})
export class InitiativeListComponent {
  displayedColumns = ['name', 'initiative', 'hp', 'actions'];
  creatures: Observable<CreatureInitiative[]>;
  initiative: number;

  constructor(private store: Store<AppState>, private dialog: MatDialog) {
    const encounter = this.store.select(s => s.tracker.encounter);
    encounter.select(e => e.initiative).subscribe(i => this.initiative = i);
    this.creatures = encounter.select(creaturesInInitiativeOrder);
  }

  isActive(creature: CreatureInitiative) {
    return this.initiative === creature.initiative;
  }

  onRemoveClick(creature: CreatureInitiative) {
    this.store.dispatch(new RemoveCreature(creature));
  }

  onHealHarmClick(creature: CreatureInitiative) {
    // TODO: Don't hardcode this width.
    const dialog = this.dialog.open(HealHarmDialogComponent, { width: '500px', data: { creature } });
  }

  onMaxHPClick(creature: CreatureInitiative) {
    // TODO: Implement max HP dialog.
  }
}
