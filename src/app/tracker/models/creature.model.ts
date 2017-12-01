export interface Creature {
  active: boolean;
  concentrating: boolean;
  hp: number;
  initiative: number;
  maxHp: number;
  name: string;
  notes: string;
  player: boolean;
  reactionUsed: boolean;
}
