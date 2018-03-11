import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { CollapseDirective } from './collapse.directive';

import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BrowserModule
  ],
  declarations: [
    CollapseDirective,
    SlideToggleComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BrowserModule,
    CollapseDirective,
    SlideToggleComponent
  ]
})
export class SharedModule { }
