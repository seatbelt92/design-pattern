import { Menu } from "./menu";
import { MenuItem } from "./menu.item";
import { Waitress } from "./waitress";

class MenuTestDrive {
    test(): void {
        const pancakeHouseMenu = new Menu("팬케이크 하우스 메뉴", "아침 메뉴");
        const compositeMenu = new Menu("컴포지트 식당 메뉴", "저녁 메뉴");
        const dessertMenu = new Menu("디저트 메뉴", "디저트를 즐겨보세요");

        const allMenus = new Menu("전체 메뉴", "전체 메뉴");

        allMenus.add(pancakeHouseMenu);
        allMenus.add(compositeMenu);

        compositeMenu.add(new MenuItem("파스타", "라구 파스타", true, 14000));
        compositeMenu.add(dessertMenu);

        dessertMenu.add(new MenuItem("애플 파이", "바삭한 애플 파이", true, 7500));

        const waitress = new Waitress(allMenus);
        waitress.printMenu();
    }
}

new MenuTestDrive().test();
