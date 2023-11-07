import { roll, winOrLose, doBothRolls, playMatch } from '../../../../core/domain/use-cases/Play'; // Replace 'yourModuleName' with the actual module path
import Game from '../../../../core/domain/entities/Game';
import Player from '../../../../core/domain/entities/Player';

describe('Funciones del juego', () => {
  let player: Player;
  let game: Game;

  beforeEach(() => {
    player = new Player('testPlayer');
    game = new Game(player.getId());
  });

  test('La funcion de roll debe devolver un numero valido', () => {
    const dice = { sides: 6 };
    const result = roll(dice);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(6);
  });

  test('winOrLose debe actualizar game.hasWon', () => {
    game.setDice1Value(1); 
    game.setDice2Value(2);
    game.setWinnerNumber(3);

    winOrLose(game);

    expect(game.getHasWon()).toBe(true);

    game.setDice1Value(1);
    game.setDice2Value(2);
    game.setWinnerNumber(4);

    winOrLose(game);

    expect(game.getHasWon()).toBe(false);
  });

  test('doBothRolls debe actualizar los valores de los rolls dentro del rango', () => {
    doBothRolls(game);
    const dice1Value = game.getDice1Value();
    const dice2Value = game.getDice2Value();
    expect(dice1Value).toBeGreaterThanOrEqual(1);
    expect(dice1Value).toBeLessThanOrEqual(6);
    expect(dice2Value).toBeGreaterThanOrEqual(1);
    expect(dice2Value).toBeLessThanOrEqual(6);
  });

  test('playMatch debe actualizar los stats del Player y devolver el objeto Game', () => {
    const initialTotalPlays = player.getTotalPlays();
    const initialTotalWins = player.getTotalWins();

    const result = playMatch(player);

    expect(player.getTotalPlays()).toBe(initialTotalPlays + 1);

    if (result.getHasWon()) {
      expect(player.getTotalWins()).toBe(initialTotalWins + 1);
    } else {
      expect(player.getTotalWins()).toBe(initialTotalWins);
    }

    expect(result instanceof Game).toBe(true);
  });
});
