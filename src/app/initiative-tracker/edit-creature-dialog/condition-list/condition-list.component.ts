import { Component, Input } from '@angular/core';

import { CreatureInitiative } from '../../models';
import { Conditions } from '../../models/conditions';

@Component({
  selector: 'app-condition-list',
  templateUrl: './condition-list.component.html'
})
export class ConditionListComponent {
 conditions: string[] = Conditions;
 @Input() creature: CreatureInitiative;

 isSelected(condition: string): boolean {
  return this.creature && condition === 'Blinded' // this.creature.conditions.includes(condition);
 }
}
