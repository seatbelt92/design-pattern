import { BeverageSize } from "./beverage.type";

export class BeverageUtils {
    static getCostBySize(size: BeverageSize, priceList: number[]): number {
        switch (size) {
            case BeverageSize.TALL:
                return priceList[0];
            case BeverageSize.GRANDE:
                return priceList[1];
            case BeverageSize.VENTI:
                return priceList[2];
            default:
                throw new Error("not defined size");
        }
    }
}
