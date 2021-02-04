import { Skill } from "./skill";
import { Race } from "./race";
export class CharacterRace {
    private race: Race;
    skills: Skill[] = [];

    constructor(selectedRace: Race) {
        this.race = selectedRace;
    }
}