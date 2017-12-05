import { creaturesReducer, initialState } from './';
import * as Actions from './creatures.actions';
import * as Models from '../../models';

describe('creaturesReducer', () => {
  it('should default to empty array', () => {
    const result = creaturesReducer(null, null);
    expect(result).toBe(initialState);
  });
  describe('AddCreature', () => {
    it('should allow a creature to be added', () => {
      const creature: Models.Creature = {
        active: true,
        concentrating: false,
        hp: 40,
        maxHp: 40,
        initiative: 20,
        name: 'Goblin',
        notes: '',
        player: false,
        reactionUsed: false,
      };
      const action = new Actions.AddCreature(creature);
      const result = creaturesReducer([], action);
      expect(result.length).toBe(1);
      expect(result[0]).toBe(creature);
    });
  });
  describe('RemoveCreature', () => {
    it('should allow a creature to be removed', () => {
      const creature: Models.Creature = {
        active: true,
        concentrating: false,
        hp: 40,
        maxHp: 40,
        initiative: 20,
        name: 'Goblin',
        notes: '',
        player: false,
        reactionUsed: false,
      };
      const startState = [creature];
      const action = new Actions.RemoveCreature(creature);
      const result = creaturesReducer(startState, action);
      expect(result.length).toBe(0);
    });
  });
});
