export function secondsToTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  seconds %= 60;
  const strMin = (mins < 10 ? '0' : '') + mins.toString();
  const strSec = (seconds < 10 ? '0' : '') + seconds.toString();
  return `${strMin}:${strSec}`;
}
