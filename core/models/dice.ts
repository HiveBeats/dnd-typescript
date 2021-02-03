class Dice {
    constructor(readonly edges: number) {
        
    }

    roll(): number {
        return Math.floor(Math.random() * Math.floor(this.edges));
    }

    rollKTimes(multiplier: number): number {
        let accumulator = 0;
        for (let i = 0; i < multiplier; i++) {
            accumulator += this.roll();
        }
        return accumulator;
    }
}