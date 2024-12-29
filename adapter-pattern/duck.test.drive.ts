import { Duck } from "./duck";
import { MallardDuck } from "./mallard.duck";
import { Turkey } from "./turkey";
import { TurkeyAdapter } from "./turkey.adapter";
import { WildTurkey } from "./wild.turkey";

class DuckTestDirve {
    duck: Duck = new MallardDuck();
    turkey: Turkey = new WildTurkey();
    turkeyAdapter: Duck = new TurkeyAdapter(this.turkey);

    test(): void {
        console.log("칠면조가 말하길");
        this.turkey.gobble();
        this.turkey.fly();

        console.log("\n오리가 말하길");
        this.testDuck(this.duck);

        console.log("\n칠면조 어댑터가가 말하길");
        this.testDuck(this.turkeyAdapter);
    }

    private testDuck(duck: Duck): void {
        duck.quack();
        duck.fly();
    }
}

new DuckTestDirve().test();
