import { Pizza } from "../pizza";
import { PizzaStore } from "./pizza.store";
import { PizzaIngredientFactory } from "../ingredient/pizza.ingredient.factory";
import { ChicagoPizzaIngredientFactory } from "../ingredient/chicago.pizza.ingredient.factory";
import { CheesePizza, ClamPizza, PepperoniPizza, VeggiePizza } from "../pizza.menu";

export class ChicagoPizzaBranch extends PizzaStore {
    protected createPizza(type: string): Pizza {
        let pizza: Pizza;
        const ingredientFactory: PizzaIngredientFactory = new ChicagoPizzaIngredientFactory();

        if (type === "cheese") {
            pizza = new CheesePizza(ingredientFactory);
            pizza.setName("시카고 치즈 피자");
        } else if (type === "pepperoni") {
            pizza = new PepperoniPizza(ingredientFactory);
            pizza.setName("시카고 페퍼로니 피자");
        } else if (type === "clam") {
            pizza = new ClamPizza(ingredientFactory);
            pizza.setName("시카고 조개 피자");
        } else if (type === "veggie") {
            pizza = new VeggiePizza(ingredientFactory);
            pizza.setName("시카고 야채 피자");
        } else {
            throw new Error("등록되지 않은 메뉴입니다.");
        }

        return pizza;
    }
}
