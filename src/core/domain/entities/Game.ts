import IResult from "./IResult";
import Player from "./Player";

class Game {
	private id: number;
	static id_: number = 0;
	private result?: IResult;
	private winnerNumber: number;
	private player: Player;

	constructor(player: Player, winnerNumber: number = 7){
		this.winnerNumber = winnerNumber;
		this.player = player;
		this.id = Game.id_++;
	}

	setResult(result: IResult): void {
		this.result = result;
	};

	setId(id: number): void {
		this.id = id;
	}

	setWinnerNumber(winnerNumber: number): void{
		this.winnerNumber = winnerNumber;
	}

	setPlayer(player: Player): void {
		this.player = player;
	}

	getResult(): IResult | undefined{
		return this.result;
	}

	getWinnerNumber() : number {
		return this.winnerNumber;
	}

	getId() : number {
		return this.id;
	}

	getPlayer() : Player {
		return this.player;
	}


}

export default Game;
