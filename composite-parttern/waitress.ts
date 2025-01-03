import { MenuComponent } from "./menu.component";

export class Waitress {
    constructor(private allMenus: MenuComponent) {}

    printMenu(): void {
        this.allMenus.print();
    }
}
