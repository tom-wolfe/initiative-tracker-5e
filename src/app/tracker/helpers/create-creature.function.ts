import { Creature } from 'app/tracker/models';

export function createCreature(name: string): Creature {
  return {
    name,
    active: true,
    hp: 0,
    maxHp: 40,
    reactionUsed: false,
    player: false,
    concentrating: false,
    initiative: 10,
    notes: '',
  };
}
