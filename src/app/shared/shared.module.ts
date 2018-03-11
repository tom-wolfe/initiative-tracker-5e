import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';

import { CollapseDirective } from './collapse.directive';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';

const COMPONENTS = [
  SlideToggleComponent
];

const DIRECTIVES = [
  CollapseDirective
];

const MODULES = [
  CommonModule,
  FormsModule,
  BrowserModule,
  MatToolbarModule,
  MatCardModule,
  MatButtonModule
];

@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [
    ...DIRECTIVES,
    ...COMPONENTS
  ],
  exports: [
    ...MODULES,
    ...DIRECTIVES,
    ...COMPONENTS
  ]
})
export class SharedModule { }
