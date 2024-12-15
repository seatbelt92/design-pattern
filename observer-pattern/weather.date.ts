import { Observer, Subject } from "./observer.interface";

export class WeatherData implements Subject {
    private observers: Observer[];
    private temperature: number;
    private humidity: number;
    private pressure: number;

    constructor() {
        this.observers = [];
    }

    registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter((el) => el !== observer);
    }

    notifyObserver(): void {
        for (const observer of this.observers) {
            observer.update();
        }
    }

    measurementsChanged(): void {
        this.notifyObserver();
    }

    setMeasurement(temp: number, humidity: number, pressure: number): void {
        this.temperature = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    }

    getTemperature(): number {
        return this.temperature;
    }

    getHumidity(): number {
        return this.humidity;
    }

    getPressure(): number {
        return this.pressure;
    }
}
