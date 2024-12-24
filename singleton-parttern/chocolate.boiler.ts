export class ChocolateBoiler {
    private empty: boolean;
    private boiled: boolean;
    private static uniqueInstance: ChocolateBoiler;

    private constructor() {
        console.log("== inner ==");
        this.empty = true;
        this.boiled = false;
    }

    static getInstance(): ChocolateBoiler {
        if (!this.uniqueInstance) {
            this.uniqueInstance = new ChocolateBoiler();
        }
        return this.uniqueInstance;
    }

    fill(): void {
        if (this.isEmpty) {
            this.empty = false;
            this.boiled = false;
        }
    }

    drain(): void {
        if (!this.isEmpty && this.isBoiled) {
            this.empty = true;
        }
    }

    boil(): void {
        if (!this.isEmpty && !this.isBoiled) {
            this.boiled = true;
        }
    }

    get isEmpty(): boolean {
        return this.empty;
    }

    get isBoiled(): boolean {
        return this.boiled;
    }
}

ChocolateBoiler.getInstance();
ChocolateBoiler.getInstance();
