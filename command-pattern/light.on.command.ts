import { Command } from "./command";
import { Light } from "./light";

export class LightOnCammand implements Command {
    constructor(private light: Light) {}

    execute(): void {
        this.light.on();
    }
}
