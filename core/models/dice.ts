class Dice {
    private validEdgeCounts: number[] = [2, 4, 6, 8, 10, 12, 20, 100];
    
    constructor(readonly edges: number) {
        if (this.validEdgeCounts.some(x => x == edges)) {
            this.edges = edges;
        }
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