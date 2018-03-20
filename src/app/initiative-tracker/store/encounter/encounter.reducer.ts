import { CreatureInitiative } from '../../models';
import * as Actions from './encounter.actions';
import { creaturesInInitiativeOrder } from './encounter.selectors';
import { EncounterState } from './encounter.state';

export const initialState: EncounterState = {
  creatures: [],
  round: 0,
  initiative: undefined
};

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
      // TODO: Implement.
      return state;
    }
    case Actions.ResetInitiative.TYPE: {
      return initialState;
    }
    case Actions.AddCreatures.TYPE: {
      const newCreatures: CreatureInitiative[] = [];
      for (let x = 1; x <= action.quantity; x++) {
        const creature = new CreatureInitiative(action.creature);
        if (action.quantity > 1) {
          creature.name += ` (#${x})`;
        }
        creature.currentHp = creature.maximumHp;
        // TODO: Fix dice plz.
        // creature.initiative = this.dice.roll(init).total;
        newCreatures.push(creature);
      }
      const creatures = [...state.creatures, ...newCreatures];
      return Object.assign({}, state, { creatures });
    }
    case Actions.RemoveCreature.TYPE: {
      const creatures = state.creatures.filter(c => c !== action.creature);
      return Object.assign({}, state, { creatures });
    }
    case Actions.HealCreature.TYPE: {
      // TODO: Heal creature.
      return state;
    }
    case Actions.HarmCreature.TYPE: {
      // TODO: Harm creature.
      return state;
    }
    default: {
      return state;
    }
  }
}
