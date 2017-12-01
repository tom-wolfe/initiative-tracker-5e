import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-close-header',
  template: `<button type="button" class="close" aria-label="Close" (click)="click.emit($event)">
              <span aria-hidden="true">&times;</span>
             </button>`
})
export class ModalCloseHeaderComponent {
  @Output() click = new EventEmitter<MouseEvent>();
  constructor() { }
}
