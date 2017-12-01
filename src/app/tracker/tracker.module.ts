import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { metaReducers, reducers } from './state';
import { TrackerRoutingModule } from './tracker-routing.module';
import { TrackerComponent } from './tracker.component';

const COMPONENTS = [
  TrackerComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    SharedModule,
    TrackerRoutingModule,
    StoreModule.forFeature('tracker', reducers, { metaReducers }),
  ],
  providers: []
})
export class TrackerModule { }
