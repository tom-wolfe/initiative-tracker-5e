import { NgCliWebpackConfig } from '@angular/cli/models/webpack-config';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-close-footer',
  template: '<button type="button" class="btn btn-lg btn-secondary" (click)="click.emit($event)">Close</button>'
})
export class ModalCloseFooterComponent {
  @Output() click = new EventEmitter<MouseEvent>();
  constructor() { }
}
