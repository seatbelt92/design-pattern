import { CaffeinBeverage } from "./caffein.beverage";
import * as readline from "readline";

export class Coffee extends CaffeinBeverage {
    brew(): void {
        console.log("커피를 우려내는 중");
    }

    addCondiments(): void {
        console.log("설탕과 우유를 추가하는 중");
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
            rl.question("커피에 우유와 설탕을 넣을까요? (y/n): ", (answer: string) => {
                rl.close();
                resolve(answer);
            });
        });
    }
}
