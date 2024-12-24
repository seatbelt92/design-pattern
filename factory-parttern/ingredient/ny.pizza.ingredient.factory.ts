import {
    FreshClams,
    Garlic,
    MarinaraSauce,
    Mushroom,
    Onion,
    RedPepper,
    ReggianoCheese,
    SlicedPepperoni,
    ThinCrustDough,
} from "./pizza.ingredient";
import { PizzaIngredientFactory } from "./pizza.ingredient.factory";
import { Cheese, Clams, Dough, Pepperoni, Sauce, Veggies } from "./pizza.ingredient.type";

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
    createDough(): Dough {
        return new ThinCrustDough();
    }

    createSauce(): Sauce {
        return new MarinaraSauce();
    }

    createCheese(): Cheese {
        return new ReggianoCheese();
    }

    createVeggies(): Veggies[] {
        return [new Garlic(), new Onion(), new Mushroom(), new RedPepper()];
    }

    createPepperoni(): Pepperoni {
        return new SlicedPepperoni();
    }

    createClams(): Clams {
        return new FreshClams();
    }
}
