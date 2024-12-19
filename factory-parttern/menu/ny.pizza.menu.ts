import { Pizza } from "../pizza";

export class NYStyleCheesePizza extends Pizza {
    name = "NY 치즈 피자";
    dough = "씬 크러스트 도우";
    sauce = "마리나라 소스";
    toppings = ["레지아노 치즈", "파마산 치즈"];
}

export class NYStylePepperoniPizza extends Pizza {
    name = "NY 페페로니 피자";
    dough = "씬 크러스트 도우";
    sauce = "마리나라 소스";
    toppings = ["레지아노 치즈", "수제 햄"];
}

export class NYStyleClamPizza extends Pizza {
    name = "NY 조개 피자";
    dough = "씬 크러스트 도우";
    sauce = "마리나라 소스";
    toppings = ["레지아노 치즈", "조개 관자"];
}

export class NYStyleVeggiePizza extends Pizza {
    name = "NY 야채 피자";
    dough = "씬 크러스트 도우";
    sauce = "마리나라 소스";
    toppings = ["레지아노 치즈", "각종 야채"];
}
