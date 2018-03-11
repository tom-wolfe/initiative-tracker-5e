import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() title: string;
  @Output() menuClick: EventEmitter<any> = new EventEmitter();

  onMenuClick(e) {
    this.menuClick.emit(null);
    e.preventDefault();
  }
}
