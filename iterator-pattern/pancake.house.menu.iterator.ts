import { Iterator } from "./iterator";
import { MenuItem } from "./menu.item";

export class PancakeHouseMenuIterator implements Iterator {
    private position = 0;
    constructor(private items: MenuItem[]) {}

    hasNext(): boolean {
        return this.position < this.items.length;
    }

    next(): MenuItem {
        const menuItem = this.items[this.position];
        this.position += 1;
        return menuItem;
    }
}
