import { DisplayElement, Observer } from "./observer.interface";
import { WeatherData } from "./weather.date";
import { ForecastCase } from "./weather.type";

export class CurrentConditionsDisplay implements Observer, DisplayElement {
    private temperature: number;
    private humidity: number;
    private pressure: number;
    private weatherData: WeatherData;

    constructor(weatherData: WeatherData) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    update(): void {
        this.temperature = this.weatherData.getTemperature();
        this.humidity = this.weatherData.getHumidity();
        this.pressure = this.weatherData.getPressure();
        this.display();
    }

    display(): void {
        console.log(
            `현재 상태: 온도 ${this.temperature}℃, 습도: ${this.humidity}%, 기압: ${this.pressure}hPa`,
        );
    }
}

export class ForecastDisplay implements Observer, DisplayElement {
    private temperature: number;
    private humidity: number;
    private pressure: number;
    private weatherData: WeatherData;

    constructor(weatherData: WeatherData) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    update(): void {
        this.temperature = this.weatherData.getTemperature();
        this.humidity = this.weatherData.getHumidity();
        this.pressure = this.weatherData.getPressure();
        this.display();
    }

    display(): void {
        switch (this.forecast()) {
            case ForecastCase.RAIN:
                console.log("내일은 비가 옵니다");
                break;
            case ForecastCase.SNOW:
                console.log("내일은 눈이 옵니다");
                break;
            case ForecastCase.SUNNY:
                console.log("내일은 화창합니다");
                break;
            default:
                console.log("내일은 저도 모릅니다");
                break;
        }
    }

    private forecast(): string {
        if (this.temperature > 20 && this.isWet) {
            return ForecastCase.RAIN;
        } else if (this.temperature < 5 && this.isWet) {
            return ForecastCase.SNOW;
        } else {
            return ForecastCase.SUNNY;
        }
    }

    get isWet(): boolean {
        return this.humidity > 70 && this.pressure < 1000;
    }
}
