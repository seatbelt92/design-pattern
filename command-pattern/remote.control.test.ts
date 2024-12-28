import { Garage } from "./command/garage/garage";
import { GarageDoorCloseCommand } from "./command/garage/garage.door.close.command";
import { GarageDoorOpenCommand } from "./command/garage/garage.door.open.command";
import { Light } from "./command/light/light";
import { LightOffCommand } from "./command/light/light.off.command";
import { LightOnCommand } from "./command/light/light.on.command";
import { RemoteControl } from "./remote.control";

class RemoteControlTest {
    remoteControl = new RemoteControl();
    livingRoomLight = new Light("거실");
    kitchenLight = new Light("주방");
    garageLight = new Light("차고");
    garage = new Garage();

    livingRoomLightOn = new LightOnCommand(this.livingRoomLight);
    livingRoomLightOff = new LightOffCommand(this.livingRoomLight);
    kitchenLightOn = new LightOnCommand(this.kitchenLight);
    kitchenLightOff = new LightOffCommand(this.kitchenLight);
    garageLightOn = new LightOnCommand(this.garageLight);
    garageLightOff = new LightOffCommand(this.garageLight);
    garageDoorOpen = new GarageDoorOpenCommand(this.garage);
    garageDoorClose = new GarageDoorCloseCommand(this.garage);

    test(): void {
        this.remoteControl.setCommand(0, this.livingRoomLightOn, this.livingRoomLightOff);
        this.remoteControl.setCommand(1, this.kitchenLightOn, this.kitchenLightOff);
        this.remoteControl.setCommand(2, this.garageLightOn, this.garageLightOff);
        this.remoteControl.setCommand(3, this.garageDoorOpen, this.garageDoorClose);

        console.log(this.remoteControl.showButtons());

        this.remoteControl.onButtonWasPushed(0);
        this.remoteControl.offButtonWasPushed(0);
        this.remoteControl.onButtonWasPushed(1);
        this.remoteControl.offButtonWasPushed(1);
        this.remoteControl.onButtonWasPushed(2);
        this.remoteControl.offButtonWasPushed(2);
        this.remoteControl.onButtonWasPushed(3);
        this.remoteControl.offButtonWasPushed(3);
    }
}

new RemoteControlTest().test();
