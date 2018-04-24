import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { AddCreaturesComponent } from './add-creatures/add-creatures.component';
import { HealHarmDialogComponent } from './heal-harm-dialog';
import { InitiativeHeaderComponent } from './initiative-header/initiative-header.component';
import { InitiativeListComponent } from './initiative-list/initiative-list.component';
import { InitiativeTrackerComponent } from './initiative-tracker.component';
import { reducers } from './store';
import { EditCreatureDialogComponent } from './edit-creature-dialog';

const ROUTES: Route[] = [
  {
    path: '',
    component: InitiativeTrackerComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
  ],
})
export class InitiativeTrackerRoutingModule { }
