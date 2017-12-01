import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { sharedReducer } from './state';
import { TrackerModule } from './tracker';

@NgModule({
  imports: [
    SharedModule,
    TrackerModule,
    CoreModule,
    StoreModule.forRoot({ shared: sharedReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 5 }),
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
