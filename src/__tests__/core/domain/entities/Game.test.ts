import Game from '../../../../core/domain/entities/Game';

describe('Game', () => {
  it('should create a new game with the specified values', () => {
    const game = new Game(1, 7, 2, 3, false, 1);

    expect(game.getId()).toBe(2);
    expect(game.getPlayerId()).toBe(1);
    expect(game.getWinnerNumber()).toBe(7);
    expect(game.getDice1Value()).toBe(2);
    expect(game.getDice2Value()).toBe(3);
    expect(game.getHasWon()).toBe(false);
  });

  it('should update game properties', () => {
    const game = new Game(1, 7);

    game.setId(2);
    game.setPlayerId(3);
    game.setWinnerNumber(6);
    game.setDice1Value(4);
    game.setDice2Value(5);
    game.setHasWon(true);

    expect(game.getId()).toBe(2);
    expect(game.getPlayerId()).toBe(3);
    expect(game.getWinnerNumber()).toBe(6);
    expect(game.getDice1Value()).toBe(4);
    expect(game.getDice2Value()).toBe(5);
    expect(game.getHasWon()).toBe(true);
  });
});
