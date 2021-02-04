import { ClassBase } from "../classBase";
import { Dice } from "../dice";
import { InventoryItem } from "../inventoryItem";
import { Skill } from "../skill";

export class Bard extends ClassBase {
    
    constructor() {
        super();
        this.name = "Bard";
        this.spellSlotsCount = 2;//level 1
        this.baseHitPointsDice = new Dice(8);
        this.baseClothes = ["Лёгкие доспехи", "Простое оружие", "Длинный меч", "Короткий меч", "Рапира", "Ручной арбалет"];
        this.baseInventoryItems = [new InventoryItem("Музыкальный инструмент", 3)];
        this.baseSkills = [
            new Skill("ВДОХНОВЕНИЕ БАРДА", 0, new Dice(6), 60, undefined), 
            new Skill("МАСТЕР НА ВСЕ РУКИ", 0, undefined, undefined, undefined),
            new Skill("ПЕСНЬ ОТДЫХА", 0, new Dice(6), undefined, undefined),
            new Skill("КОЛЛЕГИЯ БАРДОВ", 0, undefined, undefined, undefined),
            new Skill("КОМПЕТЕНТНОСТЬ", 0, undefined, undefined, undefined),
            new Skill("УВЕЛИЧЕНИЕ ХАРАКТЕРИСТИК", 0, undefined, undefined, undefined),
            new Skill("ИСТОЧНИК ВДОХНОВЕНИЯ", 0, undefined, undefined, undefined),
            new Skill("КОНТРОЧАРОВАНИЕ", 0, undefined, undefined, undefined),
            new Skill("ТАЙНЫ МАГИИ", 0 , undefined, undefined, undefined),
            new Skill("ПРЕВОСХОДНОЕ ВДОХНОВЕНИЕ", 0, undefined, undefined, undefined)
         ];
        this.baseLanguages = ["Язык бардский"];
        this.savingThrows = ["Харизма", "Ловкость"];        
    }
}