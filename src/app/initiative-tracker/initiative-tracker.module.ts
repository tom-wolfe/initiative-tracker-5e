import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { AddCreaturesComponent } from './add-creatures/add-creatures.component';
import { EditCreatureDialogComponent } from './edit-creature-dialog';
import { HealHarmDialogComponent } from './heal-harm-dialog';
import { InitiativeHeaderComponent } from './initiative-header/initiative-header.component';
import { InitiativeListComponent } from './initiative-list/initiative-list.component';
import { InitiativeTrackerComponent } from './initiative-tracker.component';
import { InitiativeTrackerRoutingModule } from './initiative-tracker.routes';
import { reducers } from './store';

const DIALOGS = [
  HealHarmDialogComponent,
  EditCreatureDialogComponent
];

const COMPONENTS = [
  InitiativeTrackerComponent,
  InitiativeHeaderComponent,
  InitiativeListComponent,
  AddCreaturesComponent,
  ...DIALOGS
];

@NgModule({
  imports: [
    SharedModule,
    InitiativeTrackerRoutingModule,
    StoreModule.forFeature('tracker', reducers),
  ],
  entryComponents: [...DIALOGS],
  declarations: [
    ...COMPONENTS
  ]
})
export class InitiativeTrackerModule { }
