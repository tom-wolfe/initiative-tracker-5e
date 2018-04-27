import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreatureInitiative } from '../models';
import { AppState } from '../../store';
import { Store } from '@ngrx/store';
import { HealCreature, HarmCreature } from '../store/encounter';

@Component({
  selector: 'app-concentration-dialog',
  templateUrl: './concentration-dialog.component.html',
  styleUrls: ['./concentration-dialog.component.scss']
})
export class ConcentrationDialogComponent {
  get creature(): CreatureInitiative {
    return this.data.creature;
  }

  get dc(): number {
    return Math.max(10, Math.floor(this.data.amount / 2));
  }

  constructor(
    private dialog: MatDialogRef<ConcentrationDialogComponent>,
    private store: Store<AppState>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onPassClick() {
    // TODO: Pass the check.
    this.dialog.close();
  }

  onFailClick() {
    // TODO: Fail the check.
    this.dialog.close();
  }
}
