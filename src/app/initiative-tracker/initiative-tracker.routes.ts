import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { InitiativeTrackerComponent } from './initiative-tracker.component';

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
