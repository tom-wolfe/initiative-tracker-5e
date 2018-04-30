import { Component } from '@angular/core';
import { MatDialog, MatSlideToggleChange } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { LinksService } from '../../shared/links.service';
import { AppState } from '../../store';
import { EditCreatureDialogComponent } from '../edit-creature-dialog';
import { HealHarmDialogComponent } from '../heal-harm-dialog';
import { CreatureInitiative } from '../models/creature-initiative';
import { creaturesInInitiativeOrder, RemoveCreature, UpdateCreature } from '../store/encounter';

@Component({
  selector: 'app-initiative-list',
  templateUrl: './initiative-list.component.html',
  styleUrls: ['./initiative-list.component.scss']
})
export class InitiativeListComponent {
  displayedColumns = ['active', 'name', 'initiative', 'hp', 'reaction', 'concentrating', 'conditions', 'actions'];
  creatures: Observable<CreatureInitiative[]>;
  allCreatures: any[];
  initiative: number;

  constructor(private store: Store<AppState>, private dialog: MatDialog, private links: LinksService) {
    const encounter = this.store.select(s => s.tracker.encounter);
    encounter.select(e => e.initiative).subscribe(i => this.initiative = i);
    this.creatures = encounter.select(creaturesInInitiativeOrder);
    this.store.select(s => s.shared.monsters).subscribe(c => this.allCreatures = c);
  }

  conditionLink(condition: string): string {
    return this.links.condition(condition);
  }

  creatureLink(creature: CreatureInitiative): string {
    return this.links.creature(creature.name);
  }

  isActive(creature: CreatureInitiative) {
    return this.initiative === creature.initiative && creature.active;
  }

  creatureHpPercent(creature: CreatureInitiative): number {
    return creature.currentHp / creature.maximumHp * 100;
  }

  onRemoveClick(creature: CreatureInitiative) {
    this.store.dispatch(new RemoveCreature(creature.id));
  }

  onHealHarmClick(creature: CreatureInitiative) {
    // TODO: Don't hardcode this width.
    this.dialog.open(HealHarmDialogComponent, { width: '500px', data: { creature } });
  }

  onNameClick(e, creature: CreatureInitiative) {
    // TODO: Don't hardcode this width.
    this.dialog.open(EditCreatureDialogComponent, { width: '600px', data: { creature } });
    e.preventDefault();
  }

  onActiveToggle(e: MatSlideToggleChange, creature: CreatureInitiative) {
    this.store.dispatch(new UpdateCreature(creature.id, { active: e.checked }));
  }

  onReactionToggle(e: MatSlideToggleChange, creature: CreatureInitiative) {
    this.store.dispatch(new UpdateCreature(creature.id, { reactionUsed: e.checked }));
  }

  onConcentratingToggle(e: MatSlideToggleChange, creature: CreatureInitiative) {
    this.store.dispatch(new UpdateCreature(creature.id, { concentrating: e.checked }));
  }
}
