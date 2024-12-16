import { Beverage } from "./beverage";
import { BeverageSize } from "./beverage.type";
import { BeverageUtils } from "./beverage.utils";

export class Expresso extends Beverage {
    constructor(size: BeverageSize) {
        super();
        this.description = "에스프레소";
        this.setSize(size);
    }

    private priceList = [3000, 4000, 5000];

    cost(): number {
        return BeverageUtils.getCostBySize(this.getSize(), this.priceList);
    }
}

export class HouseBlend extends Beverage {
    constructor(size: BeverageSize) {
        super();
        this.description = "하우스 블랜드 커피";
        this.setSize(size);
    }

    private priceList = [4500, 5500, 6500];

    cost(): number {
        return BeverageUtils.getCostBySize(this.getSize(), this.priceList);
    }
}

export class DarkRoust extends Beverage {
    constructor(size: BeverageSize) {
        super();
        this.description = "다크 로스트 커피";
        this.setSize(size);
    }

    private priceList = [5500, 6500, 7500];

    cost(): number {
        return BeverageUtils.getCostBySize(this.getSize(), this.priceList);
    }
}
