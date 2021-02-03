class CharacterRace {
    private race: Race;
    skills: Skill[] = [];

    constructor(selectedRace: Race) {
        this.race = selectedRace;
    }
}