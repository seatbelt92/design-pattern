import { UnsupportedOperationError } from "./composite.error";

export abstract class MenuComponent {
    add(menuCompoment: MenuComponent): void {
        throw new UnsupportedOperationError();
    }
    remove(menuCompoment: MenuComponent): void {
        throw new UnsupportedOperationError();
    }
    getChild(i: number): MenuComponent {
        throw new UnsupportedOperationError();
    }

    getName(): string {
        throw new UnsupportedOperationError();
    }
    getDescription(): string {
        throw new UnsupportedOperationError();
    }
    getPrice(): number {
        throw new UnsupportedOperationError();
    }
    isVegetarian(): boolean {
        throw new UnsupportedOperationError();
    }

    print(): void {
        throw new UnsupportedOperationError();
    }
}
