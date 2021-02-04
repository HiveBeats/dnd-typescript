import { CharacterRace } from "./characterRace";
export class Character {
    public race: CharacterRace | undefined;

    constructor(readonly name:string, readonly age:number, readonly description:string){ }



}