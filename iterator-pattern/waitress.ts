import { DinnerMenu } from "./dinner.menu";
import { MenuItem } from "./menu.item";
import { PancakeHouseMenu } from "./pancake.house.menu";

export class Waitress {
    constructor(
        private pancakeHouseMenu: PancakeHouseMenu,
        private dinnerMenu: DinnerMenu,
    ) {}

    printMenu(): void {
        const pancakeHouseMenuItems = this.pancakeHouseMenu.getMenuItems();
        console.log(pancakeHouseMenuItems);

        const dinnerMenuItems = this.dinnerMenu.getMenuItems();
        console.log(dinnerMenuItems);
    }

    printVegetarian(): void {
        const vegetarianMenu: MenuItem[] = [];
        const pancakeHouseMenuItems = this.pancakeHouseMenu.getMenuItems();
        const dinnerMenuItems = this.dinnerMenu.getMenuItems();

        for (const item of pancakeHouseMenuItems) {
            if (item.getVegetarian() === true) vegetarianMenu.push(item);
        }

        for (const item of dinnerMenuItems) {
            if (item.getVegetarian() === true) vegetarianMenu.push(item);
        }

        console.log(vegetarianMenu);
    }
}
