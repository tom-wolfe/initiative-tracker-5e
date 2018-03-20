import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreatureInitiative } from '../models';

@Component({
  selector: 'app-heal-harm-dialog',
  templateUrl: './heal-harm-dialog.component.html'
})
export class HealHarmDialogComponent {
  get creature(): CreatureInitiative {
    return this.data.creature;
  }

  constructor(
    public dialogRef: MatDialogRef<HealHarmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  // TODO: Make this do stuff.
}