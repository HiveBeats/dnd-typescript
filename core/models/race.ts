import { Skill } from "./skill";

export class Race {
    public name: string;
    public intitialSkills: Skill[];

    protected constructor (raceName: string, raceInitialSkills: Skill[]){
        this.name = raceName;
        this.intitialSkills = raceInitialSkills;
    }
}