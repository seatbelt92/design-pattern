import { Pizza } from "./pizza";
import { CheesePizza, ClamPizza, PepperoniPizza, VeggiePizza } from "./pizza.menu";

export class SimplePizzaFactory {
    createPizza(type: string): Pizza {
        let pizza: Pizza;

        if (type === "cheese") {
            pizza = new CheesePizza();
        } else if (type === "pepperoni") {
            pizza = new PepperoniPizza();
        } else if (type === "clam") {
            pizza = new ClamPizza();
        } else if (type === "veggie") {
            pizza = new VeggiePizza();
        } else {
            throw new Error("등록되지 않은 메뉴입니다.");
        }

        console.log(`주문한 피자: ${pizza.name}`);
        return pizza;
    }
}
