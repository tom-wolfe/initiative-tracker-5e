import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { TrackerModule } from './tracker';

@NgModule({
  imports: [
    SharedModule,
    TrackerModule,
    CoreModule,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
