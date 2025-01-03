import { Iterator } from "./iterator";
import { MenuItem } from "./menu.item";

export class DinnerMenuIterator implements Iterator {
    private position = 0;
    private items: MenuItem[];

    constructor(private menuItems: Set<MenuItem>) {
        this.items = Array.from(menuItems);
    }

    hasNext(): boolean {
        return this.position < this.items.length;
    }

    next(): MenuItem {
        const menuItem = this.items[this.position];
        this.position += 1;
        return menuItem;
    }
}
