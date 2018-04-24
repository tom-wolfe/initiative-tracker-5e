import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sidebarOpened: boolean;

  public constructor(private store: Store<AppState>) {
    store.select(s => s.shared.ui.sidebarOpen).subscribe(s => this.sidebarOpened = s);
  }
}
