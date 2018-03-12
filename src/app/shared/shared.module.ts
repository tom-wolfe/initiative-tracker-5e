import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CollapseDirective } from './collapse.directive';
import { MaterialModule } from './material.module';

const DIRECTIVES = [
  CollapseDirective
];

const MODULES = [
  CommonModule,
  FormsModule,
  BrowserModule,
  BrowserAnimationsModule,
  MaterialModule
];

@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [
    ...DIRECTIVES
  ],
  exports: [
    ...MODULES,
    ...DIRECTIVES
  ]
})
export class SharedModule { }
