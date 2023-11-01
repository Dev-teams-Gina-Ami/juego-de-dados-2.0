import IResult from './IResult';
import Player from './Player';

class Game {
	id: number;
	private static id_: number = 0;
	result?: IResult;
	winnerNumber: number;
	player: Player;

	constructor(player: Player, winnerNumber: number = 7, result?: IResult, id_?: number){
		this.winnerNumber = winnerNumber;
		this.player = player;
		this.result = result;
		if (typeof id_ === "number") {
			Game.id_ = id_;
		}
		this.id = Game.id_+1;
	}

  setResult(result: IResult): void {
    this.result = result;
  }

  setId(id: number): void {
    this.id = id;
  }

  setWinnerNumber(winnerNumber: number): void {
    this.winnerNumber = winnerNumber;
  }

  setPlayer(player: Player): void {
    this.player = player;
  }

  getResult(): IResult | undefined {
    return this.result;
  }

  getWinnerNumber(): number {
    return this.winnerNumber;
  }

  getId(): number {
    return this.id;
  }

  getPlayer(): Player {
    return this.player;
  }
}

export default Game;
