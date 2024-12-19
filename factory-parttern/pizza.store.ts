import { Pizza } from "./pizza";
import { SimplePizzaFactory } from "./simple.pizza.factory";

export class PizzaStore {
    constructor(private factory: SimplePizzaFactory) {}

    orderPizza(type: string): Pizza {
        const pizza: Pizza = this.factory.createPizza(type);

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

        return pizza;
    }
}
