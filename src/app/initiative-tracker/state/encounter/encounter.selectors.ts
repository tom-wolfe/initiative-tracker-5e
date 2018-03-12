import * as _ from 'lodash';

import { CreatureInitiative } from '../../models/creature-initiative';
import { EncounterState } from './encounter.state';

export function creaturesInInitiativeOrder(state: EncounterState): CreatureInitiative[] {
    return _.orderBy(state.creatures, 'initiative', 'desc');
}
