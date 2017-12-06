import { Component, Input, ViewChildren } from '@angular/core';
import { CreaturesState } from 'app/tracker/store/creatures';

import { CreatureComponent } from './creature.component';

@Component({
  selector: 'app-creature-list',
  templateUrl: './creature-list.component.html',
  styleUrls: ['./creature-list.component.scss']
})
export class CreatureListComponent {
  @Input() creatures: CreaturesState;

  @ViewChildren('creature') creatureComponents: CreatureComponent[];

  constructor() { }
}
