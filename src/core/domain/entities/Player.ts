class Player {
  private id_player: number;
  private name: string;
  private totalPlays: number;
  private totalWins: number;
  private winRate: number;
  private creationDate: Date | undefined;

  private static id_: number = 0;

  constructor(
    name: string,
    totalPlays: number = 9,
    totalWins: number = 5,
    winRate: number = 0,
    creationDate?: Date | undefined,
    id_?: number
  ) {
    this.name = name;
    this.totalPlays = totalPlays;
    this.totalWins = totalWins;
    this.winRate = winRate;
    this.creationDate = creationDate;

    if (typeof id_ === 'number') {
      Player.id_ = id_;
    }

    this.id_player = ++Player.id_;
  }

  getId(): number {
    return this.id_player;
  }

  getName(): string {
    return this.name;
  }

  getTotalPlays(): number {
    return this.totalPlays;
  }

  getTotalWins(): number {
    return this.totalWins;
  }

  getWinRate(): number {
    return this.winRate = (this.totalWins / this.totalPlays) * 100;
  }

  getCreationDate(): Date | undefined {
    return this.creationDate;
  }

  setId(newId: number): void {
    this.id_player = newId;
  }

  setName(newName: string): void {
    this.name = newName;
  }

  setTotalPlays(newTotalPlays: number): void {
    this.totalPlays = newTotalPlays;
  }

  setTotalWins(newTotalWins: number): void {
    this.totalWins = newTotalWins;
  }

  setWinRate(newWinRate: number): void {
    this.winRate = newWinRate;
  }

  setCreationDate(newCreationDate: Date): void {
    this.creationDate = newCreationDate;
  }

  static setIdCounter(id_: number): void {
    Player.id_ = id_;
  }
}

export default Player;
