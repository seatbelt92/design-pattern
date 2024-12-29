export class Amplifier {
    on(): void {
        console.log("앰프가 켜졌습니다.");
    }

    off(): void {
        console.log("앰프가 꺼졌습니다.");
    }

    setVolume(volume: number): void {
        console.log(`앰프 볼륨을 ${volume}로 설정합니다.`);
    }
}
