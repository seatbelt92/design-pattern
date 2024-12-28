export class Light {
    constructor(private name: string) {}

    on(): void {
        console.log(`${this.name} 조명이 켜졌습니다`);
    }

    off(): void {
        console.log(`${this.name} 조명이 꺼졌습니다`);
    }
}
