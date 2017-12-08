import { Encounter } from './encounter.model';

export interface CurrentEncounter {
  encounter: Encounter;
  initiative: number;
  round: number;
  secondsPassed: number;
}
