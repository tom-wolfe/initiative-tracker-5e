import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreatureInitiative } from '../models';
import { AppState } from '../../store';
import { Store } from '@ngrx/store';
import { UpdateCreature } from '../store/encounter';

@Component({
  selector: 'app-edit-creature-dialog',
  templateUrl: './edit-creature-dialog.component.html',
  styleUrls: ['./edit-creature-dialog.component.scss']
})
export class EditCreatureDialogComponent {
  creature: CreatureInitiative;

  constructor(
    private dialog: MatDialogRef<EditCreatureDialogComponent>,
    private store: Store<AppState>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.creature = Object.assign({}, data.creature)
  }

  onOKClick() {
    this.store.dispatch(new UpdateCreature(this.data.creature, this.creature));
    this.dialog.close();
  }

  onCancelClick() {
    this.dialog.close();
  }
}
