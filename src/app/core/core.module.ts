import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedModule } from 'app/shared';

@NgModule({
  imports: [
    RouterModule,
    SharedModule,
    StoreModule.forRoot({ }),
    StoreDevtoolsModule.instrument({ maxAge: 5 }),
  ],
  exports: [RouterModule]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}
