import { MenuComponent } from "./menu.component";

export class MenuItem extends MenuComponent {
    constructor(
        private name: string,
        private description: string,
        private vegetarian: boolean,
        private price: number,
    ) {
        super();
    }

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    getPrice(): number {
        return this.price;
    }

    isVegetarian(): boolean {
        return this.vegetarian;
    }

    print(): void {
        const isVege = this.isVegetarian() ? "(v)" : undefined;
        console.log(` ${this.getName()}${isVege}, ${this.getPrice()}, ${this.getDescription()}`);
    }
}
