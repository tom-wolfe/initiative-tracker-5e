import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { InitiativeHeaderComponent } from './initiative-header/initiative-header.component';
import { InitiativeListComponent } from './initiative-list/initiative-list.component';
import { InitiativeTrackerComponent } from './initiative-tracker.component';
import { RouterModule, Route } from '@angular/router';

const ROUTES: Route[] = [
  {
    path: '',
    component: InitiativeTrackerComponent,
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    InitiativeTrackerComponent,
    InitiativeHeaderComponent,
    InitiativeListComponent,
  ]
})
export class InitiativeTrackerModule { }
