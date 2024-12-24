import { Cheese, Clams, Dough, Pepperoni, Sauce, Veggies } from "./pizza.ingredient.type";

export class ThinCrustDough implements Dough {
    name = "얇은 크러스트 도우";
    constructor() {
        console.log(` - ${this.name}`);
    }
}

export class ThickCrustDough implements Dough {
    name = "두꺼운 크러스트 도우";
    constructor() {
        console.log(` - ${this.name}`);
    }
}

export class MarinaraSauce implements Sauce {
    name = "마리나라 소스";
    constructor() {
        console.log(` - ${this.name}`);
    }
}

export class TomatoSauce implements Sauce {
    name = "토마토 소스";
    constructor() {
        console.log(` - ${this.name}`);
    }
}

export class ReggianoCheese implements Cheese {
    name = "레지아노 치즈";
    constructor() {
        console.log(` - ${this.name}`);
    }
}

export class MozzarellaCheese implements Cheese {
    name = "모짜렐라 치즈";
    constructor() {
        console.log(` - ${this.name}`);
    }
}

export class Garlic implements Veggies {
    name = "마늘";
    constructor() {
        console.log(` - ${this.name}`);
    }
}

export class Onion implements Veggies {
    name = "양파";
    constructor() {
        console.log(` - ${this.name}`);
    }
}

export class Mushroom implements Veggies {
    name = "버섯";
    constructor() {
        console.log(` - ${this.name}`);
    }
}

export class RedPepper implements Veggies {
    name = "레드페퍼";
    constructor() {
        console.log(` - ${this.name}`);
    }
}

export class BlackOlive implements Veggies {
    name = "검은 올리브";
    constructor() {
        console.log(` - ${this.name}`);
    }
}

export class SlicedPepperoni implements Pepperoni {
    name = "슬라이스 페퍼로니";
    constructor() {
        console.log(` - ${this.name}`);
    }
}

export class FreshClams implements Clams {
    name = "신선한 조개";
    constructor() {
        console.log(` - ${this.name}`);
    }
}
