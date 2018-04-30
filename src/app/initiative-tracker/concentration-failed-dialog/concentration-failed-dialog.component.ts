import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Store } from '@ngrx/store';

import { AppState } from '../../store';
import { CreatureInitiative } from '../models';
import { UpdateCreature } from '../store/encounter/encounter.actions';

@Component({
  selector: 'app-concentration-failed-dialog',
  templateUrl: './concentration-failed-dialog.component.html'
})
export class ConcentrationFailedDialogComponent {
  get creature(): CreatureInitiative {
    return this.data.creature;
  }

  constructor(
    private dialog: MatDialogRef<ConcentrationFailedDialogComponent>,
    private store: Store<AppState>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onOKClick() {
    this.store.dispatch(new UpdateCreature(this.creature.id, { concentrating: false }));
    this.dialog.close();
  }
}
