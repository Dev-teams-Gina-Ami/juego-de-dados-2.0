/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createGame,
  getLastGame,
  getLastId,
  resetGamesList,
  gametoJSON,
  games
} from '../../../../core/domain/use-cases/Games';
import Game from '../../../../core/domain/entities/Game';

describe('Funciones de uso de la clase Game', () => {
  let game: Game;

  beforeEach(() => {
    resetGamesList();
    game = new Game(1);
  });

  test('createGame debe añadir un nuevo Game a la array games', () => {
    createGame(1, 6);
    expect(getLastGame()).toBeInstanceOf(Game);

    createGame(2);
    expect(getLastGame()).toBeInstanceOf(Game);
  });

  test('getLastGame debe devolver la ultima instancia de Game dentro de la array', () => {
    createGame(1);
    createGame(2);
    const lastGame = getLastGame();
    expect(lastGame).toBeInstanceOf(Game);
    expect(lastGame.getPlayerId()).toBe(2);
  });

  test('getLastId debe devolver la id mas alta', () => {
    Game.setIdCounter(0);
    createGame(1);
    createGame(3);
    createGame(2);
    const highestId = getLastId();
    expect(highestId).toBe(3);
  });

  test('resetGamesList debe resetear la array de games', () => {
    createGame(1);
    createGame(2);
    resetGamesList();
    expect(games.length).toBe(0);
  });

  test('gametoJSON debe convertir una instancia de Game a un objeto JSON', () => {
    const gameData: any = gametoJSON(game);
    expect(gameData.id).toBe(game.getId());
    expect(gameData.playerId).toBe(game.getPlayerId());
    expect(gameData.hasWon).toBe(game.getHasWon());
    expect(gameData.winnerNumber).toBe(game.getWinnerNumber());
    expect(gameData.dice1_value).toBe(game.getDice1Value());
    expect(gameData.dice2_value).toBe(game.getDice2Value());
  });
});
