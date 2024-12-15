import { CurrentConditionsDisplay, ForecastDisplay } from "./weather.data.display";
import { WeatherData } from "./weather.date";

class WeatherStation {
    private weatherData = new WeatherData();
    private currentDisplay: CurrentConditionsDisplay;
    private forecastDisplay: ForecastDisplay;

    constructor() {
        this.currentDisplay = new CurrentConditionsDisplay(this.weatherData);
        this.forecastDisplay = new ForecastDisplay(this.weatherData);
        this.weatherData.setMeasurement(21, 71, 997);
        this.weatherData.setMeasurement(3, 75, 999);
        this.weatherData.setMeasurement(20, 69, 1014);
    }
}

new WeatherStation();
