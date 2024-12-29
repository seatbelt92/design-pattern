import { Duck } from "./duck";
import { Turkey } from "./turkey";

export class TurkeyAdapter implements Duck {
    constructor(private turkey: Turkey) {}

    quack(): void {
        this.turkey.gobble();
    }

    fly(): void {
        for (let i = 0; i < 5; i++) {
            this.turkey.fly();
        }
    }
}
