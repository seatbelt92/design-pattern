import { Iterator } from "./iterator";
import { Menu } from "./menu";

export class Waitress {
    constructor(
        private pancakeHouseMenu: Menu,
        private dinnerMenu: Menu,
    ) {}

    printMenu(): void {
        this.printMenuItems(this.pancakeHouseMenu.createIterator());
        this.printMenuItems(this.dinnerMenu.createIterator());
    }

    private printMenuItems(iterator: Iterator): void {
        while (iterator.hasNext()) {
            console.log(iterator.next());
        }
    }

    printVegetarian(): void {
        const pancakeHouseMenuItems = this.pancakeHouseMenu.createIterator();
        const dinnerMenuItems = this.dinnerMenu.createIterator();

        this.printVegetarianMenuItems(pancakeHouseMenuItems);
        this.printVegetarianMenuItems(dinnerMenuItems);
    }

    private printVegetarianMenuItems(iterator: Iterator): void {
        while (iterator.hasNext()) {
            const iteratorNext = iterator.next();
            if (iteratorNext.getVegetarian()) console.log(iteratorNext);
        }
    }
}
