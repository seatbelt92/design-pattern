import * as readline from "readline";

export abstract class CaffeinBeverage {
    readonly prepareRecipe = async (): Promise<void> => {
        this.boilWater();
        this.brew();
        this.pourInCup();
        if (await this.customerWantsCondiments(this.condiments)) this.addCondiments();
    };

    abstract condiments: string;

    abstract brew(): void;

    abstract addCondiments(): void;

    boilWater(): void {
        console.log("물 끓이는 중");
    }

    pourInCup(): void {
        console.log("컵에 따르는 중");
    }

    async customerWantsCondiments(condiments: string): Promise<boolean> {
        const answer = await this.getUserInput(condiments);

        return answer.toLowerCase() === "y";
    }

    async getUserInput(condiments: string): Promise<string> {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        return new Promise((resolve) => {
            rl.question(`${condiments} 첨가물을 추가하시겠습니까?(y/n): `, (answer: string) => {
                rl.close();
                resolve(answer);
            });
        });
    }
}
