import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { InitiativeHeaderComponent } from './initiative-header/initiative-header.component';
import { InitiativeListComponent } from './initiative-list/initiative-list.component';
import { InitiativeTrackerComponent } from './initiative-tracker.component';
import { reducers } from './store';
import { AddCreaturesComponent } from './add-creatures/add-creatures.component';

const ROUTES: Route[] = [
  {
    path: '',
    component: InitiativeTrackerComponent,
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('tracker', reducers),
  ],
  declarations: [
    InitiativeTrackerComponent,
    InitiativeHeaderComponent,
    InitiativeListComponent,
    AddCreaturesComponent
  ]
})
export class InitiativeTrackerModule { }
