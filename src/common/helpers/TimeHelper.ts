export function secondsToHm(timestamp: number) {
    const h = Math.floor(timestamp / 3600);
    const m = Math.floor(timestamp % 3600 / 60);
    // const s = Math.floor(timestamp % 3600 % 60);

    return `${h}:${m} h`;
}
