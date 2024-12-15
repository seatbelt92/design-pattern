import { FlyBehavior, FlyNoWay, FlyRocketPowered, FlywWithWings } from "./fly.behavior"
import { MuteQuack, Quack, QuackBehavior, Squeak } from "./quack.behavior"

abstract class Duck {
  constructor(
    private flyBehavioir: FlyBehavior,
    private quackBehavior: QuackBehavior) { }

  swim(): void {
    console.log("물에 떠요")
  }

  abstract display(): void

  performFly(): void {
    this.flyBehavioir.fly()
  }

  performQuack(): void {
    this.quackBehavior.quack()
  }

  setFlyBehavior(fb: FlyBehavior) {
    this.flyBehavioir = fb
  }

  setQuackBehavior(qb: QuackBehavior) {
    this.quackBehavior = qb
  }
}

class MallardDuck extends Duck {
  constructor() {
    super(new FlywWithWings(), new Quack())
  }

  display(): void {
    console.log("청동오리 모양 출력")
  }
}

class RedHeadDuck extends Duck {
  constructor() {
    super(new FlywWithWings(), new Quack())
  }

  display(): void {
    console.log("붉은머리오리 모양 출력")
  }
}

class RubberDuck extends Duck {
  constructor() {
    super(new FlyNoWay(), new Squeak())
  }

  display(): void {
    console.log("고무오리 모양 출력")
  }
}

class DecoyDuck extends Duck {
  constructor() {
    super(new FlyNoWay(), new MuteQuack())
  }

  display(): void {
    console.log("모형오리 모양 출력")
  }
}

class ModelDuck extends Duck {
  constructor() {
    super(new FlyNoWay(), new MuteQuack())
  }

  display(): void {
    console.log("모형오리 모양 출력")
  }
}

// TEST
const modelDuck = new ModelDuck()
modelDuck.setFlyBehavior(new FlyRocketPowered())

console.log(modelDuck.performFly())
console.log(modelDuck.performQuack())