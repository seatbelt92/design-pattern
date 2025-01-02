import { Iterator } from "./iterator";
import { Menu } from "./menu";
import { MenuItem } from "./menu.item";
import { PancakeHouseMenuIterator } from "./pancake.house.menu.iterator";

export class PancakeHouseMenu implements Menu {
    private menuItems: MenuItem[];
    constructor() {
        this.menuItems = [];
        this.addItem("K&B 팬케이크 세트", "스크램블 에그와 토스트가 곁들여진 팬케이크", true, 5000);

        this.addItem(
            "레귤러 팬케이크 세트",
            "달걀 프라이와 소시지가 곁들여진 팬케이크",
            false,
            5000,
        );

        this.addItem(
            "블루베리 팬케이크",
            "신선한 블루베리와 블루베리 시럽으로 만든 팬케이크",
            true,
            8000,
        );

        this.addItem("와플", "취향에 따라 블루베리나 딸기를 얹을 수 있는 와플", true, 9000);
    }

    addItem(name: string, description: string, vegetarian: boolean, price: number): void {
        this.menuItems.push(new MenuItem(name, description, vegetarian, price));
    }

    createIterator(): Iterator {
        return new PancakeHouseMenuIterator(this.menuItems);
    }
}
