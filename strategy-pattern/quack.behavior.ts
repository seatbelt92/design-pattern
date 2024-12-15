export interface QuackBehavior {
  quack(): void
}

export class Quack implements QuackBehavior {
  quack(): void {
    console.log("꽥꽥")
  }
}

export class Squeak implements QuackBehavior {
  quack(): void {
    console.log("삑삑")
  }
}

export class MuteQuack implements QuackBehavior {
  quack(): void {
    console.log("소리를 못내요")
  }
}