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

export class AddCreaturesQS implements Action {
  public static readonly TYPE = '[Encounter] Add Creatures (Query String)';
  readonly type = AddCreaturesQS.TYPE;
  constructor(public creatureDef: string) { }
}

export class AddCreatures implements Action {
  public static readonly TYPE = '[Encounter] Add Creatures';
  readonly type = AddCreatures.TYPE;
  constructor(public count: string, public name: string, public initiative: string, public hp: string) { }
}

export class AddCreature implements Action {
  public static readonly TYPE = '[Encounter] Add Creature';
  readonly type = AddCreature.TYPE;
  constructor(public creature: CreatureInitiative) { }
}

export abstract class CreatureActionBase implements Action {
  abstract readonly type: string;
  constructor(public creatureId: number) { }
}

export class RemoveCreature extends CreatureActionBase {
  public static readonly TYPE = '[Encounter] Remove Creature';
  readonly type = RemoveCreature.TYPE;
  constructor(public creatureId: number) { super(creatureId); }
}

export class HealCreature extends CreatureActionBase {
  public static readonly TYPE = '[Encounter] Heal Creature';
  readonly type = HealCreature.TYPE;
  constructor(creatureId: number, public amount: number) { super(creatureId); }
}

export class HarmCreature extends CreatureActionBase {
  public static readonly TYPE = '[Encounter] Harm Creature';
  readonly type = HarmCreature.TYPE;
  constructor(creatureId: number, public amount: number) { super(creatureId); }
}

export class UpdateCreature extends CreatureActionBase {
  public static readonly TYPE = '[Encounter] Update Creature';
  readonly type = UpdateCreature.TYPE;
  constructor(public creatureId: number, public newCreature: Partial<CreatureInitiative>) { super(creatureId); }
}

export class ConcentrationCheck extends CreatureActionBase {
  public static readonly TYPE = '[Encounter] Concentration Check';
  readonly type = ConcentrationCheck.TYPE;
  constructor(public creatureId: number, public damage: number) { super(creatureId); }
}

export type CreatureAction = HealCreature | HarmCreature | UpdateCreature | RemoveCreature | ConcentrationCheck;

export type EncounterAction = NextInitiative | PreviousInitiative | ResetInitiative | AddCreatures | AddCreaturesQS | AddCreature
  | CreatureAction;
