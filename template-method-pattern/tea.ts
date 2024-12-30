import { CaffeinBeverage } from "./caffein.beverage";
import * as readline from "readline";

export class Tea extends CaffeinBeverage {
    brew(): void {
        console.log("찻잎을 우려내는 중");
    }

    addCondiments(): void {
        console.log("레몬을 추가하는 중");
    }

    async customerWantsCondiments(): Promise<boolean> {
        const answer = await this.getUserInput();

        return answer.toLowerCase() === "y";
    }

    private async getUserInput(): Promise<string> {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        return new Promise((resolve) => {
            rl.question("차에 레몬을 추가할까요? (y/n): ", (answer: string) => {
                rl.close();
                resolve(answer);
            });
        });
    }
}
