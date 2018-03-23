import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { LinksService } from './links.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';

const MODULES = [
  CommonModule,
  FormsModule,
  BrowserModule,
  BrowserAnimationsModule,
  MaterialModule
];

@NgModule({
  imports: [
    ...MODULES,
    StoreModule.forFeature('shared', reducers),
  ],
  declarations: [
  ],
  providers: [
    LinksService
  ],
  exports: [
    ...MODULES,
  ]
})
export class SharedModule { }
