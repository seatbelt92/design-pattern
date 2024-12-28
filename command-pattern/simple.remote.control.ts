import { Command } from "./command";

export class SimpleRemoteControl {
    private slot: Command;

    setCommand(command: Command): void {
        this.slot = command;
    }

    buttonWasPressed(): void {
        this.slot.execute();
    }
}
