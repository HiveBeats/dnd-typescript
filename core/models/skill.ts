class Skill {
    readonly name: string;
    readonly damage: number;
    readonly damageDice: Dice | undefined;
    
    constructor(skillName:string, skillDamage:number, skillDamageDice:Dice) {
        this.name = skillName;
        this.damage = skillDamage;
        this.damageDice = skillDamageDice;
    }
}