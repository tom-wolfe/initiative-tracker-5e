import * as Actions from './encounter.actions';
import { creaturesInInitiativeOrder } from './encounter.selectors';
import { EncounterState } from './encounter.state';

export const initialState: EncounterState = {
  creatures: [],
  round: null,
  initiative: null
};

export function encounterReducer(state: EncounterState = initialState, action: Actions.EncounterAction): EncounterState {
  switch (action.type) {
    case Actions.NextInitiative.TYPE: {
      const newState = Object.assign({}, state);
      const sortedCreatures = creaturesInInitiativeOrder(state);
      if (!state.initiative) {
        newState.initiative = sortedCreatures[0].initiative;
        newState.round = 1;
      } else {
        const nextCreatures = sortedCreatures.filter(c => c.initiative < newState.initiative);
        if (nextCreatures.length > 0) {
          newState.initiative = nextCreatures[0].initiative;
        } else {
          newState.initiative = sortedCreatures[0].initiative;
          newState.round++;
        }
      }
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
      // TODO: Make real.
      for (let x = 1; x <= action.count; x++) {
        const creature = new CreatureInitiative(this.newCreature);
        if (this.newCreatureCount > 1) {
          creature.name += ` (#${x})`;
        }
        creature.currentHp = creature.maximumHp;
        // TODO: Fix dice plz.
        // creature.initiative = this.dice.roll(init).total;
        this.creatures.push(creature);
      }
      return state;
    }
    case Actions.RemoveCreature.TYPE: {
      // TODO: Make real.
      const index = this.creatures.indexOf(creature);
      this.creatures.splice(index, 1);
      return state;
    }
    default: {
      return state;
    }
  }
}
