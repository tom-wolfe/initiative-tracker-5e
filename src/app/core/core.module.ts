import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';

import { throwIfAlreadyLoaded } from './module-import-guard';

const COMPONENTS = [
    NavbarComponent
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot([])
    ],
    declarations: [
        ...COMPONENTS,
    ],
    exports: [
        ...COMPONENTS,
        RouterModule
    ]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
