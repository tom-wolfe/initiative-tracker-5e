import { CreatureInitiative } from '../../models/creature-initiative';

export interface EncounterState {
  lastId: number;
  creatures: CreatureInitiative[];
  initiative: number;
  round: number;
}
