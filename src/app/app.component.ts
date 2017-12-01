import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;

  constructor(private store: Store<AppState>) {
    store.select(s => s.shared).select(a => a.title).subscribe(t => this.title = t);
  }
}
