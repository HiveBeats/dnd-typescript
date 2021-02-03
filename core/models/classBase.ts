class ClassBase {
    public name: string | undefined;
    public baseSkills: Skill[] = [];
    public baseSpells: Skill[] = [];
    public baseClothes: string[] = [];
    public baseInventoryItems: InventoryItem[] = [];
    public baseLanguages: string[] = [];
    public spellSlotsCount: number | undefined;
    public baseMoneyAmount: number | undefined;
    public baseHitPointsDice: Dice | undefined;

    protected constructor() { }
}