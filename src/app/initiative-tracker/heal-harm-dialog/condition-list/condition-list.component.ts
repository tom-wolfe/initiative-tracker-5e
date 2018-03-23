import { Component } from '@angular/core';

import { Conditions } from '../../models/conditions';

@Component({
  selector: 'app-condition-list',
  templateUrl: './condition-list.component.html'
})
export class ConditionListComponent {
 conditions: string[] = Conditions;
}
