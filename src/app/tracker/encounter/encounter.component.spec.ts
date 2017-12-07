import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Store } from '@ngrx/store';

import * as Helpers from '../helpers';
import { TrackerState } from '../store';
import { EncounterComponent } from './encounter.component';

describe('EncounterComponent', () => {
  let component: EncounterComponent;
  let fixture: ComponentFixture<EncounterComponent>;

  const startingState: TrackerState = Helpers.startingState;
  const store: Helpers.MockStore<TrackerState> = new Helpers.MockStore<TrackerState>(startingState);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncounterComponent],
      providers: [
        { provide: Store, useValue: store }
      ]
    });
    fixture = TestBed.createComponent(EncounterComponent);
    component = fixture.componentInstance;
  });

  it('should bind to the state encounter.', () => {
    fixture.detectChanges();
    expect(component.encounter).toBe(startingState.tracker.encounter);
  });

  it('should display the current initiative.', () => {
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.initiative .value'));
    expect(el.nativeElement.textContent).toBe(component.encounter.initiative.toString());
  });

  it('should display the current round.', () => {
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.round .value'));
    expect(el.nativeElement.textContent).toBe(component.encounter.round.toString());
  });

  it('should display the time passed.', () => {
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.time .value'));
    expect(el.nativeElement.textContent).toBe(component.timePassed);
  });

});
