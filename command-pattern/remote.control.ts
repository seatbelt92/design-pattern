import { Command } from "./command/command";
import { NoCommand } from "./command/no.command";

export class RemoteControl {
    private onCommands: Command[];
    private offCommands: Command[];

    constructor() {
        this.onCommands = Array.from({ length: 7 }, () => new NoCommand());
        this.offCommands = Array.from({ length: 7 }, () => new NoCommand());
    }

    setCommand(slot: number, onCommand: Command, offCommand: Command): void {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }

    onButtonWasPushed(slot: number): void {
        this.onCommands[slot].execute();
    }

    offButtonWasPushed(slot: number): void {
        this.offCommands[slot].execute();
    }

    showButtons(): string {
        let remote = "";
        for (let i = 0; i < this.onCommands.length; i++) {
            remote += `[slot ${i}] ${this.onCommands[i].constructor.name} ${this.offCommands[i].constructor.name}\n`;
        }
        return remote;
    }
}
