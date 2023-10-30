import Game from '../../../../core/domain/entities/Game';
import IResult from '../../../../core/domain/entities/IResult';
import Player from '../../../../core/domain/entities/Player';

describe('Game', () => {
  let game: Game;
  let player: Player;
  const dummyResult: IResult = {
    rolls: [1, 2, 3],
    win: true,
  };

  beforeEach(() => {
    player = new Player('Alice');
    game = new Game(player);
  });

  test('El constructor inicializa las propiedades correctamente', () => {
    expect(game.getWinnerNumber()).toBe(7); //valor por defecto
    expect(game.getPlayer()).toBe(player);
    expect(game.getResult()).toBeUndefined();
  });

  test('setResult debe introducir resultado', () => {
    game.setResult(dummyResult);
    expect(game.getResult()).toEqual(dummyResult);
  });

  test('setId debe poner el id de juego', () => {
    game.setId(42);
    expect(game.getId()).toBe(42);
  });

  test('setWinnerNumber debe poner el numero ganador', () => {
    game.setWinnerNumber(10);
    expect(game.getWinnerNumber()).toBe(10);
  });

  test('setPlayer debe poner el jugador', () => {
    const newPlayer = new Player('Bob');
    game.setPlayer(newPlayer);
    expect(game.getPlayer()).toBe(newPlayer);
  });
});