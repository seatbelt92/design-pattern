import { CaffeinBeverage } from "./caffein.beverage";

export class Tea extends CaffeinBeverage {
    brew(): void {
        console.log("찻잎을 우려내는 중");
    }

    addCondiments(): void {
        console.log("레몬을 추가하는 중");
    }

    condiments = "레몬";
}
