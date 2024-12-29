import { Amplifier } from "./amplifier";
import { HomeTheaterFacade } from "./home.theater";
import { Projector } from "./projector";
import { Screen } from "./screen";
import { TheaterLights } from "./theater.lights";

export class HomeTheaterTestDrive {
    constructor(private homeTheater: HomeTheaterFacade) {}

    test(): void {
        this.homeTheater.watchMovie();
        this.homeTheater.endMovie();
    }
}

const amp = new Amplifier();
const projector = new Projector();
const lights = new TheaterLights();
const screen = new Screen();
const homeTheater = new HomeTheaterFacade(amp, projector, lights, screen);

new HomeTheaterTestDrive(homeTheater).test();
