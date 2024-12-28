import { Command } from "./command";
import { GarageDoor } from "./garage.door";

export class GarageDoorOpenCommand implements Command {
    constructor(private garageDoor: GarageDoor) {}
    execute(): void {
        this.garageDoor.up();
    }
}
