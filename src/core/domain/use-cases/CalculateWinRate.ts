export function calculateWinRate(totalWins: number, totalPlays: number) {
  let result: number = 0;
  if (totalPlays != 0) {
    result = (totalWins / totalPlays) * 100;
  }
  return result;
}
