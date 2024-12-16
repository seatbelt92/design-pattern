import { Beverage } from "./beverage";
import { BeverageUtils } from "./beverage.utils";
import { CondimentDecorator } from "./condiment.decorator";

export class Mocha extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();
        this.berverage = beverage;
    }

    getDescription(): string {
        return this.berverage.getDescription().concat(", ", "모카");
    }

    private priceList = [1000, 1500, 2000];

    cost(): number {
        return (
            this.berverage.cost() +
            BeverageUtils.getCostBySize(this.berverage.getSize(), this.priceList)
        );
    }
}

export class Whip extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();
        this.berverage = beverage;
    }

    getDescription(): string {
        return this.berverage.getDescription().concat(", ", "휘핑");
    }

    private priceList = [700, 1200, 1700];

    cost(): number {
        return (
            this.berverage.cost() +
            BeverageUtils.getCostBySize(this.berverage.getSize(), this.priceList)
        );
    }
}

export class Soy extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();
        this.berverage = beverage;
    }

    getDescription(): string {
        return this.berverage.getDescription().concat(", ", "소이");
    }

    private priceList = [500, 1000, 1500];

    cost(): number {
        return (
            this.berverage.cost() +
            BeverageUtils.getCostBySize(this.berverage.getSize(), this.priceList)
        );
    }
}
