class Skill {
    readonly name: string;
    readonly damage: number;
    readonly damageDice: number;
    
    constructor(skillName:string, skillDamage:number, skillDamageDice:number) {
        this.name = skillName;
        this.damage = skillDamage;
        this.damageDice = skillDamageDice;
    }
}