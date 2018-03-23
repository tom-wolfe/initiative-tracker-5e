export class CreatureInitiative {
    name: string = null;
    maximumHp: number;
    currentHp: number;
    initiative: number = null;
    conditions: string[] = [];
    constructor(values?: CreatureInitiative) {
        Object.assign(this, values);
    }
}
