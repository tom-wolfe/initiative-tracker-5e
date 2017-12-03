import { ComponentFixture, TestBed } from '@angular/core/testing';
import * as Helpers from 'app/tracker/helpers';
import { TrackerState } from 'app/tracker/store';

import { CreatureListComponent } from './creature-list.component';
import { CreatureComponent } from './creature.component';

describe('CreatureListComponent', () => {
  let component: CreatureListComponent;
  let fixture: ComponentFixture<CreatureListComponent>;

  const startingState: TrackerState = {
    creatures: [
      Helpers.createCreature('Goblin'),
      Helpers.createCreature('Orc'),
    ],
    encounter: {
      initiative: 20,
      round: 0,
      secondsPassed: 0
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatureListComponent, CreatureComponent],
    });
    fixture = TestBed.createComponent(CreatureListComponent);
    component = fixture.componentInstance;
  });

  describe('Creatures', () => {
    it('should create a creature component for each creature in creatures.', () => {
      component.creatures = startingState.creatures;
      fixture.detectChanges();
      // Expect one creature component for each element in the array.
      expect(component.creatureComponents.length).toBe(startingState.creatures.length);
      // Expect each creature component to be bound to the parent creature.
      component.creatureComponents.forEach((creatureComponent, index) => {
        expect(creatureComponent.creature).toBe(startingState.creatures[index]);
      });
    });
  });
});
