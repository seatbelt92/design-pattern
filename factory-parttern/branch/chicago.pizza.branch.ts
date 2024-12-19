import { Pizza } from "../pizza";
import {
    ChicagoStyleCheesePizza,
    ChicagoStyleClamPizza,
    ChicagoStylePepperoniPizza,
    ChicagoStyleVeggiePizza,
} from "../menu/chicago.pizza.menu";
import { PizzaStore } from "../pizza.store";

export class ChicagoPizzaBranch extends PizzaStore {
    createPizza(type: string): Pizza {
        if (type === "cheese") {
            return new ChicagoStyleCheesePizza();
        } else if (type === "pepperoni") {
            return new ChicagoStylePepperoniPizza();
        } else if (type === "clam") {
            return new ChicagoStyleClamPizza();
        } else if (type === "veggie") {
            return new ChicagoStyleVeggiePizza();
        } else {
            throw new Error("등록되지 않은 메뉴입니다.");
        }
    }
}
