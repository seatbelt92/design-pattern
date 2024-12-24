import { Pizza } from "./pizza";
import { PizzaIngredientFactory } from "./ingredient/pizza.ingredient.factory";

export class CheesePizza extends Pizza {
    constructor(private ingredientFactory: PizzaIngredientFactory) {
        super();
    }

    prepare(): void {
        console.log(`준비 중: ${this.getName()}`);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
    }
}

export class PepperoniPizza extends Pizza {
    constructor(private ingredientFactory: PizzaIngredientFactory) {
        super();
    }

    prepare(): void {
        console.log(`준비 중: ${this.getName()}`);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.pepperroni = this.ingredientFactory.createPepperoni();
    }
}

export class ClamPizza extends Pizza {
    constructor(private ingredientFactory: PizzaIngredientFactory) {
        super();
    }

    prepare(): void {
        console.log(`준비 중: ${this.getName()}`);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.clams = this.ingredientFactory.createClams();
    }
}

export class VeggiePizza extends Pizza {
    constructor(private ingredientFactory: PizzaIngredientFactory) {
        super();
    }

    prepare(): void {
        console.log(`준비 중: ${this.getName()}`);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.veggies = this.ingredientFactory.createVeggies();
    }
}
