export class CreatureInitiative {
  id: number;
  name: string = null;
  maximumHp: number;
  currentHp: number;
  initiative: number = null;
  conditions: string[] = [];
  active = true;
  reactionUsed = false;
  concentrating = false;
  existsOnDDB = false;
  statBlock: any;
  notes: string;
  constructor(values?: CreatureInitiative) {
    Object.assign(this, values);
  }
}
