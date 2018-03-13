import { CreatureInitiative } from '../../models/creature-initiative';

export interface EncounterState {
  creatures: CreatureInitiative[];
  initiative: number;
  round: number;
}
