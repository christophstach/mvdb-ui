export function secondsToHms(timestamp: number) {
    const h = Math.floor(timestamp / 3600);
    const m = Math.floor(timestamp % 3600 / 60);
    const s = Math.floor(timestamp % 3600 % 60);

    const hDisplay = h > 0 ? h + (h === 1 ? "" : " hours, ") : "";
    const mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
    const sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";

    return `${h}:${m} h`;
}
