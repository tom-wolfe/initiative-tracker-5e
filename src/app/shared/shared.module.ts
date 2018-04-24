import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { LinksService } from './links.service';
import { MaterialModule } from './material.module';
import { effects, reducers } from './store';

const MODULES = [
  CommonModule,
  FormsModule,
  BrowserModule,
  HttpClientModule,
  BrowserAnimationsModule,
  MaterialModule
];

@NgModule({
  imports: [
    ...MODULES,
    StoreModule.forFeature('shared', reducers),
    EffectsModule.forFeature(effects)
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
