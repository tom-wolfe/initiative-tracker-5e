import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
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
  BrowserAnimationsModule,
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule
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
