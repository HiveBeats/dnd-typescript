import { Dice } from "./dice";

export class Skill {
    readonly name: string;
    readonly damage: number;
    readonly damageDice: Dice | undefined;
    readonly distance: number | undefined;
    readonly description: string | undefined;

    constructor(skillName:string, skillDamage:number, skillDamageDice:Dice | undefined, skillDistance:number | undefined, skillDesc: string | undefined) {
        this.name = skillName;
        this.damage = skillDamage;
        this.damageDice = skillDamageDice;
        this.distance = skillDistance;
        this.description = skillDesc;
    }
}