import { DinnerMenuIterator } from "./dinner.menu.iterator";
import { Iterator } from "./iterator";
import { Menu } from "./menu";
import { MenuItem } from "./menu.item";

export class DinnerMenu implements Menu {
    private menuItems: Set<MenuItem>;

    constructor() {
        this.menuItems = new Set();
        this.addItem(
            "채식주의자용 BLT",
            "통밀 위에 콩고기 베이컨, 상추, 토마토를 얹은 메뉴",
            true,
            7000,
        );

        this.addItem("BLT", "통밀 위에 베이컨, 상추, 토마토를 얹은 메뉴", false, 6000);

        this.addItem("오늘의 스프", "감자 샐러드를 곁들인 오늘의 스프", false, 7000);

        this.addItem(
            "핫도그",
            "사워크라우트, 갖은 양념, 양파, 치즈가 곁들여진 핫도그",
            false,
            8000,
        );
    }

    addItem(name: string, description: string, vegetarian: boolean, price: number): void {
        this.menuItems.add(new MenuItem(name, description, vegetarian, price));
    }

    createIterator(): Iterator {
        return new DinnerMenuIterator(this.menuItems);
    }
}
