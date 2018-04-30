import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { Store } from '@ngrx/store';

import { AppState } from '../../store';
import { ConcentrationFailedDialogComponent } from '../concentration-failed-dialog';
import { CreatureInitiative } from '../models';

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

  get conSave(): string {
    const sb = this.creature.statBlock;
    if (sb.saves && sb.saves.con) {
      return `${sb.saves.con >= 0 ? '+' : ''}${sb.saves.con}`;
    } else {
      const conMod = Math.floor((sb.abilities.con - 10) / 2);
      return `${conMod >= 0 ? '+' : ''}${conMod}`;
    }
  }

  constructor(
    private dialog: MatDialogRef<ConcentrationDialogComponent>,
    private store: Store<AppState>,
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onPassClick() {
    // Passed the check, just close the dialog.
    this.dialog.close();
  }

  onFailClick() {
    // Failed the check, switch off concentration.
    this.matDialog.open(ConcentrationFailedDialogComponent, { width: '600px', data: { creature: this.creature } });
    this.dialog.close();
  }
}
