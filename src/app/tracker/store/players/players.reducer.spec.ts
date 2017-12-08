import { playersReducer, initialState } from './';
import * as Actions from './players.actions';
import * as Models from '../../models';
import { createCreature } from '../../helpers';

describe('playersReducer', () => {
  it('should default to empty array', () => {
    const result = playersReducer(null, null);
    expect(result).toBe(initialState);
  });
  describe('AddPlayer', () => {
    it('should allow a creature to be added', () => {
      const player = createCreature('Fred');
      const action = new Actions.AddPlayer(player);
      const result = playersReducer([], action);
      expect(result.length).toBe(1);
      expect(result[0]).toBe(player);
    });
  });
  describe('RemovePlayer', () => {
    it('should allow a player to be removed', () => {
      const player = createCreature('Fred');
      const startState = [player];
      const action = new Actions.RemovePlayer(player);
      const result = playersReducer(startState, action);
      expect(result.length).toBe(0);
    });
  });
});
