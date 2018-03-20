import { Action } from '@ngrx/store';
import { CreatureInitiative } from '../../models/creature-initiative';

export class NextInitiative implements Action {
    public static readonly TYPE = '[Encounter] Next Initiative';
    readonly type = NextInitiative.TYPE;
    constructor() { }
}

export class PreviousInitiative implements Action {
    public static readonly TYPE = '[Encounter] Previous Initiative';
    readonly type = PreviousInitiative.TYPE;
    constructor() { }
}

export class ResetInitiative implements Action {
    public static readonly TYPE = '[Encounter] Reset Initiative';
    readonly type = ResetInitiative.TYPE;
    constructor() { }
}

export class RemoveCreature implements Action {
    public static readonly TYPE = '[Encounter] Remove Creature';
    readonly type = RemoveCreature.TYPE;
    constructor(public creature: CreatureInitiative) { }
}

export class AddCreatures implements Action {
    public static readonly TYPE = '[Encounter] Add Creatures';
    readonly type = AddCreatures.TYPE;
    constructor(public creature: CreatureInitiative, public quantity: number, public initiative: string) { }
}

export class HealCreature implements Action {
    public static readonly TYPE = '[Encounter] Heal Creature';
    readonly type = HealCreature.TYPE;
    constructor(public creature: CreatureInitiative, public amount: number) { }
}

export class HarmCreature implements Action {
    public static readonly TYPE = '[Encounter] Harm Creature';
    readonly type = HarmCreature.TYPE;
    constructor(public creature: CreatureInitiative, public amount: number) { }
}

export type EncounterAction = NextInitiative | PreviousInitiative | ResetInitiative | RemoveCreature | AddCreatures | HealCreature | HarmCreature;
