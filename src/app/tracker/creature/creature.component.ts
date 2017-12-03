import { Component, Input } from '@angular/core';
import { Creature } from 'app/tracker/models';

@Component({
  selector: 'app-creature',
  templateUrl: './creature.component.html',
  styleUrls: ['./creature.component.scss']
})
export class CreatureComponent {
  @Input() creature: Creature;

  constructor() { }
}
