class Player {
  private id: number;
  private name: string;
  private totalPlays: number;
  private totalWins: number;
  private creationDate: Date | undefined;

  private static id_: number = 0;

  constructor(
    name: string,
    totalPlays: number = 0,
    totalWins: number = 0,
    creationDate?: Date | undefined
  ) {
    this.id = Player.id_ + 1;
    this.name = name;
    this.totalPlays = totalPlays;
    this.totalWins = totalWins;
    this.creationDate = creationDate;
  }

  getId(): number {
    return this.id;
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

  getCreationDate(): Date | undefined {
    return this.creationDate;
  }

  setId(newId: number): void {
    this.id = newId;
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

  setCreationDate(newCreationDate: Date): void {
    this.creationDate = newCreationDate;
  }
}

export default Player;
