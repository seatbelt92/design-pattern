import { Command } from "../command";
import { Garage } from "./garage";

export class GarageDoorOpenCommand implements Command {
    constructor(private garage: Garage) {}
    execute(): void {
        this.garage.doorOpen();
    }
}
