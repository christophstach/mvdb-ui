export function secondsToHm(timestamp: number) {
    const h = Math.floor(timestamp / 3600);
    const m = Math.floor(timestamp % 3600 / 60);
    // const s = Math.floor(timestamp % 3600 % 60);

    return `${h}:${m} h`;
}

export function minutesToHm(timestamp: number) {
    const h = Math.floor(timestamp / 60).toString();
    let m = Math.floor(timestamp % 60).toString();
    // const s = Math.floor(timestamp % 3600 % 60);

    if (m.length === 1) {
        m = `0${m}`;
    }

    return `${h}:${m} h`;
}
