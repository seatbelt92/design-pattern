import { Beverage } from "./beverage";

export abstract class CondimentDecorator extends Beverage {
    berverage: Beverage;

    abstract getDescription(): string;
}
