import { Pizza } from "../pizza";

export class ChicagoStyleCheesePizza extends Pizza {
    name = "Chicago 치즈 피자";
    dough = "두꺼운 크러스트 도우";
    sauce = "토마토 소스";
    toppings = ["모짜렐라 치즈", "파마산 치즈"];

    cut(): void {
        console.log("네모난 모양으로 커팅하기");
    }
}

export class ChicagoStylePepperoniPizza extends Pizza {
    name = "Chicago 페페로니 피자";
    dough = "두꺼운 크러스트 도우";
    sauce = "토마토 소스";
    toppings = ["모짜렐라 치즈", "수제 햄"];

    cut(): void {
        console.log("네모난 모양으로 커팅하기");
    }
}

export class ChicagoStyleClamPizza extends Pizza {
    name = "Chicago 조개 피자";
    dough = "두꺼운 크러스트 도우";
    sauce = "토마토 소스";
    toppings = ["모짜렐라 치즈", "조개 관자"];

    cut(): void {
        console.log("네모난 모양으로 커팅하기");
    }
}

export class ChicagoStyleVeggiePizza extends Pizza {
    name = "Chicago 야채 피자";
    dough = "두꺼운 크러스트 도우";
    sauce = "토마토 소스";
    toppings = ["모짜렐라 치즈", "각종 야채"];

    cut(): void {
        console.log("네모난 모양으로 커팅하기");
    }
}
