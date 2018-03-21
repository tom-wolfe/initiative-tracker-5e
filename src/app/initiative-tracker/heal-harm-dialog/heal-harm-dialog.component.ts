import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreatureInitiative } from '../models';
import { AppState } from '../../store';
import { Store } from '@ngrx/store';
import { HealCreature, HarmCreature } from '../store/encounter';

@Component({
  selector: 'app-heal-harm-dialog',
  templateUrl: './heal-harm-dialog.component.html'
})
export class HealHarmDialogComponent {
  amount: number;
  get creature(): CreatureInitiative {
    return this.data.creature;
  }

  constructor(
    private dialog: MatDialogRef<HealHarmDialogComponent>,
    private store: Store<AppState>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onHealClick() {
    this.store.dispatch(new HealCreature(this.creature, this.amount));
    this.dialog.close();
  }

  onAddClick(amount: number) {
    this.amount += amount;
  }

  onHarmClick() {
    this.store.dispatch(new HarmCreature(this.creature, this.amount));
    this.dialog.close();
  }

  onCancelClick() {
    this.dialog.close();
  }
}
