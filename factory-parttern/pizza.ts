import {
    Cheese,
    Clams,
    Dough,
    Pepperoni,
    Sauce,
    Veggies,
} from "./ingredient/pizza.ingredient.type";

export abstract class Pizza {
    name: string;
    dough: Dough;
    sauce: Sauce;
    veggies: Veggies[];
    cheese: Cheese;
    pepperroni: Pepperoni;
    clams: Clams;

    prepare(): void {}

    bake(): void {
        console.log("오븐에서 굽기");
    }

    cut(): void {
        console.log("8등분으로 커팅하기");
    }

    box(): void {
        console.log("상자에 담기");
    }

    setName(name: string): void {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }
}
