import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';

import { CollapseDirective } from './collapse.directive';

const DIRECTIVES = [
  CollapseDirective
];

const MODULES = [
  CommonModule,
  FormsModule,
  BrowserModule,
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatTableModule
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
