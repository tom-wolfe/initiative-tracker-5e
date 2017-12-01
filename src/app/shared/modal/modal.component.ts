import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({ transform: 'translateY(-100%)' }))
      ])
    ]),
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ModalComponent {
  private _show: boolean;

  get wrapperClasses(): string {
    return 'modal-wrapper' + (this.show ? ' show' : '');
  }

  @Input() get show(): boolean {
    return this._show;
  }

  set show(value: boolean) {
    if (value !== this._show) {
      this._show = value;
      if (value) {
        this.shown.emit();
      }
    }
  }

  @Output() shown: EventEmitter<any> = new EventEmitter<any>();
  @Output() clickAway: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }
}
