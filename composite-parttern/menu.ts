import { MenuComponent } from "./menu.component";

export class Menu extends MenuComponent {
    private menuComponents: MenuComponent[] = [];

    constructor(
        private name: string,
        private description: string,
    ) {
        super();
    }

    add(menuCompoment: MenuComponent): void {
        this.menuComponents.push(menuCompoment);
    }
    remove(menuCompoment: MenuComponent): void {
        this.menuComponents.filter((component) => component !== menuCompoment);
    }
    getChild(i: number): MenuComponent {
        return this.menuComponents[i];
    }

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    print(): void {
        console.log(`\n${this.getName()}, ${this.getDescription()}`);
        console.log("======================");

        for (const menuComponent of this.menuComponents) {
            menuComponent.print();
        }
    }
}
