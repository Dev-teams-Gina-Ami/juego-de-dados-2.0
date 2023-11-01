import { GameRepositoriesImpl } from '../../../infrastructure/repositories/GameRepositoriesImpl';
import Game from '../../../core/domain/entities/Game';
import Player from '../../../core/domain/entities/Player';
import IResult from '../../../core/domain/entities/IResult';

jest.mock('../../../infrastructure/database/connection', () => ({
  databaseInfo: {
    GameModel: {
      create: jest.fn(),
      findByPk: jest.fn(),
      findAll: jest.fn(),
      update: jest.fn(),
      destroy: jest.fn(),
    },
  },
}));

describe('GameRepositories implementacion', () => {
  let gameRepository: GameRepositoriesImpl;
  const player = new Player('player2', 3, 1);
  const game = new Game(player);
  const result: IResult = {rolls: [3, 5], win: true};
  game.setResult(result);

  beforeEach(() => {
    gameRepository = new GameRepositoriesImpl();
  });

  it('Debe añadir un juego', async () => {
    if (gameRepository.GameModel === null) {
      fail('GameModel es null');
    }
    await gameRepository.add(game);

    expect(gameRepository.GameModel.create).toHaveBeenCalledWith(expect.objectContaining({
      id_game: game.getId(),
      player_id: game.getPlayer().getId(),
    }));

  });

  it('debe encontrar un juego por ID', async () => {
    if (gameRepository.GameModel === null) {
      fail('GameModel es null');
    }
    const gameId = 1; 
    await gameRepository.findById(gameId);
    expect(gameRepository.GameModel.findByPk).toHaveBeenCalledWith(gameId);
  });

  it('debe encontrar todos los juegos', async () => {
    if (gameRepository.GameModel === null) {
      fail('GameModel es null');
    }
    await gameRepository.findAll();
    expect(gameRepository.GameModel.findAll).toHaveBeenCalled();
  });

  it('debe actualizar un juego', async () => {
    if (gameRepository.GameModel === null) {
      fail('GameModel es null');
    }

    await gameRepository.update(game);
    expect(gameRepository.GameModel.update).toHaveBeenCalled();
  });

  it('debe borrar un juego', async () => {
    if (gameRepository.GameModel === null) {
      fail('GameModel es null');
    }

    const gameId = 1; 
    await gameRepository.delete(gameId);
    expect(gameRepository.GameModel.destroy).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { id_game: gameId },
      })
    );
  });
});