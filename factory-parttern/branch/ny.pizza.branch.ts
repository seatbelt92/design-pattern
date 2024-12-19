import { Pizza } from "../pizza";
import {
    NYStyleCheesePizza,
    NYStyleClamPizza,
    NYStylePepperoniPizza,
    NYStyleVeggiePizza,
} from "../menu/ny.pizza.menu";
import { PizzaStore } from "../pizza.store";

export class NYPizzaBranch extends PizzaStore {
    createPizza(type: string): Pizza {
        if (type === "cheese") {
            return new NYStyleCheesePizza();
        } else if (type === "pepperoni") {
            return new NYStylePepperoniPizza();
        } else if (type === "clam") {
            return new NYStyleClamPizza();
        } else if (type === "veggie") {
            return new NYStyleVeggiePizza();
        } else {
            throw new Error("등록되지 않은 메뉴입니다.");
        }
    }
}
