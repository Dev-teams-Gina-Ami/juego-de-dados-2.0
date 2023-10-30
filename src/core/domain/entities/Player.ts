class Player {
  private readonly name: string;
  private totalPlays: number;
  private totalWins: number;
  private readonly creationDate: Date;

  constructor(name: string, totalPlays: number = 0, totalWins: number = 0) {
    this.name = name;
    this.totalPlays = totalPlays;
    this.totalWins = totalWins;
    this.creationDate = new Date();
  }

  toDTO(): {
    name: string;
    totalPlays: number;
    totalWins: number;
    creationDate: Date;
  } {
    return {
      name: this.name,
      totalPlays: this.totalPlays,
      totalWins: this.totalWins,
      creationDate: this.creationDate
    };
  }
  //use-cases

  PlaysCounter(): number {
    return (this.totalPlays += 1);
  }

  WinsCounter(): number {
    return (this.totalWins += 1);
  }

  calculateWinRatio(): number {
    const result = (this.totalWins / this.totalPlays) * 100;
    return result;
  }
}

export default Player;