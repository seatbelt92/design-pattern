import {
    BlackOlive,
    FreshClams,
    Garlic,
    MozzarellaCheese,
    Mushroom,
    RedPepper,
    SlicedPepperoni,
    ThickCrustDough,
    TomatoSauce,
} from "./pizza.ingredient";
import { PizzaIngredientFactory } from "./pizza.ingredient.factory";
import { Cheese, Clams, Dough, Pepperoni, Sauce, Veggies } from "./pizza.ingredient.type";

export class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
    createDough(): Dough {
        return new ThickCrustDough();
    }

    createSauce(): Sauce {
        return new TomatoSauce();
    }

    createCheese(): Cheese {
        return new MozzarellaCheese();
    }

    createVeggies(): Veggies[] {
        return [new Garlic(), new BlackOlive(), new Mushroom(), new RedPepper()];
    }

    createPepperoni(): Pepperoni {
        return new SlicedPepperoni();
    }

    createClams(): Clams {
        return new FreshClams();
    }
}
