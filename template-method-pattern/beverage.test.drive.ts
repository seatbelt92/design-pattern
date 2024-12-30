import { Coffee } from "./coffee";
import { Tea } from "./tea";

class BeverageTestDrive {
    async test(): Promise<void> {
        const coffee = new Coffee();
        const tea = new Tea();

        console.log("커피를 준비 중...");
        await coffee.prepareRecipe();

        console.log("\n차를 준비 중...");
        await tea.prepareRecipe();
    }
}

new BeverageTestDrive().test();
