import { ChicagoPizzaBranch } from "./branch/chicago.pizza.branch";
import { NYPizzaBranch } from "./branch/ny.pizza.branch";
import { Pizza } from "./pizza";
import { PizzaStore } from "./pizza.store";

export class PizzaOrder {
    private nyBranch: PizzaStore = new NYPizzaBranch();
    private chicagoBranch: PizzaStore = new ChicagoPizzaBranch();
    private pizza: Pizza;

    constructor() {
        this.pizza = this.nyBranch.orderPizza("cheese");
        console.log(`철수가 주문한 ${this.pizza.getName()}\n`);

        this.pizza = this.chicagoBranch.orderPizza("clam");
        console.log(`영희가 주문한 ${this.pizza.getName()}\n`);
    }
}

new PizzaOrder();
