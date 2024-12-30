import { Coffee } from "./coffee";
import { Tea } from "./tea";

class BeverageTestDrive {
    test(): void {
        const coffee = new Coffee();
        const tea = new Tea();

        console.log("커피를 준비 중...");
        coffee.prepareRecipe();

        console.log("\n차를 준비 중...");
        tea.prepareRecipe();
    }
}

new BeverageTestDrive().test();
