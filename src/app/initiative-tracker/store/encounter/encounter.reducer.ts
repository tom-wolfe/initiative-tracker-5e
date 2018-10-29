import { Dice } from 'dice-typescript';

import { CreatureInitiative } from '../../models';
import * as Actions from './encounter.actions';
import { creaturesInInitiativeOrder, matchingCreatures } from './encounter.selectors';
import { EncounterState } from './encounter.state';

export const initialState: EncounterState = {
  lastId: 0,
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
      if (creature.currentHp > 0) { creature.active = true; }
      return creature;
    }
    case Actions.HarmCreature.TYPE: {
      const creature = Object.assign({}, state);
      creature.currentHp = Math.max(0, creature.currentHp - action.amount);
      if (creature.currentHp <= 0) { creature.active = false; }
      return creature;
    }
    case Actions.UpdateCreature.TYPE: {
      const dice = new Dice();
      const creature = Object.assign({}, state, action.newCreature);
      if (action.newCreature.concentrating !== undefined) {
        creature.concentrating = action.newCreature.concentrating;
      }
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
      const sortedCreatures = creaturesInInitiativeOrder(state).filter(c => c.active);
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

      // Reset reactions.
      newState.creatures = newState.creatures.map(c => c.initiative !== nextInitiative ? c : Object.assign({}, c, { reactionUsed: false }));

      return newState;
    }
    case Actions.PreviousInitiative.TYPE: {
      const sortedCreatures = creaturesInInitiativeOrder(state).filter(c => c.active);

      // If we're at the beginning of the battle, don't allow any regression.
      if ((!state.round || state.round === 1) && sortedCreatures.length > 0 && state.initiative === sortedCreatures[0].initiative) {
        return state;
      }

      const newState = Object.assign({}, state);
      if (!sortedCreatures.length) {
        // If there are no creatures, just go back a round.
        newState.round = Math.max(0, (newState.initiative || 0) - 1);
        newState.initiative = 0;
      } else {
        let lastInitiative = sortedCreatures.length > 0 ? sortedCreatures[sortedCreatures.length - 1].initiative : 0;
        if (state.initiative === undefined) {
          newState.round = 1;
        } else {
          const prevCreatures = sortedCreatures.filter(c => c.initiative > newState.initiative);
          if (prevCreatures.length > 0) {
            lastInitiative = prevCreatures[prevCreatures.length - 1].initiative;
          } else {
            newState.round--;
          }
        }
        newState.initiative = lastInitiative;
      }

      return newState;
    }
    case Actions.ResetInitiative.TYPE: {
      return initialState;
    }
    case Actions.AddCreature.TYPE: {
      let lastId = state.lastId;

      const creature = new CreatureInitiative(action.creature);
      creature.id = ++lastId;
      creature.currentHp = creature.maximumHp;

      const num = matchingCreatures(creature.name)(state);
      if (num > 0) { creature.name += ` (#${(num + 1).toString()})`; }

      lastId++;
      const creatures = [...state.creatures, creature];
      return Object.assign({}, state, { creatures, lastId });
    }
    case Actions.RemoveCreature.TYPE:
    case Actions.UpdateCreature.TYPE:
    case Actions.HealCreature.TYPE:
    case Actions.HarmCreature.TYPE: {
      const creatures = state.creatures
        .map(c => c.id === action.creatureId ? creatureReducer(c, action) : c)
        .filter(c => c);
      return Object.assign({}, state, { creatures });
    }
    default: {
      return state;
    }
  }
}
