class Game {
	private id: number;
	private playerId: number;
	private haswon?: boolean;
	private winnerNumber: number;
	private dice1_value: number;
	private dice2_value: number;

	private static id_: number = 0;

	constructor(playerId: number, winnerNumber: number = 7, dice1_value: number = 0, dice2_value: number = 0, haswon?: boolean, id_?: number){
		this.playerId = playerId;
		this.winnerNumber = winnerNumber;
		this.dice1_value = dice1_value;
		this.dice2_value = dice2_value;
		this.haswon = haswon;

		if (typeof id_ === "number") {
			Game.id_ = id_;
		}

		this.id = ++Game.id_;
	}

	setId(id: number): void {
		this.id = id;
	}

	setPlayerId(playerId: number): void {
		this.playerId = playerId;
	}

	setHasWon(haswon: boolean): void {
		this.haswon = haswon;
	}

	setWinnerNumber(winnerNumber: number): void{
		this.winnerNumber = winnerNumber;
	}

	setDice1Value(dice1_value: number): void {
		this.dice1_value = dice1_value;
	}

	setDice2Value(dice2_value: number): void {
		this.dice2_value = dice2_value;
	}

	static setIdCounter(id_: number): void {
		Game.id_ = id_;
	}

	getId() : number {
		return this.id;
	}

	getPlayerId() : number {
		return this.playerId;
	}

	getHasWon() : boolean | undefined {
		return this.haswon;
	}

	getWinnerNumber() : number {
		return this.winnerNumber;
	}

	getDice1Value() : number {
		return this.dice1_value;
	}

	getDice2Value() : number {
		return this.dice2_value;
	}
}

export default Game;
