import { Cheese, Clams, Dough, Pepperoni, Sauce, Veggies } from "./pizza.ingredient.type";

export interface PizzaIngredientFactory {
    createDough(): Dough;
    createSauce(): Sauce;
    createCheese(): Cheese;
    createVeggies(): Veggies[];
    createPepperoni(): Pepperoni;
    createClams(): Clams;
}
