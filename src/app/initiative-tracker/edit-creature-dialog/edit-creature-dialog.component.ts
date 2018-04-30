import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreatureInitiative } from '../models';
import { AppState } from '../../store';
import { Store } from '@ngrx/store';
import { UpdateCreature } from '../store/encounter';
import { Conditions } from '../models/conditions';

@Component({
  selector: 'app-edit-creature-dialog',
  templateUrl: './edit-creature-dialog.component.html',
  styleUrls: ['./edit-creature-dialog.component.scss']
})
export class EditCreatureDialogComponent {
  creature: CreatureInitiative;
  conditions: string[] = Conditions;

  constructor(
    private dialog: MatDialogRef<EditCreatureDialogComponent>,
    private store: Store<AppState>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.creature = Object.assign({}, data.creature, { conditions: data.creature.conditions.map(c => c) });
  }

  isSelected(condition: string): boolean {
    return this.creature.conditions.includes(condition);
  }

  isImmune(condition: string): boolean {
    const res = this.creature.statBlock && this.creature.statBlock.condition.immunities.includes(condition.toLowerCase());
    console.log(condition, res);
    return res;
  }

  toggleCondition(condition: string) {
    if (this.isImmune(condition)) { return; }
    const index = this.creature.conditions.indexOf(condition);
    if (index > -1) {
      this.creature.conditions.splice(index, 1);
    } else {
      this.creature.conditions.push(condition);
    }
  }

  onOKClick() {
    this.store.dispatch(new UpdateCreature(this.data.creature.id, this.creature));
    this.dialog.close();
  }

  onCancelClick() {
    this.dialog.close();
  }
}
