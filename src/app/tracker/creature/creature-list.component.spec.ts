import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import * as Helpers from 'app/tracker/helpers';

import { CreaturesState } from '../store/creatures';
import { CreatureListComponent } from './creature-list.component';
import { CreatureComponent } from './creature.component';

describe('CreatureListComponent', () => {
  let component: CreatureListComponent;
  let fixture: ComponentFixture<CreatureListComponent>;

  const creatures: CreaturesState = [
    Helpers.createCreature('Goblin'),
    Helpers.createCreature('Orc'),
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatureListComponent, CreatureComponent],
    });
    fixture = TestBed.createComponent(CreatureListComponent);
    component = fixture.componentInstance;
  });

  describe('Creatures', () => {
    it('should create a creature component for each creature in creatures.', () => {
      component.creatures = creatures;
      fixture.detectChanges();
      // Expect one creature component for each element in the array.
      expect(component.creatureComponents.length).toBe(creatures.length);
      // Expect each creature component to be bound to the parent creature.
      component.creatureComponents.forEach((creatureComponent, index) => {
        expect(creatureComponent.creature).toBe(creatures[index]);
      });
    });
    it('should display a no creatures message on null.', () => {
      component.creatures = null;
      fixture.detectChanges();
      const noCreatures = fixture.debugElement.queryAll(By.css('.no-creatures'))
      expect(noCreatures.length).toBe(1);
    });
    it('should display a no creatures message on empty array.', () => {
      component.creatures = [];
      fixture.detectChanges();
      const noCreatures = fixture.debugElement.queryAll(By.css('.no-creatures'))
      expect(noCreatures.length).toBe(1);
    });
  });
});
