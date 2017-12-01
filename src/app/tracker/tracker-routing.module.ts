import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrackerComponent } from './tracker.component';

const trackerRoutes: Routes = [
  { path: '', component: TrackerComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(trackerRoutes)
  ],
  exports: [RouterModule]
})
export class TrackerRoutingModule { }
