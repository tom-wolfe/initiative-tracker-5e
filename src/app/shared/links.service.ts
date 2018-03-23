import { Injectable } from '@angular/core';
import { AppState } from '../store';
import { Store } from '@ngrx/store';
import { LinksState } from './store/links';

@Injectable()
export class LinksService {

  private links: LinksState;

  constructor(private store: Store<AppState>) {
    this.store.select(s => s.shared.links).subscribe(l => this.links = l);
  }

  condition(condition: string): string {
    return this.links.conditions.replace('{condition}', condition);
  }

  creature(name: string): string {
    const formattedName = name.toLowerCase().replace(' ', '');
    return this.links.creatures.replace('{creature}', formattedName);
  }
}