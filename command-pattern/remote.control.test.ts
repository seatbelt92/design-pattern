import { GarageDoor } from "./garage.door";
import { GarageDoorOpenCommand } from "./garage.door.open.command";
import { Light } from "./light";
import { LightOnCammand } from "./light.on.command";
import { SimpleRemoteControl } from "./simple.remote.control";

class RemoteControlTest {
    remote = new SimpleRemoteControl();
    light = new Light();
    garageDoor = new GarageDoor();
    lightOn = new LightOnCammand(this.light);
    garageDoorOpen = new GarageDoorOpenCommand(this.garageDoor);

    test(): void {
        this.remote.setCommand(this.lightOn);
        this.remote.buttonWasPressed();
        this.remote.setCommand(this.garageDoorOpen);
        this.remote.buttonWasPressed();
    }
}

new RemoteControlTest().test();
