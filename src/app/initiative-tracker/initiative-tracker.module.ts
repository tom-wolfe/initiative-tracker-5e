import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { AddCreaturesComponent } from './add-creatures/add-creatures.component';
import { ConcentrationDialogComponent } from './concentration-dialog';
import { EditCreatureDialogComponent } from './edit-creature-dialog';
import { HealHarmDialogComponent } from './heal-harm-dialog';
import { InitiativeHeaderComponent } from './initiative-header/initiative-header.component';
import { InitiativeListComponent } from './initiative-list/initiative-list.component';
import { InitiativeTrackerComponent } from './initiative-tracker.component';
import { InitiativeTrackerRoutingModule } from './initiative-tracker.routes';
import { effects, reducers } from './store';

const DIALOGS = [
  HealHarmDialogComponent,
  EditCreatureDialogComponent,
  ConcentrationDialogComponent
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
    EffectsModule.forFeature(effects),
  ],
  entryComponents: [...DIALOGS],
  declarations: [
    ...COMPONENTS
  ]
})
export class InitiativeTrackerModule { }
