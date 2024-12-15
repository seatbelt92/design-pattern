export interface FlyBehavior {
  fly(): void
}

export class FlywWithWings implements FlyBehavior {
  fly(): void {
    console.log("날 수 있어요")
  }
}

export class FlyNoWay implements FlyBehavior {
  fly(): void {
    console.log("날 수 없어요")
  }
}

export class FlyRocketPowered implements FlyBehavior {
  fly(): void {
    console.log("로켓추친으로 날아요")
  }
}