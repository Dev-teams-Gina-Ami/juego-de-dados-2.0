import IDices from '../entities/IDices';
import IResult from '../entities/IResult';

function roll(dice: IDices): number {
  return Math.floor(Math.random() * (dice.sides - 1) + 1);
}

function winOrLose(
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
  
  function getMatchResult(
    roll1: number,
    roll2: number,
    winnerNumber: number
  ): IResult {
    const result: IResult = {
      rolls: [roll1, roll2],
      win: winOrLose(roll1, roll2, winnerNumber)
    };
  
    return result;
  }

export default { roll, winOrLose, getMatchResult };
