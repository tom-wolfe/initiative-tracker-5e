import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModalCloseFooterComponent } from './modal/modal-close-footer';
import { ModalCloseHeaderComponent } from './modal/modal-close-header';
import { ModalComponent } from './modal/modal.component';
import { ToggleComponent } from './toggle/toggle.component';

const MODULES = [
  FormsModule,
  HttpModule,
  BrowserModule,
  BrowserAnimationsModule,
];

const COMPONENTS = [
  ModalComponent,
  ModalCloseFooterComponent,
  ModalCloseHeaderComponent,
  ToggleComponent,
];

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  exports: [
    ...MODULES,
    ...COMPONENTS,
  ]
})
export class SharedModule { }
