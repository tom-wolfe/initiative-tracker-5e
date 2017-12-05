import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore } from 'app/core/store';
import * as Helpers from 'app/tracker/helpers';

import { CreatureListComponent } from './creature/creature-list.component';
import { CreatureComponent } from './creature/creature.component';
import { TrackerState } from './store';
import { TrackerComponent } from './tracker.component';

describe('TrackerComponent', () => {
  let component: TrackerComponent;
  let fixture: ComponentFixture<TrackerComponent>;

  const startingState: TrackerState = {
    tracker: {
      creatures: [
        Helpers.createCreature('Goblin'),
        Helpers.createCreature('Orc'),
      ],
      encounter: {
        initiative: 20,
        round: 0,
        secondsPassed: 0
      }
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackerComponent, CreatureListComponent, CreatureComponent],
      providers: [
        { provide: Store, useValue: new MockStore<TrackerState>(startingState) }
      ]
    });
    fixture = TestBed.createComponent(TrackerComponent);
    component = fixture.componentInstance;
  });

  describe('Creatures', () => {
    it('should bind creatures from the store to the creature list.', () => {
      fixture.detectChanges();
      // Expect creatures to be taken from store.
      expect(component.creatures).toBe(startingState.tracker.creatures);
      // Expect creatures to be passed on to creature list.
      expect(component.creatureList.creatures).toBe(component.creatures);
    });
  });
});
