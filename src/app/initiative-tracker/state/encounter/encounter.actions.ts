import { Action } from '@ngrx/store';
import { CreatureInitiative } from '../../models/creature-initiative';

export class NextInitiative implements Action {
    public static readonly TYPE: string = '[Encounter] Next Initiative';
    public type: string = NextInitiative.TYPE;
    constructor() { }
}

export class PreviousInitiative implements Action {
    public static readonly TYPE: string = '[Encounter] Previous Initiative';
    public type: string = PreviousInitiative.TYPE;
    constructor() { }
}

export class ResetInitiative implements Action {
    public static readonly TYPE: string = '[Encounter] Reset Initiative';
    public type: string = ResetInitiative.TYPE;
    constructor() { }
}

export class RemoveCreature implements Action {
    public static readonly TYPE: string = '[Encounter] Remove Creature';
    public type: string = RemoveCreature.TYPE;
    constructor(public creature: CreatureInitiative) { }
}

export class AddCreatures implements Action {
    public static readonly TYPE: string = '[Encounter] Add Creatures';
    public type: string = AddCreatures.TYPE;
    public constructor(public creature: CreatureInitiative, public quantity: number, public initiative: string) { }
}

export type EncounterAction = NextInitiative | PreviousInitiative | ResetInitiative | RemoveCreature | AddCreatures;
