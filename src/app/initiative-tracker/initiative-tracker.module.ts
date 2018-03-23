import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { AddCreaturesComponent } from './add-creatures/add-creatures.component';
import { HealHarmDialogComponent } from './heal-harm-dialog';
import { ConditionListComponent } from './heal-harm-dialog/condition-list/condition-list.component';
import { InitiativeHeaderComponent } from './initiative-header/initiative-header.component';
import { InitiativeListComponent } from './initiative-list/initiative-list.component';
import { InitiativeTrackerComponent } from './initiative-tracker.component';
import { reducers } from './store';

const ROUTES: Route[] = [
  {
    path: '',
    component: InitiativeTrackerComponent,
  }
];

const DIALOGS = [
  HealHarmDialogComponent
];

const COMPONENTS = [
  InitiativeTrackerComponent,
  InitiativeHeaderComponent,
  InitiativeListComponent,
  AddCreaturesComponent,
  ConditionListComponent,
  ...DIALOGS
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('tracker', reducers),
  ],
  entryComponents: [...DIALOGS],
  declarations: [
    ...COMPONENTS
  ]
})
export class InitiativeTrackerModule { }
