import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { InitiativeTrackerModule } from './initiative-tracker/initiative-tracker.module';

@NgModule({
  imports: [
    SharedModule,
    InitiativeTrackerModule,
    CoreModule,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
