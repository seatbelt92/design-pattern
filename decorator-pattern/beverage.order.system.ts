import { DarkRoust, Expresso, HouseBlend } from "./berverage.menu";
import { Beverage } from "./beverage";
import { Mocha, Soy, Whip } from "./beverage.decorator";

class BeverageOrderSystem {
    private beverage: Beverage = new Expresso();
    private beverage2: Beverage = new DarkRoust();
    private beverage3: Beverage = new HouseBlend();

    getOrderInfo(): void {
        console.log(`${this.beverage.getDescription()}: ${this.beverage.cost()} 원`);

        this.beverage2 = new Mocha(this.beverage2);
        this.beverage2 = new Mocha(this.beverage2);
        this.beverage2 = new Whip(this.beverage2);
        console.log(`${this.beverage2.getDescription()}: ${this.beverage2.cost()} 원`);

        this.beverage3 = new Soy(this.beverage3);
        this.beverage3 = new Mocha(this.beverage3);
        this.beverage3 = new Whip(this.beverage3);
        console.log(`${this.beverage3.getDescription()}: ${this.beverage3.cost()} 원`);
    }
}

new BeverageOrderSystem().getOrderInfo();
