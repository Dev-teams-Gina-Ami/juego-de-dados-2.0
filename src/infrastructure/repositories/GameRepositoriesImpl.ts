import { GameRepository } from '../../core/repositories/GameRepositories';
import Game from '../../core/domain/entities/Game';
import {
  games,
  getLastId,
  resetGamesList
} from '../../core/domain/use-cases/Games';

interface GameMap {
  id_game: number;
  player_id: number;
  has_won: boolean;
  winnerNumber: number;
  dice1_value: number;
  dice2_value: number;
}

export class GameRepositoriesImpl implements GameRepository {
  static GameModel: any;

  getGameData(game: Game): GameMap {
    return {
      id_game: game.getId(),
      player_id: game.getPlayerId(),
      has_won: game.getHasWon() || false, //valor por defecto por si no hay valor
      winnerNumber: game.getWinnerNumber(),
      dice1_value: game.getDice1Value() || 0, //valor por defecto por si no hay valor
      dice2_value: game.getDice2Value() || 0 //valor por defecto por si no hay valor
    };
  }

  getGameClass(gameData: any) {
    let id = gameData.dataValues.id_game;
    let playerId = gameData.dataValues.player_id;
    let hasWon = gameData.dataValues.has_won;
    let winnerNumber = gameData.dataValues.winnerNumber;
    let dice1_value = gameData.dataValues.dice1_value;
    let dice2_value = gameData.dataValues.dice2_value;

    let gameInstance = new Game(
      playerId,
      winnerNumber,
      dice1_value,
      dice2_value,
      hasWon
    );
    gameInstance.setId(id);

    return gameInstance;
  }

  async add(game: Game): Promise<void> {
    const GameData = this.getGameData(game);
    if (GameRepositoriesImpl.GameModel != null) {
      try {
        await GameRepositoriesImpl.GameModel.create(GameData as any);
      } catch (error) {
        console.error('Error adding game:', error);
      }
    }
  }

  async findById(id: number): Promise<Game | null> {
    if (GameRepositoriesImpl.GameModel != null) {
      try {
        const foundGame = await GameRepositoriesImpl.GameModel.findByPk(id);
        return this.getGameClass(foundGame);
      } catch (error) {
        console.error('Error finding game by ID:', error);
        return null;
      }
    }
    return null;
  }

  async findAll(): Promise<Game[] | null> {
    if (GameRepositoriesImpl.GameModel != null) {
      resetGamesList();
      const allGames = await GameRepositoriesImpl.GameModel.findAll();
      console.log(allGames);
      for (let i = 0; i < allGames.length; i++) {
        games.push(this.getGameClass(allGames[i]));
      }

      Game.setIdCounter(getLastId());
      console.log(games);
      return games;
    }
    console.log(games);
    return null;
  }

  async update(game: Game) {
    if (GameRepositoriesImpl.GameModel != null) {
      try {
        await GameRepositoriesImpl.GameModel.update(game, {
          where: { id_game: game.getId() }
        });
        console.log('Updated');
      } catch (error) {
        console.error('Error updating game:', error);
      }
    }
  }

  async delete(id: number): Promise<void> {
    if (GameRepositoriesImpl.GameModel != null) {
      await GameRepositoriesImpl.GameModel.destroy({ where: { id_game: id } });
    }
  }
}
