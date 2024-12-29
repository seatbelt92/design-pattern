import { Amplifier } from "./amplifier";
import { Projector } from "./projector";
import { Screen } from "./screen";
import { TheaterLights } from "./theater.lights";

export class HomeTheaterFacade {
    constructor(
        private amp: Amplifier,
        private projector: Projector,
        private lights: TheaterLights,
        private screen: Screen,
    ) {}

    watchMovie(): void {
        console.log("영화 볼 준비 중");
        this.lights.dim(10);
        this.screen.down();
        this.projector.on();
        this.projector.wideScreenMode();
        this.amp.on();
        this.amp.setVolume(5);
    }

    endMovie(): void {
        console.log("\n홈시어터 끄는 중");
        this.lights.on();
        this.screen.up();
        this.projector.off();
        this.amp.off();
    }
}
