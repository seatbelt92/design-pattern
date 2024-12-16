import { Beverage } from "./beverage";
import { CondimentDecorator } from "./condiment.decorator";

export class Mocha extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();
        this.berverage = beverage;
    }

    getDescription(): string {
        return this.berverage.getDescription().concat(", ", "모카");
    }

    cost(): number {
        return this.berverage.cost() + 1000;
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

    cost(): number {
        return this.berverage.cost() + 700;
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

    cost(): number {
        return this.berverage.cost() + 500;
    }
}
