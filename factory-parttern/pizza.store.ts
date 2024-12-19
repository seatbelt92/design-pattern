import { Pizza } from "./pizza";

class PizzaStore {
    orderPizza(): Pizza {
        const pizza: Pizza = new Pizza();

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

        return pizza;
    }
}

new PizzaStore().orderPizza();
