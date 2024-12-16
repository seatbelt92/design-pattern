import { BeverageSize } from "./beverage.type";

export abstract class Beverage {
    description: string;
    private size: BeverageSize = BeverageSize.TALL;

    getDescription() {
        return this.description;
    }

    setSize(size: BeverageSize): void {
        this.size = size;
    }

    getSize() {
        return this.size;
    }

    abstract cost(): number;
}
