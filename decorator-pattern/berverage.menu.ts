import { Beverage } from "./beverage";

export class Expresso extends Beverage {
    constructor() {
        super();
        this.description = "에스프레소";
    }

    cost(): number {
        return 3000;
    }
}

export class HouseBlend extends Beverage {
    constructor() {
        super();
        this.description = "하우스 블랜드 커피";
    }

    cost(): number {
        return 4500;
    }
}

export class DarkRoust extends Beverage {
    constructor() {
        super();
        this.description = "다크 로스트 커피";
    }

    cost(): number {
        return 5000;
    }
}
