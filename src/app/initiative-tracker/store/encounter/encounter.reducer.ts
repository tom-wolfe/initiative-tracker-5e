import { Dice } from 'dice-typescript';

import { CreatureInitiative } from '../../models';
import * as Actions from './encounter.actions';
import { creaturesInInitiativeOrder } from './encounter.selectors';
import { EncounterState } from './encounter.state';

export const initialState: EncounterState = {
  creatures: [],
  round: 0,
  initiative: undefined
};

export function creatureReducer(state: CreatureInitiative, action: Actions.CreatureAction): CreatureInitiative {
  switch (action.type) {
    case Actions.RemoveCreature.TYPE: {
      return null;
    }
    case Actions.HealCreature.TYPE: {
      const creature = Object.assign({}, state);
      creature.currentHp = Math.min(creature.maximumHp, creature.currentHp + action.amount);
      return creature;
    }
    case Actions.HarmCreature.TYPE: {
      const creature = Object.assign({}, state);
      creature.currentHp = Math.max(0, creature.currentHp - action.amount);
      return creature;
    }
    case Actions.UpdateCreature.TYPE: {
      const dice = new Dice();
      const creature = Object.assign({}, action.newCreature);
      creature.maximumHp = dice.roll((creature.maximumHp || '10').toString()).total;
      creature.currentHp = dice.roll((creature.currentHp || creature.maximumHp).toString()).total;
      creature.initiative = dice.roll((creature.initiative || '1d20').toString()).total;
      return creature;
    }
    default: {
      return state;
    }
  }
}

export function encounterReducer(state: EncounterState = initialState, action: Actions.EncounterAction): EncounterState {
  switch (action.type) {
    case Actions.NextInitiative.TYPE: {
      const newState = Object.assign({}, state);
      const sortedCreatures = creaturesInInitiativeOrder(state);
      let nextInitiative = sortedCreatures.length > 0 ? sortedCreatures[0].initiative : 0;
      if (state.initiative === undefined) {
        newState.round = 1;
      } else {
        const nextCreatures = sortedCreatures.filter(c => c.initiative < newState.initiative);
        if (nextCreatures.length > 0) {
          nextInitiative = nextCreatures[0].initiative;
        } else {
          newState.round++;
        }
      }
      newState.initiative = nextInitiative;
      return newState;
    }
    case Actions.PreviousInitiative.TYPE: {
      // TODO: Implement previous initiative.
      return state;
    }
    case Actions.ResetInitiative.TYPE: {
      return initialState;
    }
    case Actions.AddCreatures.TYPE: {
      const dice = new Dice();
      const newCreatures: CreatureInitiative[] = [];
      for (let x = 1; x <= action.quantity; x++) {
        const creature = new CreatureInitiative(action.creature);
        if (action.quantity > 1) {
          creature.name += ` (#${x})`;
        }
        creature.maximumHp = dice.roll(action.creature.maximumHp || '10').total;
        creature.currentHp = creature.maximumHp;
        creature.initiative = dice.roll(action.creature.initiative || '1d20').total;
        newCreatures.push(creature);
      }
      const creatures = [...state.creatures, ...newCreatures];
      return Object.assign({}, state, { creatures });
    }
    case Actions.RemoveCreature.TYPE:
    case Actions.UpdateCreature.TYPE:
    case Actions.HealCreature.TYPE:
    case Actions.HarmCreature.TYPE: {
      const creatures = state.creatures
        .map(c => c === action.creature ? creatureReducer(c, action) : c)
        .filter(c => c);
      return Object.assign({}, state, { creatures });
    }
    default: {
      return state;
    }
  }
}
