import { Creature } from './creature.model';

export interface Encounter {
  name: string;
  creatures: Creature[];
}
