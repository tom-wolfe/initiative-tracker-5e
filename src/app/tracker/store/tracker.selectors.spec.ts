import * as _ from 'lodash';

import * as Helpers from '../helpers';
import { TrackerState } from '../store';
import { Selectors } from './tracker.selectors';

describe('Selectors', () => {
  const state: TrackerState = Helpers.startingState;

  describe('timePassed', () => {
    it('should calculate the time passed.', () => {
      const localState = _.merge({}, state);

      localState.tracker.currentEncounter.secondsPassed = 10;
      expect(Selectors.timePassed(localState)).toBe('00:10');

      localState.tracker.currentEncounter.secondsPassed = 60;
      expect(Selectors.timePassed(localState)).toBe('01:00');

      localState.tracker.currentEncounter.secondsPassed = 90;
      expect(Selectors.timePassed(localState)).toBe('01:30');

      localState.tracker.currentEncounter.secondsPassed = 120;
      expect(Selectors.timePassed(localState)).toBe('02:00');
    });
  });

});
