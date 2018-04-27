import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { CreatureInitiative } from '../models';

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
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onOKClick() {
    this.dialog.close();
  }
}
