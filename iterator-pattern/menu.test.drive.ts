import { DinnerMenu } from "./dinner.menu";
import { PancakeHouseMenu } from "./pancake.house.menu";
import { Waitress } from "./waitress";

class MenuTestDrive {
    test(): void {
        const pancakeHouseMenu = new PancakeHouseMenu();
        const dinnerMenu = new DinnerMenu();

        const waitress = new Waitress(pancakeHouseMenu, dinnerMenu);
        waitress.printVegetarian();
    }
}

new MenuTestDrive().test();
