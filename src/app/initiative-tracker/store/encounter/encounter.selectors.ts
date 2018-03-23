import * as _ from 'lodash';

import { CreatureInitiative } from '../../models/creature-initiative';
import { EncounterState } from './encounter.state';

export function creaturesInInitiativeOrder(state: EncounterState): CreatureInitiative[] {
    return _.orderBy(state.creatures, 'initiative', 'desc');
}

export function timePassed(state: EncounterState): string {
    let round = state.round || 0;
    round = Math.max(round - 1, 0);
    let secs = round * 6;
    const mins = Math.floor(secs / 60);
    secs %= 60;
    const strMin = (mins < 10 ? '0' : '') + mins.toString();
    const strSec = (secs < 10 ? '0' : '') + secs.toString();
    return `${strMin}:${strSec}`;
}
