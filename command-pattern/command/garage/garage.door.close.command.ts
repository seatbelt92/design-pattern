import { Command } from "../command";
import { Garage } from "./garage";

export class GarageDoorCloseCommand implements Command {
    constructor(private garage: Garage) {}
    execute(): void {
        this.garage.doorClose();
    }
}
