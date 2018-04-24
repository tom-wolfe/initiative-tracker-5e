import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { ToggleSidebar } from '../../shared/store/ui';
import { AppState } from '../../store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private store: Store<AppState>) { }

  toggleSidebar() {
    this.store.dispatch(new ToggleSidebar());
  }
}
