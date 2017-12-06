import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { EncounterState } from '../store/encounter';
import { EncounterComponent } from './encounter.component';

describe('EncounterComponent', () => {
  let component: EncounterComponent;
  let fixture: ComponentFixture<EncounterComponent>;

  const encounter: EncounterState = {
    initiative: 20,
    round: 4,
    secondsPassed: 32,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncounterComponent],
    });
    fixture = TestBed.createComponent(EncounterComponent);
    component = fixture.componentInstance;
  });


  it('should display the current initiative.', () => {
    component.encounter = encounter;
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.initiative .value'));
    expect(el.nativeElement.textContent).toBe(component.encounter.initiative.toString());
  });

  it('should display the current round.', () => {
    component.encounter = encounter;
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.round .value'));
    expect(el.nativeElement.textContent).toBe(component.encounter.round.toString());
  });

  it('should display the time passed.', () => {
    component.encounter = encounter;
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.time .value'));
    expect(el.nativeElement.textContent).toBe(component.timePassed);
  });

  it('should calculate the time passed.', () => {
    component.encounter = encounter;
    component.encounter.secondsPassed = 10;
    fixture.detectChanges();
    expect(component.timePassed).toBe('00:10');

    component.encounter.secondsPassed = 60;
    fixture.detectChanges();
    expect(component.timePassed).toBe('01:00');

    component.encounter.secondsPassed = 90;
    fixture.detectChanges();
    expect(component.timePassed).toBe('01:30');

    component.encounter.secondsPassed = 120;
    fixture.detectChanges();
    expect(component.timePassed).toBe('02:00');
  });

});
