import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';

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
  ],
  exports: [
    ...MODULES,
  ]
})
export class SharedModule { }
