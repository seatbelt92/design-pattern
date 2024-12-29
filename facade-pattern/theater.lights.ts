export class TheaterLights {
    on(): void {
        console.log("조명이 켜졌습니다.");
    }

    off(): void {
        console.log("조명이 꺼졌습니다.");
    }

    dim(percent: number): void {
        console.log(`조명 밝기를 ${percent}퍼센트로 설정합니다.`);
    }
}
