import Game from '../entities/Game';
import IDices from '../entities/IDices';

export function roll(dice: IDices): number {
  return Math.floor(Math.random() * (dice.sides - 1) + 1);
}

export function winOrLose(
  roll1: number,
  roll2: number,
  winnerNumber: number
): boolean {
  if (roll1 + roll2 == winnerNumber) {
    return true;
  } else {
    return false;
  }
}

export function getMatchResult(
  roll1: number,
  roll2: number,
  winnerNumber: number,
  game: Game
): Game {
  game.setDice1Value(roll1);
  game.setDice2Value(roll2);
  game.setHasWon(winOrLose(roll1, roll2, winnerNumber));

  return game;
}

export function doBothRolls(game: Game) {
  let dice: IDices = { sides: 6 };
  let roll1 = roll(dice);
  let roll2 = roll(dice);
}
