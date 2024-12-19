export abstract class Pizza {
    name: string;
    dough: string;
    sauce: string;
    toppings: string[];

    prepare(): void {
        console.log(`준비 중: ${this.name}`);
        console.log(`${this.dough}를 돌리는 중`);
        console.log(`${this.sauce}를 뿌리는 중`);
        console.log(`토핑을 올리는 중: ${this.toppings.join(", ")}`);
    }

    bake(): void {
        console.log("오븐에서 굽기");
    }

    cut(): void {
        console.log("8등분으로 커팅하기");
    }

    box(): void {
        console.log("상자에 담기");
    }

    getName() {
        return this.name;
    }
}
